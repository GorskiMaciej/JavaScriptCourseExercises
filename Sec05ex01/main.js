const elements = [...document.querySelectorAll('li')];
const btnStart = document.querySelector('button');
let size = 10;
let firstTime = true;

// const action = () => {
//     if (firstTime) {
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].style.display = "block"
//             elements[i].style.fontSize = `${size}px`;
//             firstTime = false;
//         }
//     } else {
//         size++;
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].style.fontSize = `${size}px`;
//         }
//     }
// }
const action = () => {
    if (firstTime) {
        elements.forEach((element) => {
            element.style.display = "block";
            element.style.fontSize = `${size}px`;
        });
        firstTime = false;

    } else {
        size++;
        elements.forEach((element) => {
            element.style.fontSize = `${size}px`;
        });

    }
}

btnStart.addEventListener('click', action);