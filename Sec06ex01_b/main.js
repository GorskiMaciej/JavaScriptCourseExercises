const h1 = document.querySelector('h1');


document.body.addEventListener('mousemove', (e) => {
    const bodyBgc = document.body;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    const red = cursorX / windowWidth * 255;
    const green = cursorY / windowHeight * 255;
    const blue = ((cursorX / windowWidth * 255) + (cursorY / windowHeight * 255)) / 2;

    h1.textContent = `${e.clientX},${e.clientY}`;
    bodyBgc.style.backgroundColor = `rgb(${red},${green},${blue})`;
})