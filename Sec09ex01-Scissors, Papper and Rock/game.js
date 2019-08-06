const gesturesContainer = [...document.querySelectorAll('img')];


const gameResults = {
    playerChoice: "",
    aIChoice: "",
}
const gameStats = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const starGameBtn = document.querySelector('.start');

const playerChoice = (e) => {
    const choice = e.target.dataset.option;
    gameResults.playerChoice = choice;
    gesturesContainer.forEach((element) => {
        element.style.boxShadow = "0 0 0 white";
    })
    e.target.style.boxShadow = "0 0 10px Orange";
};

const aIdraw = () => {
    const index = Math.floor(Math.random() * gesturesContainer.length);
    const choice = gesturesContainer[index].dataset.option;
    return choice;
};

const checkResult = (player, ai) => {
    if (player == ai) {
        return "draw";
    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return "win";
    } else {
        return "loss";
    }
};

const publishResults = (player, ai, result) => {
    const YourChoiceText = document.querySelector('[data-summary="your-choice"]');
    const aIChoiceText = document.querySelector('[data-summary="ai-choice"]');
    const whoWinText = document.querySelector('[data-summary="who-win"]');
    const gamesStats = document.querySelector('.numbers span');
    const winsStats = document.querySelector('.wins span');
    const lossesStats = document.querySelector('.losses span');
    const drawsStats = document.querySelector('.draws span');

    YourChoiceText.textContent = player;
    aIChoiceText.textContent = ai;
    ++gameStats.games;

    if (result === "win") {
        whoWinText.style.color = "green";
        whoWinText.textContent = "Gracz!";
        ++gameStats.wins;
    } else if (result === "loss") {
        whoWinText.style.color = "red";
        whoWinText.textContent = "Komputer ;(";
        ++gameStats.losses;
    } else {
        whoWinText.style.color = "#444";
        whoWinText.textContent = "Remis :/";
        ++gameStats.draws;
    }
    gamesStats.textContent = gameStats.games;
    winsStats.textContent = gameStats.wins;
    lossesStats.textContent = gameStats.losses;
    drawsStats.textContent = gameStats.draws;
};

const resetGameResults = () => {
    gameResults.playerChoice = "";
    gameResults.aIChoice = "";
}

const startGame = () => {
    gesturesContainer.forEach((element) => {
        element.style.boxShadow = "0 0 0 white";
    });
    if (!gameResults.playerChoice) {
        return alert("Proszę wybrać gest!");
    }
    gameResults.aIChoice = aIdraw();
    const result = checkResult(gameResults.playerChoice, gameResults.aIChoice);

    publishResults(gameResults.playerChoice, gameResults.aIChoice, result);

    resetGameResults();
};


gesturesContainer.forEach((element) => {
    element.addEventListener("click", playerChoice);
});

starGameBtn.addEventListener("click", startGame);