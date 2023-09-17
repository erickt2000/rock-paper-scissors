const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

console.log(getComputerChoice()); // Working as intended

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else {
        return "It's a tie!"
    }
}

getComputerChoice();
