const btnStart = document.querySelector('button');
const liElements = document.querySelectorAll('li');
const liTable = [...liElements];
let sizeOfFont = 10;
let firstClick = true;

// function action() {  //with loop for

//     if (numberOfClicks == 0) {
//         for (let i = 0; i < liTable.length; i++) {
//             liTable[i].style.display = "block";
//             liTable[i].style.fontSize = sizeOfFont + "px";
//         }

//         ++numberOfClicks;

//     } else {
//         for (let i = 0; i < liTable.length; i++) {
//             liTable[i].style.fontSize = sizeOfFont + "px";
//         }
//         sizeOfFont++;
//     }
// };

function action() { // with foreach method

    if (firstClick) {
        liTable.forEach(function (element) {
            element.style.display = "block";
            element.style.fontSize = sizeOfFont + "px";
        });
        firstClick = !firstClick;

    } else {
        sizeOfFont++;
        liTable.forEach(function (element) {
            element.style.fontSize = sizeOfFont + "px";
        });

    }
};

btnStart.addEventListener('click', action);