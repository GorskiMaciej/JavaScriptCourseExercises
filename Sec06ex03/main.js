const div = document.querySelector('div');

let divX = 100;
let divY = 100;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let insertDivX;
let insertDivY;

let drawActive = false;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = "grey";
    drawActive = !drawActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener('mousemove', (e) => {
    if (drawActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})

div.addEventListener('mouseup', () => {
    div.style.backgroundColor = "black";
    drawActive = !drawActive;
})