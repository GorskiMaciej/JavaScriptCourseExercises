const targetTime = new Date('2019-09-27 15:00:00').getTime();

const coutningdown = () => {
    const nowTime = new Date().getTime();
    const daysDisplay = document.querySelector('.d');
    const hoursDisplay = document.querySelector('.h');
    const minutesDisplay = document.querySelector('.m');
    const secondsDisplay = document.querySelector('.s');

    let days = Math.floor((targetTime - nowTime) / (1000 * 60 * 60 * 24));
    days = days < 10 ? `0${days} ` : `${days} `;
    let hours = Math.floor(((targetTime - nowTime) / (1000 * 60 * 60)) % 24);
    hours = hours < 10 ? `0${hours} ` : `${hours} `;
    let minutes = Math.floor(((targetTime - nowTime) / (1000 * 60)) % 60);
    minutes = minutes < 10 ? `0${minutes} ` : `${minutes} `;
    let seconds = Math.floor(((targetTime - nowTime) / 1000) % 60);
    seconds = seconds < 10 ? `0${seconds} ` : `${seconds} `;


    daysDisplay.textContent = days;
    hoursDisplay.textContent = hours;
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}

setInterval(coutningdown, 1000)