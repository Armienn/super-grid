"use strict"
class Tower {
	constructor(position) {
		this.pos = position
		this.health = 10
	}

	draw() {
		context.fillStyle = ToRgbString(HSVtoRGB(0.03 * this.health, 1, 1))
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

	tick() {
		if (this.health > 0)
			game.nextGrid.fields[this.pos.x][this.pos.y] = this
	}
}