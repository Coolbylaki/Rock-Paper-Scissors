function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return randomChoice;
}