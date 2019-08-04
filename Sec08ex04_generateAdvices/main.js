const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.reset');
const input = document.querySelector('input');
const btnshowAdvice = document.querySelector('.showAdvice');
const btnshowAllAdvices = document.querySelector('.showAllAdvices');
const divRandomAnswer = document.querySelector('.randomAnwser');
const anwsers = ["Yes!", "No!"]

const addAnwser = (e) => {
    e.preventDefault();
    const newAnswer = input.value;
    anwsers.push(newAnswer);
    console.log(newAnswer);
    input.value = "";
};
const resetAnwser = (e) => {
    e.preventDefault();
    anwsers.length = 0;
    divRandomAnswer.textContent = "";

};
const showAdvice = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * anwsers.length);
    divRandomAnswer.textContent = anwsers[randomIndex];

};
const showAllAdvices = (e) => {
    e.preventDefault();
    alert(anwsers.join(" - "));

};

btnAdd.addEventListener('click', addAnwser);
btnReset.addEventListener('click', resetAnwser);
btnshowAdvice.addEventListener('click', showAdvice);
btnshowAllAdvices.addEventListener('click', showAllAdvices);