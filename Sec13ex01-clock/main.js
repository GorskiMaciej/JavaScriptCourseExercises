const timeDisplay = document.querySelector('.clock span');

const clock = () => {
    const time = new Date();

    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

};

setInterval(clock, 1000);