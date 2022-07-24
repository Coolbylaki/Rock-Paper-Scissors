// Global counter which will be changed in playRound function and reset on refresh
let counter = 0;

// Generate random computer choice
function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice;
}

// Make one round function
function playRound(playerSelection, computerSelection) {
    // Make it lowercase so it's case sensitive
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock" && computerSelection === "paper") {
        counter--
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        counter++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        counter++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        counter--;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        counter--;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        counter++;
        return "You Win! Scissors beats Paper";
    } else {
        return "It's a draw!";
    }
}

// Make a function called game where 5 rounds will be played
function game() {
    for (let i = 0; i < 5; i++) {
        // Take user input every time
        const userInput = prompt("Rock/Paper/Scissors");
        console.log(playRound(userInput, getComputerChoice()));
    }

    // Check counter to see who is the winner in best of 5
    if (counter < 0) {
        return "Computer won!";
    } else if (counter > 0) {
        return "You won!";
    } else {
        return "It's a draw!";
    }
}

// Play the actual game and alert the result!
alert(game());