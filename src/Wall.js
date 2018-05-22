"use strict"
class Wall extends Tower {
	constructor(position) {
		super(position)
		this.health = 10
	}

	draw() {
		context.fillStyle = ToRgbString(HSVtoRGB(0.03 * this.health, 1, 1))
		context.fillRect(0, 0, game.gridSize, game.gridSize)
	}

}