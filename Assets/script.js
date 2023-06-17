var quizInterface = document.getElementsByClassName('interface');
var title = document.getElementById('quizTitle');
var countdownTimer = document.getElementById('quizTimer');
var startButton = document.getElementById("start");
var scoreKeeper = $(".HighScores");


countdownTimer.textContent = "Click Start to begin.";
var penalty = 10;
var questionIndex = 0;
var score = 0;
var timeLeft = 50; 


// create questions variables
var quizQuestions = [
    {   
        question: "What function do you use to log messages to the console?",
        choice: ["window.log", "message.window", "console.log", "error.log",],
        answer: "console.log",
    },
    {
        question: "What is the correct syntax for declairing a function?",
        choice: ["function []", "function => ()", "funtion{}", "function()",],
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


function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            countdownTimer.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            countdownTimer.textContent = 'Out of time!';
            clearInterval(timeInterval);
            ScoreCard(score);
        }
    }, 1000);

} 


var createCard = function (quizQuestions, Index) {  
    
    $(".welcome").remove();
    var question = quizQuestions[Index].question; 
    var choiceA = quizQuestions[Index].choice[0];
    var choiceB = quizQuestions[Index].choice[1];
    var choiceC = quizQuestions[Index].choice[2];
    var choiceD = quizQuestions[Index].choice[3];
    
    const questionCard = `
    <div class="question"> 
    <div class="card">
    <h2>${question}</h2>
    <button id="a">${choiceA}</button>
    <button id="b">${choiceB}</button>
    <button id="c">${choiceC}</button>
    <button id="d">${choiceD}</button>
    </div>
    </div>
    `;
    
    $("#dispQuestion").append(questionCard);
    
    const btnA = document.getElementById("a");
    const btnB = document.getElementById("b");
    const btnC = document.getElementById("c");
    const btnD = document.getElementById("d");
    
    btnA.addEventListener('click', function() {
        const value = this.textContent;
        checkAnswer(value, Index);
    });
    btnB.addEventListener('click', function() {
        const value = this.textContent;
        checkAnswer(value, Index);
    });
    btnC.addEventListener('click', function() {
        const value = this.textContent;
        checkAnswer(value, Index);
    });
    btnD.addEventListener('click', function() {
        const value = this.textContent;
        checkAnswer(value, Index);
    });
}

function checkAnswer(value, Index) {
    const correct = `<h3 id="alert">Correct</h3>`;
    const incorrect = `<h3 id="alert">Incorrect</h3>`;
    
    if (value === quizQuestions[Index].answer) {
        $('h3').remove();
        $('#score').remove();
        $('.head').append(correct);
        score = score + 10;
        const scoreCard = `
        <h3 id='score'>Score: ${score}</h3>
        `;
        $('.head').append(scoreCard);
        console.log(Index);
        $('.question').remove();
        Index++;
        if (Index < quizQuestions.length) {
            createCard(quizQuestions, Index);
        } else {
            ScoreCard(score);
        }
        return Index;
    } else {
        Index++;
        $('h3').remove();
        $('.head').append(incorrect);
        const scoreCard = `
        <h3 id='score'>Score: ${score}</h3>
        `;
        $('.head').append(scoreCard);
        console.log(Index);
        timeLeft = timeLeft - penalty;
        $('.question').remove();
        if (Index < quizQuestions.length) {
            createCard(quizQuestions, Index);
        } else {
            countdownTimer.remove();
            ScoreCard(score);
        }
    };
    
    
}

var ScoreCard = function(score) {
    const final = `
    <div class='final'>
    <h1>Quiz Complete</h1>
    <h2>Your final Score is: ${score}</h2>
    <form id='finalScore'>
    <span>Enter your initals.</span>
    <input id='initials' type='text'>
    
    </input>
    <button id='submit'>Submit</button>
    </form>
    </div>
    `
    
    $('.question').remove();
    $('h3').remove();
    $('#score').remove();
    $('#dispQuestion').append(final);
    highScoreCard(score);
}

var highScoreCard = function(score) {
    document.getElementById('submit').addEventListener('click', function() {
        const userInitials = $('#initials').val();
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push({score: score, userInitials: userInitials});
        localStorage.setItem("highScores", JSON.stringify(highScores));
    });
    
    var UserScores = JSON.parse(localStorage.getItem("highScores")) || [];
    UserScores.forEach(UserScores => {
        
        var scorePage = `
        <div>
        <p>${UserScores.userInitials}: ${UserScores.score}</p>
        </div>
        `;
        
        $('#dispQuestion').append(scorePage);
        
    })};
    
    
    
    
    
    startButton.addEventListener("click", function() {
        startButton.remove();
        countdown(timeLeft);
        
        createCard(quizQuestions, questionIndex);
        
        const scoreCard = `
        <h3 id='score'>Score: ${score}</h3>
        `;
        $('.head').append(scoreCard);
        
    });