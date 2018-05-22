"use strict"
class Enemy {
	constructor(position) {
		this.pos = position
	}

	draw() {
		context.fillStyle = "yellow"
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

	tick() {
		var destinations = this.findAvailableDestinations()
		if (destinations[0])
			this.pos = destinations[0]
		game.nextGrid.fields[this.pos.x][this.pos.y] = this
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