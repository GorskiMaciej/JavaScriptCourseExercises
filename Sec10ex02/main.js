// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
let numberOfLetter = 0;
let numberOfSentence = 0;

const addLetter = () => {
    if (numberOfLetter >= 0) {
        spnText.textContent += txt[numberOfSentence][numberOfLetter];
    };
    numberOfLetter++;
    if (numberOfLetter === txt[numberOfSentence].length) {

        numberOfSentence++;
        if (numberOfSentence === txt.length) return;

        return setTimeout(() => {
            spnText.textContent = "";
            numberOfLetter = -5;
            addLetter();
        }, 2000)


    }




    setTimeout(addLetter, 300)

}


addLetter();



const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);