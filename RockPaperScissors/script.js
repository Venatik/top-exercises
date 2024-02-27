const result = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

// console.log(getComputerChoice());
// result.innerText = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // result.innerHTML += "It's a tie!<br>";
        return "It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        // result.innerHTML += "You lose! Paper beats Rock<br>";
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        // result.innerHTML += "You win! Rock beats Scissors<br>";
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        // result.innerHTML += "You win! Paper beats Rock<br>";
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        // result.innerHTML += "You lose! Scissors beats Paper<br>";
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        // result.innerHTML += "You lose! Rock beats Scissors<br>";
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        // result.innerHTML += "You win! Scissors beats Paper<br>";
        return "You win! Scissors beats Paper";
    }
}

// btnRock.addEventListener("click", () => {
//     result.innerText = playRound("Rock", getComputerChoice());
// });

btnRock.addEventListener("click", () => {
    game("Rock");
});

// btnPaper.addEventListener("click", () => {
//     result.innerText = playRound("Paper", getComputerChoice());
// });

btnPaper.addEventListener("click", () => {
    game("Paper");
});

// btnScissors.addEventListener("click", () => {
//     result.innerText = playRound("Scissors", getComputerChoice());
// });

btnScissors.addEventListener("click", () => {
    game("Scissors");
});

// console.log(playRound("Rock", getComputerChoice()));

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let round = playRound(playerSelection, computerSelection);
    // console.log(round);
    if (round.includes("win")) {
        playerScore++;
        result.innerHTML += `You win! ${playerSelection} beats ${computerSelection}<br>`;
    }
    else if (round.includes("lose")) {
        computerScore++;
        result.innerHTML += `You lose! ${computerSelection} beats ${playerSelection}<br>`;
    } else {
        result.innerHTML += "It's a tie!<br>";
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            result.innerHTML = "";
            result.innerHTML += "You win the game!<br>";
        }
        else if (playerScore < computerScore) {
            result.innerHTML = "";
            result.innerHTML = "You lose the game!<br>";
        }
        else {
            result.innerHTML = "";
            result.innerHTML = "It's a tie!<br>";
        }
        setTimeout(function () {
            countdown(3);
        }, 1000);
    }
}

function resetGame() {
    result.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
}

function countdown(seconds) {
    let counter = seconds;
    let interval = setInterval(() => {
        result.innerHTML = `The game will reset in ${counter} seconds!`;
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            resetGame();
        }
    }, 1000)
}

// console.log(game());

