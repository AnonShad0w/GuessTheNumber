'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').innerHTML = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number! ⛔');
    
    // When Player Wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number! 🎉');
        document.querySelector('.number').innerHTML = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').innerHTML = highscore;
        }

    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').innerHTML = score;
        } else {
            displayMessage('😟 You lost the game!');
            document.querySelector('.score').innerHTML = 0;
        }
    }

    document.querySelector('.again').addEventListener('click', function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').innerHTML = score;
        document.querySelector('.number').innerHTML = '?';
        displayMessage('Start guessing...');
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
    })

})