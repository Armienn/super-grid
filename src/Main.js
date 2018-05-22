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

	game.startGame()

	requestAnimationFrame(drawFrame)
	setInterval(gameTick, 50)

	canvas.onclick = (event) => {
		game.selected = positionFromClick(event)
	}
	window.onkeypress = (event) => {
		if (!game.selected)
			return
		if (event.key == "t")
			game.addTower(game.selected)
		if (event.key == "w")
			game.addWall(game.selected)
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

function HSVtoRGB(h, s, v) {
	var r, g, b, i, f, p, q, t
	i = Math.floor(h * 6)
	f = h * 6 - i
	p = v * (1 - s)
	q = v * (1 - f * s)
	t = v * (1 - (1 - f) * s)
	switch (i % 6) {
		case 0:
			r = v
			g = t
			b = p
			break
		case 1:
			r = q
			g = v
			b = p
			break
		case 2:
			r = p
			g = v
			b = t
			break
		case 3:
			r = p
			g = q
			b = v
			break
		case 4:
			r = t
			g = p
			b = v
			break
		case 5:
			r = v
			g = p
			b = q
			break
	}
	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255)
	}
}

function ToRgbString(r, g, b) {
	if (r.r !== undefined) {
		g = r.g
		b = r.b
		r = r.r
	}
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
