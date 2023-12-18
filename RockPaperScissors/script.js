function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    default:
      return "Scissors";
      break;
  }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors";
    }
}

console.log(playRound("Rock", getComputerChoice()));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round.includes("win", "Win")) {
            playerScore++;
        }
        else if (round.includes("lose", "Lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }
}

console.log(game());