class Game {
	constructor() {
		this.gridSize = 30
		this.grid = new Grid(30, 20)
		this.add(new Enemy(), new Vector(2, 3))
		this.nextGrid = new Grid(30, 20)
		this.selected = null
	}

	tick() {
		this.nextGrid = new Grid(30, 20)
		for (var i in this.grid.fields)
			for (var j in this.grid.fields[i])
				if (this.grid.fields[i][j])
					this.grid.fields[i][j].tick()
		this.grid = this.nextGrid
	}

	draw() {
		this.grid.draw()
	}

	add(thing, position) {
		this.grid.fields[position.x][position.y] = thing
		thing.pos = position
	}
}