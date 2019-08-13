const timeCounter = document.querySelector('.timeCounter');

const timer = () => {
    let time = 0;

    const addTime = () => {
        setInterval(() => {
            time++;
            timeCounter.textContent = time;
        }, 1000)
    }

    return addTime;
}

const timeOnPage = timer();
timeOnPage();