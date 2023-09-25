const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function game() {
    playRound();
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "Paper" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "rock") {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else {
        return `It's a tie! You both have ${playerSelection}`
    }
}

function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if (check == true) {
        console.log(input);
    }
    //console.log(input);

}

function validateInput(choice) {
    if (options.includes(choice)) {
        return true
    }
    return false;
}

game(); 