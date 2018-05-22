"use strict"
class Enemy {
	constructor(position) {
		this.pos = position
		this.cooldown = 0
	}

	draw() {
		context.fillStyle = "purple"
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

	tick() {
		var core = game.grid.surroundingFields(this.pos).filter(e => e.thing instanceof Core)[0]
		if (core) {
			game.remove(core.thing.pos)
		}

		this.cooldown--
		if (this.cooldown <= 0)
			this.doSomething()
		game.nextGrid.fields[this.pos.x][this.pos.y] = this
	}

	doSomething() {
		var towers = game.grid.surroundingFields(this.pos).filter(e => e.thing instanceof Tower)
		var destinations = game.grid.surroundingFields(this.pos).filter(e => !e.thing).map(e => e.position).sort((a, b) => {
			return this.distanceToCore(a) - this.distanceToCore(b)
		})
		var possibilities = []
		if (towers.length)
			possibilities.push(() => { this.attack(towers) })
		if (destinations.length)
			possibilities.push(() => { this.move(destinations) })
		if (!possibilities.length)
			return
		var index = Math.floor(Math.random() * possibilities.length)
		possibilities[index]()
	}

	attack(towers) {
		var thing = towers[0]
		thing.thing.health--
		this.cooldown = 10
	}

	move(destinations) {
		this.pos = destinations[0]
		var index = Math.floor(Math.random() * destinations.length)
		if (Math.random() > 0.5)
			this.pos = destinations[index]
		this.cooldown = 5
	}

	distanceToCore(position) {
		return game.core.pos.copy().multiply(-1).add(position).lengthSquared()
	}
}