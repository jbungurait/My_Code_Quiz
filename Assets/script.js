var quizInterface = document.getElementsByClassName('interface');
var title = document.getElementById('quizTitle');
var countdownTimer = document.getElementById('quizTimer');
var startButton = document.getElementById('start');
var scoreKeeper = document.getElementsByClassName('HighScores');
var questions = document.getElementById('Questions');
var dispQuestion = document.getElementById('dispQuestions');

countdownTimer.textContent = "Click Start to begin.";
var penalty = 10;

// create questions variables
var quizQuestions = [
    {   
        question: "What function do you use to log messages to the console?",
        choice: ["window.log", "message.window", "console.log", "error.log",],
        answer: "console.log",
    },
    {
        question: "What is the correct syntax for declairing a function?",
        choice: ["function []", "function = ()", "funtion{}", "function()",],
        answer: "function()",
    },
    {
        question: "What is the index of 'C' in the following array: ['A', 'B', 'C', 'D']?",
        choice: ["2", "1++", "0", "3",],
        answer: "2",
    },
    {
        question: "How do you assign a variable to an Id declaired in HMTL?",
        choice: ["get.element.id()", "getId()", "findId()", "getElementById()",],
        answer: "getElementById()",
    },
    {
        question: "Which of the following are not array methods?",
        choice: [".push()", ".slice()", ".add()", ".replace()",],
        answer: ".add()",
    },

]

function countdown() {
    var timeLeft = 100; 

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

function populateQuestions() {
    for (var i = 0; i < quizQuestions.length; i++)
    {
     dispQuestion.textContent = quizQuestions[quizQuestions].question;
    }
}

startButton.addEventListener("click", function() {
    countdown();


})