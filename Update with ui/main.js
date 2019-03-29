const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const results = document.querySelector('#result')
const computerh2 = document.querySelector('#computer-choice')
const playerh2 = document.querySelector('#player-choice')
const playerTally = document.querySelector('.player-tally h2')
const computerTally = document.querySelector('.computer-tally h2')
const reset = document.querySelector('.reset')


const h2 = document.createElement('h2')

const computerPick = function(){
    let picks = ['Rock', 'Paper', 'Scissors']
    return picks[Math.floor(Math.random()*3)].toLowerCase()
}
let playerPick = ''
let playerPoint = 0
let computerPoint = 0
let gameFinished = false;

const gameReset = function() {
    playerPoint = 0;
    computerPoint = 0;
    gameFinished = false;
    results.textContent = 'New game'
    playerTally.textContent = '0'
    computerTally.textContent = '0'
    computerh2.textContent = ''
    playerh2.textContent = ''
}

const tally = function(){
    if(playerPoint < 5 && computerPoint < 5){
        playerTally.textContent = playerPoint.toString()
        computerTally.textContent = computerPoint.toString()
    } else if(playerPoint === 5) {
        playerTally.textContent = playerPoint.toString()
        results.textContent = 'You have won the game!!'
        gameFinished = true;
    } else if(computerPoint === 5) {
        computerTally.textContent = computerPoint.toString()
        results.textContent = 'The computer has won the game \:\('
        gameFinished = true;
    }
}


reset.addEventListener('click', function(){
    gameReset()
})
paperBtn.addEventListener('click', function(e) {
    if(gameFinished === false){
    playerPick = 'paper'
    singleRound(playerPick, computerPick)
    tally()
    }
})
rockBtn.addEventListener('click', function(e) {
    if(gameFinished === false){
        playerPick = 'rock'
        singleRound(playerPick, computerPick)
        tally()
    }
})
scissorsBtn.addEventListener('click', function(e) {
    if(gameFinished === false){
    playerPick = 'scissors'
    singleRound(playerPick, computerPick)
    tally()
    }
})
const singleRound = function (playerSelection, computerSelection) {
    
    let result = ''
    let p = playerSelection
    playerh2.textContent = p
    let c = computerSelection()
    computerh2.textContent = c
    if (p === 'rock') {
        if(c === 'scissors') {
            result = `You win!`
        } else if (c === 'paper') {
            result = 'You lose!'
        } else {
            result = "It's a draw!"
        }

    }
    if(p === 'scissors') {
        if(c === 'paper') {
            result = 'You win!'
        } else if (c === 'rock') {
            result = 'You lose!'
        } else {
            result = "It's a draw!"
        }
    }
    if (p === 'paper') {
        if(c === 'scissors') {
            result = 'You lose!'
        } else if (c === 'rock') {
            result = 'You win!'
        } else {
            result = "It's a draw!"
        }
    }
    if(result === 'You win!') {
        playerPoint++
    } else if(result === 'You lose!') {
        computerPoint++
    }
    results.textContent = result
    console.log(result)
    return result
}