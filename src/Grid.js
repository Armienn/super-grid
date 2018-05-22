"use strict"
class Grid {
	constructor(width, height) {
		this.gridSize = 30
		this.fields = []
		for (var i = 0; i < width; i++) {
			var blub = []
			for (var j = 0; j < height; j++)
				blub.push(new Field(i, j, this.gridSize))
			this.fields.push(blub)
		}
	}

	draw() {
		for (var i in this.fields)
			for (var j in this.fields[i])
				this.fields[i][j].draw()
	}

	tick(){
		for (var i in this.fields)
			for (var j in this.fields[i])
				this.fields[i][j].tick()
	}
}
