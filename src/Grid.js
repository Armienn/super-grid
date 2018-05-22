"use strict"
class Grid {
	constructor(width, height) {
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
		context.translate(i * game.gridSize, j * game.gridSize)
		if (this.fields[i][j])
			this.fields[i][j].draw()
		var selected = false
		if (game.selected)
			selected = game.selected.x == i && game.selected.y == j
		context.strokeStyle = selected ? "yellow" : "red"
		context.strokeRect(0, 0, game.gridSize, game.gridSize)
		context.restore()
	}

	surroundingFields(position) {
		var surrounding = []
		this.forSurroundingFields(position, (position, thing)=>{
			surrounding.push({position: position, thing: thing})
		})
		return surrounding
	}

	forSurroundingFields(position, callback) {
		for (var i = position.x - 1; i <= position.x + 1; i++)
			for (var j = position.y - 1; j <= position.y + 1; j++)
				if (i != j
					&& Math.abs((i-position.x) * (j-position.y)) < 0.01
					&& this.isWithinHorisontalBounds(i)
					&& this.isWithinVerticalBounds(j))
					callback(new Vector(i, j), this.fields[i][j])
	}

	isWithinHorisontalBounds(x) {
		return x >= 0 && x < this.fields.length
	}
	isWithinVerticalBounds(y) {
		return y >= 0 && y < this.fields[0].length
	}
}
