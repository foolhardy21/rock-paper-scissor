const choice = ['rock','paper','scissor']
let playerWon = false
let playerWinCount = 0
let computerWinCount = 0

let optionsBtn = document.querySelectorAll('button')
let playerScoreDisplay = document.querySelector('#player-score')
let computerScoreDisplay = document.querySelector('#computer-score')
let verdictDisplay = document.querySelector('.verdict')

optionsBtn.forEach((btn) => {
  btn.addEventListener('click',(e) => {

    const verdict = playRound(e.target.value,computerPlay())

    if( verdict == 'Draw') {
      verdictDisplay.innerText = 'Draw, Go Again'
    } else {
      updateRoundStats(verdict)
    }

    checkGameWinner()

  })
});


function computerPlay() {

  const index = Math.floor(Math.random()*3)
  return choice[index]
}

function playRound(playerSelection, computerSelection) {

  if(playerSelection == computerSelection) {
    return 'Draw'
  }
  playerWon = checkRoundWinner(playerSelection, computerSelection)

   return playerWon ? `You win! ${playerSelection} beats ${computerSelection}`
                      : `You lose! ${computerSelection} beats ${playerSelection}`
}

function checkRoundWinner(playerSelection, computerSelection) {

  if((playerSelection == choice[0] && computerSelection == choice[2]) ||
      (playerSelection == choice[1] && computerSelection == choice[0]) ||
      (playerSelection == choice[2] && computerSelection == choice[1])) {

    return true
  } else {
   return false
  }
}

function updateRoundStats(verdict) {
  if(playerWon) {
    updatePlayerStats(verdict)
  } else {
    updateComputerStats(verdict)
  }
}
function updatePlayerStats(verdict) {
  playerWinCount++
  playerScoreDisplay.innerText = playerWinCount
  verdictDisplay.innerText = verdict
}
function updateComputerStats(verdict) {
  computerWinCount++
  computerScoreDisplay.innerText = computerWinCount
  verdictDisplay.innerText = verdict
}

function checkGameWinner() {
  
  if(playerWinCount == 5 || computerWinCount == 5) {
    let finalVerdict
    (playerWinCount == 5) ?
        finalVerdict = `Player beats Computer by ${5-computerWinCount} points`
        : finalVerdict = `Computer beats You by ${5-playerWinCount} points `

    playerWinCount=0
    computerWinCount=0
    verdictDisplay.innerText = finalVerdict
    playerScoreDisplay.innerText = playerWinCount
    computerScoreDisplay.innerText = computerWinCount
  }
}
