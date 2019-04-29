const startPauseBtn = document.querySelector('button.main');
const resetBtn = document.querySelector('button.reset');
let timeDisplay = document.querySelector('.time div');
let time = 0;
let indexOfInterval = 0;
let activeTime = false;

const resetTime = () => {
    clearInterval(indexOfInterval);
    timeDisplay.textContent = "---";
    startPauseBtn.textContent = "Start";
    time = 0;
    if (activeTime) {
        activeTime = !activeTime;
    }
}

const stoper = () => {
    if (!activeTime) {
        startPauseBtn.classList.add('active');
        startPauseBtn.textContent = "Pauza"
        indexOfInterval = setInterval(() => {
            time++;
            timeDisplay.textContent = (time / 100).toFixed(2);
        }, 10)
    } else {
        clearInterval(indexOfInterval);
        startPauseBtn.textContent = "Start"
    }
    activeTime = !activeTime;
}



startPauseBtn.addEventListener('click', stoper);
resetBtn.addEventListener('click', resetTime)