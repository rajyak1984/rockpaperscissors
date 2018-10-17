let playerChoice = "";
let computerChoice = "";
let results = "";

function rock() {
    playerChoice = "rock";
    computerTurn();
    game(playerChoice, computerChoice);
    output();
}

function paper() {
    playerChoice = "paper";
    computerTurn();
    game(playerChoice, computerChoice);
    output();

}

function scissors() {
    playerChoice = "scissors";
    computerTurn();
    game(playerChoice, computerChoice);
    output();
}

//Here comes the computerChoice//
function computerTurn() {
    let choice = Math.random();
    if (choice <= 0.34) {
        computerChoice = 'Rock';
    } else if (choice <= 0.67) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}

function game(playerChoice, computerChoice){
    console.log(playerChoice);
    console.log(computerChoice);
    if (playerChoice == computerChoice) {
        return 'It is a tie';
    } else if (playerChoice == 'rock' && computerChoice == 'Scissors') {
        results = 'player Wins';
    } else if (playerChoice == 'paper' && computerChoice == 'Rock') {
        results = 'player wins';
    } else if (playerChoice == 'scissors' && computerChoice == 'Paper') {
        results = 'player wins';
    } else {
        results = 'computer wins';
    }
}

function output(){
    let computerSelection = document.getElementById('computerOutcome');
    let playerSelection = document.getElementById('playerOutcome');
    let resultSection = document.getElementById('results');

// document.querySelector("#results"). = results;
// let compChoice = document.createTextNode( computerChoice);
// let playChoice = document.createTextNode( playerChoice);

computerSelection.innerHTML = "Computer: " + computerChoice;
playerSelection.innerHTML = "Player: " + playerChoice;
resultSection.innerHTML = "Results: " + results;
}