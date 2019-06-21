const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
  player: 0,
  computer: 0
}

function play(e) {
  restart.style.display = 'inline-block'
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3)
  if (random == 0) {
    return 'rock';
  } else if (random == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (playerChoice === 'rock' && computerChoice === 'paper' ) {
    return 'Computer wins';
  } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer wins';
  } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer wins';
  } else {
    return 'Player wins';
  }
}

function showWinner(winner, computerChoice) {
  if (winner === 'Player wins') {
    scoreboard.player++;
    result.innerHTML = `
      <h1 class="text-win">You Win!</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
      `;
  } else if (winner === 'Computer wins') {
    scoreboard.computer++;
    result.innerHTML = `
      <h1 class="text-win">You Lose!</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
      `;
  } else {
    result.innerHTML = `
      <h1 class="text-win">Draw..</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
      `;
  }
  score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
  modal.style.display = 'block';
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
  restart.style.display = 'none';
}

function clearModal(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

choices.forEach(choice => choice.addEventListener('click', play))

window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame)