const h1 = document.querySelector('h1');
const bodyBgc = document.body;
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

document.body.addEventListener('mousemove', (e) => {
    h1.textContent = `${e.clientX},${e.clientY}`;
    bodyBgc.style.backgroundColor = `rgb(${e.clientX/windowWidth*255},${e.clientY/windowHeight*255},0)`;
})