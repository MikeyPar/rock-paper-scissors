function computerSelection() {
    let comChoice = (Math.floor(Math.random() * 3))
    if (comChoice == 0)
    {
        return "ROCK";
    }
    else if (comChoice == 1)
    {
        return "PAPER";
    }
    else if (comChoice == 2)
    {
        return "SCISSORS";
    }
}


function playerSelection() {
    let playerChoice = prompt("Enter Rock, Paper, or Scissors.");
    return playerChoice.toUpperCase();

}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) 
    {
        return "Tie!";
    }
    if (playerSelection == "ROCK")
    {
        if (computerSelection == "PAPER") 
        {
            return "You Lose!";
            comScore++;
        }
        else if (computerSelection == "SCISSORS")
        {
            return "You Win!";
            playerScore++;
        }
    }
    else if (playerSelection == "PAPER")
    {
        if (computerSelection == "ROCK") 
        {
            return "You Win!";
            playerScore++;
        }
        else if (computerSelection == "SCISSORS")
        {
            return "You Lose!";
            comScore++;
        }
    }
    else if (playerSelection == "SCISSORS")
    {
        if (computerSelection == "ROCK") 
        {
            return "You Lose!";
            comScore++;
        }
        else if (computerSelection == "PAPER")
        {
            return "You Win!";
            playerScore++;
        }
    }
}

function game() 
{
    let playerScore = 0;
    let comScore = 0;
    for (i = 0; i < 5; i++)
    {
        console.log(playRound(playerSelection(), computerSelection()));
    }
    if (playerScore > comScore)
    {
        console.log("You win the game!");
    }
    else 
    {
        console.log("You lose the game!");
    }
}

game();