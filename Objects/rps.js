let computerMove = "";

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

    let score = JSON.parse(localStorage.getItem("score")) || {
    wins : 0,
    loses : 0,
    draws : 0
  }

  let result = "";

  if (computerMove === userMove) {

    result = `It's a tie`;
    score.draws = score.draws + 1;

  } else if ((computerMove === 'Paper' && userMove === 'Scissors')
    || (computerMove === "Rock" && userMove === "Paper")
    || (computerMove === "Scissors" && userMove === "Rock")) {

    result = `You win!`;
    score.wins = score.wins + 1;

  } else {
    result = `You lose!`;
    score.loses = score.loses + 1;
  }

  alert(`You picked ${userMove}. Computer Picked ${computerMove}. ${result}
          Wins: ${score.wins} | Loses: ${score.loses} | Draws : ${score.draws}
        `);

  let scoreJSON = JSON.stringify(score); // {"wins": 0, "loses" : 0, "draws" : 0}
  localStorage.setItem("score",scoreJSON);
}

