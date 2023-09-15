const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return  options[Math.floor(Math.random() * options.length)];
}

console.log(getComputerChoice()); // Working as intended




