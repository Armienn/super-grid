"use strict"
class Grid {
	constructor(width, height) {
		this.gridSize = 30
		this.fields = []
		for (var i = 0; i < width; i++) {
			var blub = []
			for (var j = 0; j < height; j++)
				blub.push(null)
			this.fields.push(blub)
		}
	}

	draw() {
		for (var i in this.fields)
			for (var j in this.fields[i])
				this.drawField(+i, +j)
	}

	drawField(i, j) {
		context.save()
		context.translate(i * this.gridSize, j * this.gridSize)
		if (this.fields[i][j])
			this.fields[i][j].draw()
		context.strokeStyle = "red"
		context.strokeRect(0, 0, this.gridSize, this.gridSize)
		context.restore()
	}

	forSurroundingFields(x, y, callback) {
		for (var i = x - 1; i <= x + 1; i++)
			for (var j = y - 1; j <= y + 1; j++)
				if (i != j
					&& this.isWithinHorisontalBounds(i)
					&& this.isWithinVerticalBounds(j))
					callback(i, j, this.fields[i][j])
	}

	isWithinHorisontalBounds(x) {
		return x >= 0 && x < this.fields.length
	}
	isWithinVerticalBounds(y) {
		return y >= 0 && y < this.fields[0].length
	}
}
