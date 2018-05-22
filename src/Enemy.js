"use strict"
class Enemy {
	constructor(position) {
		this.pos = position
		this.cooldown = 0
	}

	draw() {
		context.fillStyle = "yellow"
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

	tick() {
		this.cooldown--
		if (this.cooldown <= 0)
			this.doSomething()
		game.nextGrid.fields[this.pos.x][this.pos.y] = this
	}

	doSomething() {
		game.grid.forSurroundingFields(this.pos, (position, thing) => {
			if (thing instanceof Tower && this.cooldown <= 0) {
				thing.health--
				this.cooldown = 10
			}
		})
		if (this.cooldown > 0)
			return
		var destinations = this.findAvailableDestinations()
		if (destinations[0]){
			this.pos = destinations[0]
			this.cooldown = 5
		}
	}

	findAvailableDestinations() {
		var availables = []
		game.grid.forSurroundingFields(this.pos, (position, thing) => {
			if (!thing)
				availables.push(position)
		})
		return availables
	}
}