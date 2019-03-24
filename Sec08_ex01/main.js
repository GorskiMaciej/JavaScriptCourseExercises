const addAdviceBtn = document.querySelector('.add');
const resetAdvicesBtn = document.querySelector('.clean');
const showChoosenAdviceBtn = document.querySelector('.showAdvice');
const showAllOptionsBtn = document.querySelector('.showOptions');
let adviceDiplay = document.querySelector('h1');
const advices = ["działaj", "Wyluzuj"];

const addingAdviceToArray = (e) => {
    e.preventDefault();
    const textInput = document.querySelector('input');
    const advice = textInput.value;
    advices.push(advice);
}

const resetAdvices = (e) => {
    e.preventDefault();
    advices.length = 0;
}

const showRandomAdvice = (e) => {
    e.preventDefault();
    let indexOfAdvice = Math.floor(Math.random() * advices.length);
    adviceDiplay.textContent = advices[indexOfAdvice];
};

const showAllOptions = (e) => {
    e.preventDefault();
    let alertMessage = "";
    advices.forEach(element => {
        alertMessage += element + ", "
    })
    alert(`Dostępne rady: ${alertMessage} `);
};



addAdviceBtn.addEventListener('click', addingAdviceToArray);
resetAdvicesBtn.addEventListener('click', resetAdvices);
showChoosenAdviceBtn.addEventListener('click', showRandomAdvice);
showAllOptionsBtn.addEventListener('click', showAllOptions);