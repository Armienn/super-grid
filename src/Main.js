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

	/*Browser.window.addEventListener("keyup", function (event) {
			pressedKeys[event.key] = false;
	});
	Browser.window.addEventListener("keydown", function (event) {
			pressedKeys[event.key] = true;
	});


	function gameLoop() {
		controlCar(car1, "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight");
		controlCar(car2, "w", "a", "s", "d");
		car1.applyFriction(getFriction(getCollidingObjects(car1.position)));
		car2.applyFriction(getFriction(getCollidingObjects(car2.position)));
		car1.updatePosition();
		car2.updatePosition();
		car1.color = "green";
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.save();
		var scaleFactor = calculateScaleFactor();
		var focusPoint = car1.position.add(car2.position).divide(2/scaleFactor);
		var midPoint = new Vector(0.5*canvas.width,0.5*canvas.height);
		context.translate(midPoint.x-focusPoint.x, midPoint.y-focusPoint.y);
		context.scale(scaleFactor, scaleFactor);
		environment.draw(context);
		car1.draw(context);
		car2.draw(context);
		context.restore();
	}

	var timer = new haxe.Timer(30);
	timer.run = gameLoop;*/
}

function drawFrame(time) {
	context.fillStyle = "black"
	context.fillRect(0, 0, canvas.width, canvas.height)
	game.draw()
	requestAnimationFrame(drawFrame)
}

function gameTick(){
	game.tick()
}
