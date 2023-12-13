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
    {
        question: "The Barbie movie was released in cinemas on June 21st. What other blockbuster was released on the same day?",
        answers: [
            { text: 'Killers of the Flower Moon', correct: false },
            { text: 'John Wick: Chapter 4', correct: false },
            { text: 'Past Lives', correct: false },
            { text: 'Oppenheimer', correct: true },
        ]
    },
    {
        question: "What was Twitter renamed to at the end of July?",
        answers: [
            { text: 'Y', correct: false },
            { text: 'X', correct: true },
            { text: 'W', correct: false },
            { text: 'Z', correct: false },
        ]
    },
    {
        question: "Which two countries co-hosted the 2023 Fifa Womens World Cup?",
        answers: [
            { text: 'Australia and New Zealand', correct: true },
            { text: 'Spain and Portugal', correct: false },
            { text: 'Korea and Japan', correct: false },
            { text: 'France and Belgium', correct: false },
        ]
    },
    {
        question: "What was the most watched English language series on Netflix in 2023?",
        answers: [
            { text: 'Stranger Things 4', correct: false },
            { text: 'Wednesday', correct: true },
            { text: 'The Witcher Season 1', correct: false },
            { text: 'Queen Charlotte A Bridgerton Story', correct: false },
        ]
    },
    {
        question: "What was the name of Taylor Swifts 2023 sellout tour?",
        answers: [
            { text: 'Renaissance', correct: false },
            { text: 'The Eras Tour', correct: true },
            { text: 'Music of the Spheres Tour', correct: false },
            { text: 'Love on Tour', correct: false },
        ]
    },
    {
        question: "Which city was the host of the 2023 Eurovision Song Contest?",
        answers: [
            { text: 'Stockholm', correct: false },
            { text: 'Oslo', correct: false },
            { text: 'Liverpool', correct: true },
            { text: 'Sydney', correct: false },
        ]
    },
    {
        question: "What faux animal head did Kylie Jenner wear to Paris fashion week?",
        answers: [
            { text: 'Tiger', correct: false },
            { text: 'Lion', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Elephant', correct: false },
        ]
    },
    {
        question: "In August which country became the fourth country to land on the moon?",
        answers: [
            { text: 'France', correct: false },
            { text: 'England', correct: false },
            { text: 'Korea', correct: false },
            { text: 'India', correct: true },
        ]
    },
    {
        question: "What did Rihanna reveal in her performance of the halftime show at the Super Bowl?",
        answers: [
            { text: 'The Start Date of her Tour', correct: false },
            { text: 'The Name of her New Albumn', correct: false },
            { text: 'The Name of her Baby', correct: false },
            { text: 'Her Pregnancy', correct: true },
        ]
    },
    {
        question: "Which film won the 2023 Oscar for Best Picture?",
        answers: [
            { text: 'All Quiet On The Western Front', correct: false },
            { text: 'Oppenheimer', correct: false },
            { text: 'Everything Everywhere All At Once', correct: true },
            { text: 'Barbie', correct: false },
        ]
    },
    {
        question: "What was the name of Kourtney Kardashian and Travis Barkers son born in December 2023?",
        answers: [
            { text: 'Parade Barker', correct: false },
            { text: 'Rocky 13 Barker', correct: true },
            { text: 'Apple', correct: false },
            { text: 'Adam', correct: false },
        ]
    },
    {
        question: "In the Netflix documentary Beckham what car did Victoria Beckham admit that her Dad would drive her to school in whist claiming her family was working class?",
        answers: [
            { text: 'BMW', correct: false },
            { text: 'Rolls Royce', correct: true },
            { text: 'Bentley', correct: false },
            { text: 'Lamborghini', correct: false },
        ]
    },
    {
        question: "What is the name of Beyonces daughter who accompanied her during the 2023 International Renaissance Tour?",
        answers: [
            { text: 'Blue Ivy Carter', correct: true },
            { text: 'Anabella', correct: false },
            { text: 'Carter Lee', correct: false },
            { text: 'Isabella', correct: false },
        ]
    },
    {
        question: "Which former Pope was buried on the fifth of January 2023?",
        answers: [
            { text: 'Blue Ivy Carter', correct: false },
            { text: 'John Paul II', correct: false },
            { text: 'John Paul I', correct: true },
            { text: 'Paul VI', correct: false },
        ]
    },
    {
        question: "What was the date of Kind Charles Coronation?",
        answers: [
            { text: 'June 5th 2023', correct: false },
            { text: 'February 4th 2023', correct: false },
            { text: 'April 10th 2023', correct: false },
            { text: 'May 6th 2023', correct: true },
        ]
    },
    {
        question: "Which country won the rugby world cup 2023?",
        answers: [
            { text: 'France', correct: false },
            { text: 'South Africa', correct: true },
            { text: 'England', correct: false },
            { text: 'New Zealand', correct: false },
        ]
    },
    {
        question: "Which film won Best Picture in the Baftas?",
        answers: [
            { text: 'Everything Everywhere All At Once', correct: false },
            { text: 'All Quiet on the Western Front', correct: true },
            { text: 'Oppenheimer', correct: false },
            { text: 'Barbie', correct: false },
        ]
    },
    {
        question: "The Kings Coronation was planned using which secret code name?",
        answers: [
            { text: 'Operation Ruby Slipper', correct: false },
            { text: 'Operation Diamond Crown', correct: false },
            { text: 'Operation Golden Orb', correct: true },
            { text: 'Operation Silver Sleigh', correct: false },
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