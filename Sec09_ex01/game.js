const images = [...document.querySelectorAll('.select img')];

const actualGame = {
    playerSelection: "",
    computerSelection: "",
    gameResult: "",
}

const gameSummary = {
    numberOfGames: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}



function handSelection() {
    actualGame.playerSelection = this.dataset.option;
    ++gameSummary.numberOfGames;
    images.forEach(image => image.style.boxShadow = "none")
    this.style.boxShadow = "0 0 0 3px #f00";
}

function randomComputerChoise() {
    return actualGame.computerSelection = images[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, computer) {
    if (player === computer) {
        return "draw";
    } else if ((player === "papier" && computer === "kamień") || (player === "nożyczki" && computer === "papier") || (player === "kamień" && computer === "nożyczki")) {
        return "win"
    } else {
        return "loss"
    }
}

function start() {
    if (!actualGame.playerSelection) {
        return alert("proszę wybrać symbol");
    }
    actualGame.computerSelection = randomComputerChoise();
    const gameResult = checkResult(actualGame.playerSelection, actualGame.computerSelection)
    console.log(gameResult);
}

images.forEach(image => image.addEventListener('click', handSelection));

document.querySelector('button.start').addEventListener('click', start);