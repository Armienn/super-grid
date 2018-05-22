"use strict"
class Field {
	constructor(i, j, gridSize) {
		this.x = i
		this.y = j
		this.gridSize = gridSize
		this.thing = null
	}

	draw() {
		context.save()
		context.translate(this.x * this.gridSize, this.y * this.gridSize)
		if (this.thing)
			this.thing.draw()
		context.strokeStyle = "red"
		context.strokeRect(0, 0, this.gridSize, this.gridSize)
		context.restore()
	}

	tick() {
		if (this.thing)
			this.thing.tick()
	}
}
