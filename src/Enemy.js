"use strict"
class Enemy {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	draw() {
		context.fillStyle = "yellow"
		context.fillRect(0, 0, 30, 30)
	}

	tick() {
		var destinations = this.findAvailableDestinations()
		if(destinations[0]){
			this.x = destinations[0].x
			this.y = destinations[0].y
		}
		game.nextGrid.fields[this.x][this.y] = this
	}

	findAvailableDestinations() {
		var availables = []
		game.grid.forSurroundingFields(this.x, this.y, (x, y, thing) => {
			if (!thing)
				availables.push({ x: x, y: y })
		})
		return availables
	}
}