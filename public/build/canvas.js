(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["canvas"],{

/***/ "./assets/js/canvas.js":
/*!*****************************!*\
  !*** ./assets/js/canvas.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);

  var _getTouchPos = getTouchPos(canvas, e),
      x = _getTouchPos.x,
      y = _getTouchPos.y;

  if (x == false || y == false) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    var _ref = [e.offsetX, e.offsetY];
    lastX = _ref[0];
    lastY = _ref[1];
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
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

var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;
ctx.strokeStyle = "white";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '5'; //mouse event

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function (e) {
  isDrawing = true;
  var _ref2 = [e.offsetX, e.offsetY];
  lastX = _ref2[0];
  lastY = _ref2[1];
});
canvas.addEventListener('mouseup', function () {
  return isDrawing = false;
});
canvas.addEventListener('mouseout', function () {
  return isDrawing = false;
}); //touch event

canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchstart', function (e) {
  isDrawing = true;
  var _ref3 = [getTouchPos(canvas, e)];
  lastX = _ref3[0];
  lastY = _ref3[1];
});
canvas.addEventListener('touchend', function () {
  return isDrawing = false;
});
canvas.addEventListener('touchcancel', function () {
  return isDrawing = false;
});

/***/ })

},[["./assets/js/canvas.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FudmFzLmpzIl0sIm5hbWVzIjpbImRyYXciLCJlIiwiaXNEcmF3aW5nIiwiY3R4IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGFzdFgiLCJsYXN0WSIsImdldFRvdWNoUG9zIiwiY2FudmFzIiwieCIsInkiLCJsaW5lVG8iLCJvZmZzZXRYIiwib2Zmc2V0WSIsInN0cm9rZSIsImNhbnZhc0RvbSIsInRvdWNoRXZlbnQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidHlwZSIsInRvdWNoZXMiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJnZXRDb250ZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lSm9pbiIsImxpbmVDYXAiLCJsaW5lV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFTQSxJQUFULENBQWNDLENBQWQsRUFBaUI7QUFDYixNQUFJLENBQUNDLFNBQUwsRUFBZ0I7QUFDaEJDLEtBQUcsQ0FBQ0MsU0FBSjtBQUNBRCxLQUFHLENBQUNFLE1BQUosQ0FBV0MsS0FBWCxFQUFrQkMsS0FBbEI7O0FBSGEscUJBUVRDLFdBQVcsQ0FBQ0MsTUFBRCxFQUFTUixDQUFULENBUkY7QUFBQSxNQU1UUyxDQU5TLGdCQU1UQSxDQU5TO0FBQUEsTUFPVEMsQ0FQUyxnQkFPVEEsQ0FQUzs7QUFTYixNQUFJRCxDQUFDLElBQUksS0FBTCxJQUFjQyxDQUFDLElBQUksS0FBdkIsRUFBOEI7QUFDMUJSLE9BQUcsQ0FBQ1MsTUFBSixDQUFXWCxDQUFDLENBQUNZLE9BQWIsRUFBc0JaLENBQUMsQ0FBQ2EsT0FBeEI7QUFDQVgsT0FBRyxDQUFDWSxNQUFKO0FBRjBCLGVBR1QsQ0FBQ2QsQ0FBQyxDQUFDWSxPQUFI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QixhQUF4QixFQUF1QztBQUFBLFNBQU1wQyxTQUFTLEdBQUcsS0FBbEI7QUFBQSxDQUF2QyxFIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRyYXcoZSkge1xyXG4gICAgaWYgKCFpc0RyYXdpbmcpIHJldHVybjtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8obGFzdFgsIGxhc3RZKTtcclxuXHJcbiAgICB2YXIge1xyXG4gICAgICAgIHgsXHJcbiAgICAgICAgeVxyXG4gICAgfSA9IGdldFRvdWNoUG9zKGNhbnZhcywgZSk7XHJcbiAgICBpZiAoeCA9PSBmYWxzZSB8fCB5ID09IGZhbHNlKSB7XHJcbiAgICAgICAgY3R4LmxpbmVUbyhlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIFtsYXN0WCwgbGFzdFldID0gW2Uub2Zmc2V0WCwgZS5vZmZzZXRZXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgW2xhc3RYLCBsYXN0WV0gPSBbeCwgeV07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3VjaFBvcyhjYW52YXNEb20sIHRvdWNoRXZlbnQpIHtcclxuICAgIHZhciByZWN0ID0gY2FudmFzRG9tLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgaWYgKHRvdWNoRXZlbnQudHlwZSA9PSAnbW91c2Vtb3ZlJyB8fCB0b3VjaEV2ZW50LnR5cGUgPT0gJ21vdXNlZG93bicpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBmYWxzZSxcclxuICAgICAgICAgICAgeTogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0b3VjaEV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICAgICAgeTogdG91Y2hFdmVudC50b3VjaGVzWzBdLmNsaWVudFkgLSByZWN0LnRvcFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5sZXQgaXNEcmF3aW5nID0gZmFsc2U7XHJcbmxldCBsYXN0WCA9IDA7XHJcbmxldCBsYXN0WSA9IDA7XHJcbmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4LmxpbmVKb2luID0gJ3JvdW5kJztcclxuY3R4LmxpbmVDYXAgPSAncm91bmQnO1xyXG5jdHgubGluZVdpZHRoID0gJzUnO1xyXG5cclxuXHJcbi8vbW91c2UgZXZlbnRcclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRyYXcpO1xyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgIGlzRHJhd2luZyA9IHRydWU7XHJcbiAgICBbbGFzdFgsIGxhc3RZXSA9IFtlLm9mZnNldFgsIGUub2Zmc2V0WV07XHJcbn0pO1xyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IGlzRHJhd2luZyA9IGZhbHNlKTtcclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4gaXNEcmF3aW5nID0gZmFsc2UpO1xyXG5cclxuLy90b3VjaCBldmVudFxyXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZHJhdyk7XHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcclxuICAgIGlzRHJhd2luZyA9IHRydWU7XHJcbiAgICBbbGFzdFgsIGxhc3RZXSA9IFtnZXRUb3VjaFBvcyhjYW52YXMsIGUpXTtcclxufSk7XHJcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IGlzRHJhd2luZyA9IGZhbHNlKTtcclxuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgKCkgPT4gaXNEcmF3aW5nID0gZmFsc2UpOyJdLCJzb3VyY2VSb290IjoiIn0=