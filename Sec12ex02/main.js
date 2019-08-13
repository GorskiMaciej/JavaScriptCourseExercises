const counterDisplay = document.querySelector('.counter');

const add = (start = 0) => {
    let numberOfClicks = start;
    return () => {
        numberOfClicks++;
        counterDisplay.textContent = numberOfClicks;
    }
}
const couning = add(0);

window.addEventListener('click', couning);