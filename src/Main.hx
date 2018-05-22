import js.Browser;

class Main {
    static var context: js.html.CanvasRenderingContext2D;
    static var canvas: js.html.CanvasElement;

    static function main() {
        Browser.window.onload = init;
    }

    static function init(){
        canvas = Browser.document.createCanvasElement();
        Browser.document.body.appendChild(canvas);
        context = canvas.getContext2d();
        canvas.width = Browser.window.innerWidth;
        canvas.height = Browser.window.innerHeight;
        function onResize() {
            canvas.width = Browser.window.innerWidth;
            canvas.height = Browser.window.innerHeight;
        }
        Browser.window.onresize = onResize;
        Browser.window.requestAnimationFrame(drawFrame);
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

    static function drawFrame(time: Float) {
        context.fillStyle = "black";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "blue";
        context.fillRect(time%1000, 0, 100, 100);
    }
}
