let playerScore = 0;
let comScore = 0;

document.getElementById("pscore").innerHTML = "Player Score: " + playerScore;
document.getElementById("cscore").innerHTML = "Com Score: " + comScore;

const rbutton = document.querySelector('#rbutton');
rbutton.addEventListener('click', () => {
    playerChoice = "ROCK";
    comChoice = computerSelection();
    playRound(playerChoice, comChoice);
    updateScore();
    gameOver();
});
const pbutton = document.querySelector('#pbutton');
pbutton.addEventListener('click', () => {
    playerChoice = "PAPER";
    comChoice = computerSelection();
    playRound(playerChoice, comChoice);
    updateScore();
    gameOver();
});
const sbutton = document.querySelector('#sbutton');
sbutton.addEventListener('click', () => {
    playerChoice = "SCISSORS";
    comChoice = computerSelection();
    playRound(playerChoice, comChoice);
    updateScore();
    gameOver();
});



const text = document.querySelector('.text');
function playRound(playerChoice, computerSelection){
    if (playerChoice == computerSelection) 
    {
        text.textContent = "Tie!";
    }
    if (playerChoice == "ROCK")
    {
        if (computerSelection == "PAPER") 
        {
            text.textContent = "You Lose!";
            comScore++;
        }
        else if (computerSelection == "SCISSORS")
        {
            text.textContent = "You Win!";
            playerScore++;
        }
    }
    else if (playerChoice == "PAPER")
    {
        if (computerSelection == "ROCK") 
        {
            text.textContent = "You Win!";
            playerScore++;
        }
        else if (computerSelection == "SCISSORS")
        {
            text.textContent = "You Lose!";
            comScore++;
        }
    }
    else if (playerChoice == "SCISSORS")
    {
        if (computerSelection == "ROCK") 
        {
            text.textContent = "You Lose!";
            comScore++;
        }
        else if (computerSelection == "PAPER")
        {
            text.textContent = "You Win!";
            playerScore++;
        }
    }

}

function computerSelection() {
    let x = (Math.floor(Math.random() * 3))
    if (x == 0)
    {
        return "ROCK";
    }
    else if (x == 1)
    {
        return "PAPER";
    }
    else if (x == 2)
    {
        return "SCISSORS";
    }
}

function updateScore() {
    document.getElementById("pscore").innerHTML = "Player Score: " + playerScore;
    document.getElementById("cscore").innerHTML = "Com Score: " + comScore;
}

function gameOver() {
    if (playerScore == 5){
        text.textContent = "Game Over, You Win!";
        document.getElementById('rbutton').disabled = true;
        document.getElementById('pbutton').disabled = true;
        document.getElementById('sbutton').disabled = true;
    }
    else if (comScore == 5){
        text.textContent = "Game Over, You Lose!";
        document.getElementById('rbutton').disabled = true;
        document.getElementById('pbutton').disabled = true;
        document.getElementById('sbutton').disabled = true;
    }
}

