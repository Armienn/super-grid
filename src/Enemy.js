"use strict"
class Enemy {
	constructor(field) {
		this.field = field
	}

	draw() {
		context.fillStyle = "yellow"
		context.fillRect(0, 0, 30, 30)
	}

	tick() {
		var nextX = this.field.x - 1
		if (nextX < 0)
			nextX = grid.fields.length - 1
		var nextY = this.field.y
		this.field.thing = null
		this.field = grid.fields[nextX][nextY]
		this.field.thing = this
	}
}