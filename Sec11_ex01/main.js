// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/

const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

// Interfejs
const time = 1000;
let active = 0;

// const changeSlideWithArrows = (e) =>{

// }

const changeSlideWithArrows = (e) => {
    clearInterval(intervalID);
    if (e.keyCode == 37) {
        if (active == 0) {
            active = slideList.length - 1;
        } else {
            active--;
        }
    } else if (e.keyCode == 39) {
        if (active == slideList.length - 1) {
            active = 0;
        } else {
            active++;
        }
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
    intervalID = setInterval(changeSlide, time);
    console.log(active);
}

const changeDot = () => {
    let activeDot = dots.findIndex(dot => dot.classList.contains('active'))
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {

    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();

}
let intervalID = setInterval(changeSlide, time);

document.addEventListener('keydown', changeSlideWithArrows)


// Implementacje