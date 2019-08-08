const images = [{
    img: "images/img1.jpg",
    text: "Pierwszy tekst"
}, {
    img: "images/img2.jpg",
    text: "Drugi tekst"
}, {
    img: "images/img3.jpg",
    text: "Trzeci tekst"
}];
const dots = [...document.querySelectorAll('.dots span')];
const img = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider');
const changeTime = 2000;
let slide = 0;

const changeDot = () => {
    const indexOfActive = dots.findIndex(dot => dot.classList.contains('active'));
    dots[indexOfActive].classList.remove('active');
    dots[slide].classList.add('active');
};

const changeSlide = () => {
    slide++;
    if (slide == images.length) {
        slide = 0;
    }
    img.src = images[slide].img;
    h1.textContent = images[slide].text;
    changeDot();
};

let indexOfInterval = setInterval(changeSlide, changeTime);

const keyChangeSlide = (e) => {
    clearInterval(indexOfInterval);
    if (e.keyCode === 37) {
        slide--;
        if (slide < 0) {
            slide = (images.length - 1);
        }

        console.log(slide);
    } else if (e.keyCode === 39) {
        slide++;
        if (slide === images.length) {
            slide = 0;
        }

        console.log(slide);
    } else return;
    img.src = images[slide].img;
    h1.textContent = images[slide].text;
    changeDot();
    indexOfInterval = setInterval(changeSlide, changeTime);
};

window.addEventListener('keydown', keyChangeSlide)