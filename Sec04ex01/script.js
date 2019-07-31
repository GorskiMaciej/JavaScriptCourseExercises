const square = document.createElement('div');
document.body.appendChild(square);
let squareWidth = 100;
let flag = true;
// square.style.width = squareWidth;
square.style.width = `${squareWidth}px`;
square.style.height = `${squareWidth}px`;

window.addEventListener('scroll', () => {
    if (flag) {
        getBigger();
    } else {
        getSmaller();
    }

    if (squareWidth >= window.innerWidth / 2) {
        flag = false;
    } else if (squareWidth <= 0) {
        flag = true;
    }
})

const getSmaller = () => {
    squareWidth -= 5;
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;
};
const getBigger = () => {
    squareWidth += 5;
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareWidth}px`;
};