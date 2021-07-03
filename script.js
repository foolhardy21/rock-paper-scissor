const choice = ['rock','paper','scissor']
let playerWon = false

console.log( game() )

function game() {

  let playerWinCount = 0
  let computerWinCount = 0
  let round=1

  while( round++ <= 5 ) {
    const userPlay = window.prompt('Type your bet')

      if ( !choice.find(elem => elem == userPlay.toLowerCase()) ) {
        console.log('invalid bet')
        continue
      }

    const roundVerdict = playRound( userPlay,computerPlay() )
    console.log( roundVerdict )
    if(roundVerdict == 'Draw') {
      continue
    }
    else if( playerWon ) {
      playerWinCount++
    } else {
      computerWinCount++
    }
  }
  return playerWinCount > computerWinCount ? 'Player Wins!' : 'Computer Wins!'
}

function computerPlay() {

  const index = Math.floor(Math.random()*3)
  return choice[index]
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if(playerSelection == computerSelection) {
    return 'Draw'
  }
  if(playerSelection == choice[0] && computerSelection == choice[2]) {
    playerWon = true
  } else if(playerSelection == choice[1] && computerSelection == choice[0]) {
    playerWon = true
  } else if(playerSelection == choice[2] && computerSelection == choice[1]) {
    playerWon = true
  }
   return playerWon ? `You win! ${playerSelection} beats ${computerSelection}`
                      : `You lose! ${computerSelection} beats ${playerSelection}`
}
