const options = ["rock", "paper", "scissors"];
const winners = [];

function getComputerChoice() {
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
}

function game() {
    for(let i = 1; i <=5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
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
    let playerWins = winners.filter((result) => result == "Player").length;
    let computerWins = winners.filter((result) => result == "Computer").length;
    let ties = winners.filter((result) => result == "Tie").length;
    console.log("Results:")
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerSelection, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerSelection);
    console.log(winner,"Won the round");
    console.log("---------------------------");
}

game(); 