let computerMove = "";
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  draws: 0
}

function playComputerMove() {
  computerMove = Math.random();  // 0.45
  if (computerMove < 0.33) {
    computerMove = 'Rock'
  } else if (computerMove >= 0.33 && computerMove < 0.66) {
    computerMove = 'Paper'
  } else {
    computerMove = 'Scissors';
  }
}

function playGame(userMove) {
 let result = compareUserComputerMove(userMove);
  showResult(result);
  showScore();
  showUserComputerMove(userMove, computerMove);

  let scoreJSON = JSON.stringify(score);
  localStorage.setItem("score", scoreJSON);
}

function showResult(result){
  const resultPara = document.querySelector('#result');
  resultPara.innerHTML = result; 
}

function showUserComputerMove(userMove, computerMove){
  const userCompPara = document.querySelector('#user-computer-move');

  userCompPara.innerHTML = 
  `You picked ${userMove}. Computer Picked ${computerMove}.`
}


function showScore() {
  const scorePara = document.querySelector('#score');
  scorePara.innerHTML = `Wins: ${score.wins} | Loses: ${score.loses} | Draws : ${score.draws}`;
}

function compareUserComputerMove(userMove){
    let result = "";

  if (computerMove === userMove) {

    result = `It's a tie`;
    score.draws++;

  } else if ((computerMove === 'Paper' && userMove === 'Scissors')
    || (computerMove === "Rock" && userMove === "Paper")
    || (computerMove === "Scissors" && userMove === "Rock")) {

    result = `You win!`;
    score.wins++;

  } else {
    result = `You lose!`;
    score.loses++;
  }

  return result;
}

function resetScore(){
      score.wins = 0;
      score.loses = 0;
      score.draws = 0;
      localStorage.removeItem('score');
      showScore();
}

showScore();

