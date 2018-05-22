"use strict"
class Core {
	constructor(position) {
		this.pos = position
		this.health = 10
	}

	draw() {
		context.save()
		context.translate(game.gridSize/2, game.gridSize/2)
		context.rotate(Math.PI * 0.25)
		context.fillStyle = "lightblue"
		context.fillRect(-game.gridSize/3, -game.gridSize/3, game.gridSize*2/3, game.gridSize*2/3)
		context.restore()
	}

	tick() {
		if (this.health > 0)
			game.nextGrid.fields[this.pos.x][this.pos.y] = this
	}
}