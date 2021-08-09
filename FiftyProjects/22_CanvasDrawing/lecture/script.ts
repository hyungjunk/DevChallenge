const minusBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('decrease')
const plusBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('increase')
const clearBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('clear')
const spanEl: HTMLSpanElement = document.getElementById('size')
const color: HTMLInputElement = <HTMLInputElement>document.getElementById('color')

minusBtn.addEventListener('click', e=> {
    spanEl.textContent = `${+spanEl.textContent - 10}`;
})

plusBtn.addEventListener('click', e=> {
    spanEl.textContent = `${+spanEl.textContent + 10}`;
})

const canvas:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d')

function drawCircle(x:number, y:number) {
    ctx.beginPath();
    ctx.arc(x, y, +spanEl.textContent, 0, Math.PI * 2);
    ctx.fillStyle = color.value;
    console.log(color.value)
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color.value;
    ctx.lineWidth = +spanEl.textContent*2;
    ctx.stroke();
}

let isDragging = false;
let x, y;

canvas.addEventListener('mousedown', e=> {
    x = e.offsetX
    y = e.offsetY
    isDragging = true;
})

canvas.addEventListener('mousemove', e=> {
    if (!isDragging) return;
    let [currentX, currentY] = [e.offsetX, e.offsetY];
    drawCircle(e.offsetX, e.offsetY)
    drawLine(x, y, e.offsetX, e.offsetY)
    x = currentX
    y = currentY
})

canvas.addEventListener('dragleave', e=> {
    console.log('drag leave')
})

canvas.addEventListener('mouseup', e=> {
    console.log('mouse up')
    isDragging = false;
})

canvas.addEventListener('mouseout', e=> {
    console.log('mouse out')
    isDragging = false;
})

clearBtn.addEventListener('click', (e)=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})