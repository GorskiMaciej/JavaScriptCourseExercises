const displayTime = () => {
    const time = new Date();
    const actualTime = document.querySelector('.clock span');
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    actualTime.textContent = `${hours}:${minutes}:${seconds}`;
}


setInterval(displayTime, 1000);