var quizInterface = document.getElementsByClassName('interface');
var title = document.getElementById('quizTitle');
var countdownTimer = document.getElementById('quizTimer');
var startButton = document.getElementById('start');
var scoreKeeper = document.getElementsByClassName('HighScores');
var questions = document.getElementById('Questions');
var dispQuestion = document.getElementById('dispQuestion');
var choices = document.createElement('div');


countdownTimer.textContent = "Click Start to begin.";
var penalty = 10;
var questionIndex = 0;


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
        answer: ".replace()",
    },

]

var timeLeft = 100; 

function countdown(time) {

    var timeInterval = setInterval(function() {
        if (time >1) {
            countdownTimer.textContent = time + ' seconds remaining';
            time--;
        } else if (timeLeft === 1) {
            countdownTimer.textContent = time + ' second remaing';
            time--;
        } else {
            countdownTimer.textContent = 'Out of time!';
            clearInterval(timeInterval);
        }
    }, 1000);
} 

function populateQuestions() {

     var ask = quizQuestions[questionIndex].question; 
     dispQuestion.textContent = ask;
     for (var i = 0; i < 4; i++)  {
        var answer = document.createElement("button");
        dispQuestion.appendChild(choices);
        choices.appendChild(answer);
        answer.textContent = quizQuestions[questionIndex].choice[i];
        answer.addEventListener("click", function() {
            checkAnswer(this.textContent);
            countdown(timeLeft);
        })


    
}
}

function checkAnswer(selection) {
    console.log(selection);
    console.log(quizQuestions[questionIndex].answer);
    if (selection === quizQuestions[questionIndex].answer) {
        countdownTimer.textContent = "Correct!";
        return questionIndex++;
    } else {
        countdownTimer.textContent = "Incorrect.";
        timeLeft = timeLeft - penalty;
        return timeLeft;
    }
}


startButton.addEventListener("click", function() {
    if (timeLeft = 100) {
    countdown(timeLeft);
    };
    
    populateQuestions();

});