const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam dolores facere totam consectetur sit tenetur iste est eaque sed illum consequatur quisquam magni cupiditate, THE END!";
const typedText = document.querySelector(".text");
let time = 40;
let indexLetter = 0;
const cursor = document.querySelector('.cursor');

const typing = () => {
    typedText.textContent += txt[indexLetter];
    indexLetter++;
    if (indexLetter === txt.length) clearInterval(indexOfFunction);
};

const cursorBlinking = () => cursor.classList.toggle('active');

const indexOfFunction = setInterval(typing, time);
setInterval(cursorBlinking, 400);