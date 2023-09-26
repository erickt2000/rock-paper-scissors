const options = ["rock", "paper", "scissors"];
playerSelection = playerChoice();
computerSelection = getComputerChoice();

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function game() {
    playRound();
}
function playRound(playerSelection, computerSelection) {
    

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
        return input;
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Please enter with correct spelling");
        input = input.toLowerCase();
        check = validateInput(input);
    }
    console.log(input);

}

function validateInput(choice) {
    return options.includes(choice); 
}

game(); 