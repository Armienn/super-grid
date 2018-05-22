"use strict"
class Tower {
	constructor(position) {
		this.pos = position
		this.health = 3
	}

	draw() {
		context.fillStyle = "blue"
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

	tick() {
		if (this.health > 0)
			game.nextGrid.fields[this.pos.x][this.pos.y] = this
	}
}