'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

console.log('first secret number:', secretNumber)

const labelScore = document.querySelector('.label-score')
const button = document.querySelector('.check')
const message = document.querySelector('.message');
const number = document.querySelector('.number')
const highscore = document.querySelector('.highscore')



const generateSecretNumber = () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}

const displayScore = (currentScore) => {
    labelScore.textContent = `💯 Score: ${currentScore}`
}

const displayMessage = (currentMessage) => {
    message.textContent = `${currentMessage}`
}
const displayHighscore = (currentHighscore) => {
    highscore.textContent = `${currentHighscore}`
}


const resetGame = () => {
    score = 20
    displayScore(score)
    document.querySelector('.guess').value = ''
    number.style.width = '15rem'
    document.querySelector('.body').style.backgroundColor = '#222'
    number.textContent = '?'
    generateSecretNumber()
    displayMessage('Start guessing...')
}

const resetWinnerScreen = () => {
    displayScore(score)
    number.style.width = '15rem'
    document.querySelector('.body').style.backgroundColor = '#222'
    number.textContent = '?'
}


displayScore(score);


button.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        displayMessage('㊙️ Enter a value!')
    } else if (secretNumber === guess) {
        document.querySelector('.body').style.backgroundColor = 'mediumspringgreen'
        document.querySelector('.number').style.width = '32rem'
        number.textContent = guess
        displayMessage("You guessed the number! Congratulations!")
        displayHighscore(`${Number(highscore.textContent) < score ? score : Number(highscore.textContent)}`)
        generateSecretNumber()
        score = 20;
        displayScore(score);
    } else {
        if (score > 1) {
            score--;
            secretNumber < guess ? displayMessage("Too high!") : displayMessage("Too low!")
            resetWinnerScreen()
            displayScore(score);
        }
        else {
            displayScore(0);
            displayMessage('You lost the game :c')
        }
    }
})

const againButton = document.querySelector('.again')
againButton.addEventListener('click', () => {
    resetGame()
})