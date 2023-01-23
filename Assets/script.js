var quizInterface = document.getElementsByClassName('interface');
var title = document.getElementById('quizTitle');
var countdownTimer = document.getElementById('quizTimer');
var startButton = document.getElementById('start');
var scoreKeeper = document.getElementsByClassName('HighScores');
var questions = document.getElementById('Questions');


countdownTimer.textContent = "Click Start to begin.";


function countdown() {
    var timeLeft = 10; 

    var timeInterval = setInterval(function() {
        if (timeLeft >1) {
            countdownTimer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            countdownTimer.textContent = timeLeft + ' second remaing';
            timeLeft--;
        } else {
            countdownTimer.textContent = 'Out of time!';
            clearInterval(timeInterval);
        }
    }, 1000);
} 

startButton.addEventListener("click", function() {
    countdown();


})