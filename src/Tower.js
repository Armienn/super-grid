"use strict"
class Tower {
	constructor(position) {
		this.pos = position
	}

	draw() {
		context.fillStyle = "green"
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

	tick() {
		game.nextGrid.fields[this.pos.x][this.pos.y] = this
	}
}