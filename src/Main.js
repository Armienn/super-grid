"use strict"
var canvas
var context
var game = new Game()

window.onload = () => {
	canvas = document.createElement("canvas")
	document.body.appendChild(canvas)
	context = canvas.getContext("2d")
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	function onResize() {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
	}
	onresize = onResize

	requestAnimationFrame(drawFrame)
	setInterval(gameTick, 100)

	canvas.onclick = (event) => {
		game.selected = positionFromClick(event)
	}
	window.onkeypress = (event) => {
		if (!game.selected)
			return
		if (event.key == "t") {
			game.add(new Tower(), game.selected)
		}
	}
}

function drawFrame(time) {
	context.fillStyle = "black"
	context.fillRect(0, 0, canvas.width, canvas.height)
	game.draw()
	requestAnimationFrame(drawFrame)
}

function gameTick() {
	game.tick()
}

function positionFromClick(event) {
	var rect = canvas.getBoundingClientRect()
	var mx = event.clientX - rect.left
	var my = event.clientY - rect.top
	var x = Math.floor(mx / game.gridSize)
	var y = Math.floor(my / game.gridSize)
	return new Vector(x, y)
}