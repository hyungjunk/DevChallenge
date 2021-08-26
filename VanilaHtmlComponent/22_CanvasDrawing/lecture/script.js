var minusBtn = document.getElementById('decrease');
var plusBtn = document.getElementById('increase');
var clearBtn = document.getElementById('clear');
var spanEl = document.getElementById('size');
var color = document.getElementById('color');
minusBtn.addEventListener('click', function (e) {
    spanEl.textContent = "" + (+spanEl.textContent - 10);
});
plusBtn.addEventListener('click', function (e) {
    spanEl.textContent = "" + (+spanEl.textContent + 10);
});
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, +spanEl.textContent, 0, Math.PI * 2);
    ctx.fillStyle = color.value;
    console.log(color.value);
    ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color.value;
    ctx.lineWidth = +spanEl.textContent * 2;
    ctx.stroke();
}
var isDragging = false;
var x, y;
canvas.addEventListener('mousedown', function (e) {
    x = e.offsetX;
    y = e.offsetY;
    isDragging = true;
});
canvas.addEventListener('mousemove', function (e) {
    if (!isDragging)
        return;
    var _a = [e.offsetX, e.offsetY], currentX = _a[0], currentY = _a[1];
    drawCircle(e.offsetX, e.offsetY);
    drawLine(x, y, e.offsetX, e.offsetY);
    x = currentX;
    y = currentY;
});
canvas.addEventListener('dragleave', function (e) {
    console.log('drag leave');
});
canvas.addEventListener('mouseup', function (e) {
    console.log('mouse up');
    isDragging = false;
});
canvas.addEventListener('mouseout', function (e) {
    console.log('mouse out');
    isDragging = false;
});
clearBtn.addEventListener('click', function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
