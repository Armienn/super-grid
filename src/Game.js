class Game {
	constructor() {
		this.grid = new Grid(30, 20)
		this.grid.fields[2][3] = new Enemy(2,3)
		this.nextGrid = new Grid(30, 20)
	}

	tick() {
		this.nextGrid = new Grid(30, 20)
		for (var i in this.grid.fields)
			for (var j in this.grid.fields[i])
				if (this.grid.fields[i][j])
					this.grid.fields[i][j].tick()
		this.grid = this.nextGrid
	}

	draw(){
		this.grid.draw()
	}
}