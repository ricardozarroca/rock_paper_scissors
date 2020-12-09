const buttons = document.querySelectorAll('button.choise');
buttons.forEach(button => button.addEventListener('click' , oneRound));
const reset = document.querySelector('button.reset');
reset.addEventListener('click' , resetGame);

const computerChoose = document.querySelector('#computerChoose');
const theWinner = document.querySelector('#theWinner');
const roundNumber = document.querySelector('#roundNumber');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const end = document.querySelector('#end');

let playerCounter;
let computerCounter;
let roundCounter;

resetGame();

function resetGame () {
  playerCounter = 0;
  computerCounter = 0;
  roundCounter = 1;
  buttons.forEach(button => (button.disabled = false));
  computerChoose.textContent = 'Computer Choise... ';
  theWinner.textContent = 'Who will win this round??';
  roundNumber.textContent = 'Round 1';
  playerScore.textContent = 'Your Score...';
  computerScore.textContent = 'Computer Score...';
  end.textContent = 'Who will be the winner??';
}

function oneRound(e) {
  let playerSelection = e.target.name;
  let computerSelection = computerMove();
  getComparation(playerSelection, computerSelection);
  returnScore();
  checkwinner();
}

function computerMove () {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    return "rock";
  } else if (randomNum > 0.33 && randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors"
  }
}

function getComparation(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    computerChoose.textContent = `Computer Choose ${computerSelection}`;
    theWinner.textContent = `It´s a tie!`;
    roundCounter++;
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')) {
    computerChoose.textContent = `Computer Choose ${computerSelection}`;
    theWinner.textContent = `You Win!!`;
    ++playerCounter;
    roundCounter++;
  } else {
    computerChoose.textContent = `Computer Choose ${computerSelection}`;
    theWinner.textContent = `Sorry, you lost`;
    ++computerCounter;
    roundCounter++;
  }
}

function returnScore () {
  roundNumber.textContent = `Round ${roundCounter}`;
  playerScore.textContent = `Your score is ${playerCounter}`;
  computerScore.textContent = `Computer score is ${computerCounter}`;
}

function checkwinner () {
  if (roundCounter === 5) {
   if (playerCounter > computerCounter) {
     end.textContent = `Player is the Winner!!`;
   } else if (playerCounter < computerCounter) {
     end.textContent = `Computer is the Winner!!`;
   } else {
     end.textContent = `The game ended in a draw`;
   }
  buttons.forEach(button => (button.disabled = true));
 }
}
