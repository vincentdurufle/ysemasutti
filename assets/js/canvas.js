function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);

    var {
        x,
        y
    } = getTouchPos(canvas, e);
    if (x == false || y == false) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        [lastX, lastY] = [x, y];
    }

}

function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    if (touchEvent.type == 'mousemove' || touchEvent.type == 'mousedown') {
        return {
            x: false,
            y: false
        };
    } else {
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };

    }
}

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;
ctx.strokeStyle = "white";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '5';


//mouse event
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//touch event
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    [lastX, lastY] = [getTouchPos(canvas, e)];
});
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchcancel', () => isDrawing = false);