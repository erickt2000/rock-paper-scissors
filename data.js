const options = ["rock", "paper", "scissors"];
const winners = [];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function game() {
    for(let i = 1; i <=5; i++) {
        playRound();
    }
    logWins();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
}


function playerChoice() {
    let input = prompt("Type Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Please enter Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
        input = input.toLowerCase();
        check = validateInput(input);
    } 
    return input; 
}

function validateInput(choice) {
    return options.includes(choice); 
}

function checkWinner(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    console.log(winners);
}

game(); 