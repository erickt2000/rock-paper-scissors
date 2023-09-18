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
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Rock" && computerSelection === "Paper"
    || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else {
        return "It's a tie!"
    }
}

function game() {
    console.log("Welcome!");
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = "Rock";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();