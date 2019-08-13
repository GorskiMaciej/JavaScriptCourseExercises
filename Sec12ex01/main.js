let clickNumber = 0;

const counterDisplay = document.querySelector('.counter');

const counting = () => {
    clickNumber++;
    counterDisplay.textContent = clickNumber;
};

window.addEventListener("click", counting)