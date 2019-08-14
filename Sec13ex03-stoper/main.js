const starBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const timeDisplay = document.querySelector('.time div');
let time = 0;
let seconds = 0;
let hundreths = 0;
let indexOfInterval = 0;
let startFlag = false;

const start = () => {
    if (!startFlag) {
        indexOfInterval = setInterval(() => {
            time += 1;
            hundreths = time % 100;
            hundreths = hundreths < 10 ? `0${hundreths}` : `${hundreths}`;
            if (hundreths == 0) hundreths = "00";
            seconds = Math.floor(time / 100);
            timeDisplay.textContent = `${seconds}.${hundreths}s`;
        }, 10)
        startFlag = !startFlag;
    }

}
const reset = () => {
    if (startFlag) {
        clearInterval(indexOfInterval);
        seconds = 0;
        hundreths = 0;
        timeDisplay.textContent = "---";
    }
    startFlag = !startFlag;
}

starBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset)