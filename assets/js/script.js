const startButtton = document.getElementById("start");

startButtton.addEventListener('click', runGame);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const questions = [
    {
        question: "What was the name of Prince Harrys memoir released in 2023?",
        answers: [
            { text: 'Spare', correct: true },
            { text: 'Extra', correct: false },
            { text: 'Brother', correct: false },
            { text: 'Harry', correct: false },
        ]
    },
    {
        question: "What was the name of the submarine that went missing in June?",
        answers: [
            { text: 'Cosmos', correct: false },
            { text: 'Titan', correct: true },
            { text: 'Rocket', correct: false },
            { text: 'Disk', correct: false },
        ]
    },
];
let currentQuestionIndex = 0;
let score = 0;

function runGame() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

function recordAction(correct) {
    if (correct) {
        score += 1;
    }

    currentQuestionIndex += 1;
    if (currentQuestionIndex >= questions.length) {
        // handle game finished
        console.log("game is finished!!!");
    }
    // empty it out
    const buttons = document.getElementById("answer-buttons");
    buttons.innerHTML = "";
    displayQuestion();
}

function onClickedCorrectButton() {
    this.style.backgroundColor = 'green';
    console.log("it is correct!");
    recordAction(true);
}

function onClickedIncorrectButton() {
    console.log("it is definitely not correct!");
    recordAction(false);
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        // if the answer displayed in the button matches the correct answer
        // then associate a correct handler function, otherwise error.
        if (answer.correct) {
            button.onclick = onClickedCorrectButton;
        } else {
            button.onclick = onClickedIncorrectButton;
        }

        answerButtons.appendChild(button);
    });
}

runGame();