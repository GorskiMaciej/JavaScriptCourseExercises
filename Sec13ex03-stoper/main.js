const starBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const timeDisplay = document.querySelector('.time div');
let time = 0;
let indexOfInterval = 0;
let startFlag = false;

const start = () => {
    starBtn.textContent = "Pause"
    if (!startFlag) {
        indexOfInterval = setInterval(() => {
            time++;
            timeDisplay.textContent = `${(time/100).toFixed(2)}s`;
        }, 10)
        startFlag = !startFlag;
    } else {
        clearInterval(indexOfInterval);
        starBtn.textContent = "Start"
        startFlag = !startFlag;
    }

}
const reset = () => {
    clearInterval(indexOfInterval);
    time = 0;
    timeDisplay.textContent = "---";
    starBtn.textContent = "Start"
    startFlag = false;
}

starBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset)