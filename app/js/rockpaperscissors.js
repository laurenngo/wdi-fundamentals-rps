////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move = move || 'getInput()';
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move = move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    
    if (computerMove === "rock") {
        if (playerMove === "scissors") {
            winner = "computer";
        }
        else if (playerMove === "paper") {
            winner = "player";
        }
        else if (playerMove === "rock") {
            winner = "tie";
        }
        else {
            winner = "Spock";
        }
    }

    if (computerMove === "scissors") {
        if (playerMove === "paper") {
            winner = "computer";
        }
        else if (playerMove === "rock") {
            winner = "player";
        }
        else if (playerMove === "scissors") {
            winner = "tie";
        }
        else {
            winner = "Spock";
        }
    }

    if (computerMove === "paper") {
        if (playerMove === "scissors") {
            winner = "Player";
        }
        else if (playerMove === "paper") {
            winner = "Tie";
        }
        else if (playerMove === "rock") {
            winner = "Computer";
        }
        else {
            winner = "Spock";
        }
    }
    return winner;
    }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

var playerWins = 0;
var computerWins = 0;

while ((playerWins < 5) && (computerWins < 5)) {

var playerMove = getInput ();
var computerMove = randomPlay ();
var winner = getWinner (playerMove, computerMove);

    
    if (winner === "player") {
    playerWins = playerWins + 1;
    }

    else if (winner === "computer") {
    computerWins = computerWins + 1;
    }

    else if (winner === "tie") {
    computerWins = computerWins + 1;
    playerWins = playerWins + 1;
    }

    else {
    break;
    }

    console.log ("The player chose " + playerMove + " and the computer chose " + computerMove + ".");
    console.log (winner + " won the round" + ".");
    console.log ("The player score is " + playerWins + " and the computer score is " + computerWins + ".");
}

if (computerWins > playerWins) {
    console.log ("Computer wins.");
}  
else if (playerWins > computerWins) {
    console.log ("Player wins.");
}
else {
    console.log ("Tie.");
}
return [playerWins, computerWins];
}
}

