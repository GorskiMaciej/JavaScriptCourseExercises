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

function publishResult(player, computer, result) {
    let winner = document.querySelector('[data-summary="who-win"]');
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = computer;
    document.querySelector('.numbers span').textContent = gameSummary.numberOfGames++;

    if (result === "draw") {
        document.querySelector('.draws span').textContent = ++gameSummary.draws;
        winner.textContent = "Remis :/";
        winner.style.color = "grey";
    } else if (result === "win") {
        document.querySelector('.wins span').textContent = ++gameSummary.wins;
        winner.textContent = "Gracz! :)";
        winner.style.color = "green";
    } else {
        document.querySelector('.losses span').textContent = ++gameSummary.losses;
        winner.textContent = "Komputer :(";
        winner.style.color = "red";
    }

}

function resetActualGame() {
    document.querySelector(`[data-option ="${actualGame.playerSelection}"]`).style.boxShadow = "none";
    actualGame.playerSelection = "";
};

function start() {
    if (!actualGame.playerSelection) {
        return alert("proszę wybrać symbol");
    }
    actualGame.computerSelection = randomComputerChoise();
    const gameResult = checkResult(actualGame.playerSelection, actualGame.computerSelection)
    publishResult(actualGame.playerSelection, actualGame.computerSelection, gameResult);
    resetActualGame();
}

images.forEach(image => image.addEventListener('click', handSelection));

document.querySelector('button.start').addEventListener('click', start);