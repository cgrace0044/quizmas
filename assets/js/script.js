// define various variables to be used in functions
let currentQuestionIndex = -1;
let score = 0;
let incorrect = 0;

const startButton = document.getElementById('start');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const startPage = document.getElementById("start-page");
const instructionsButton = document.getElementById('instructions-button');
const instructionsPage = document.getElementById('instructions-page');
const exitButton = document.getElementById("exit-btn");
const greeting = document.getElementById('greeting');

startButton.addEventListener('click', runGame);

// questions for the quiz - question plus four possible answers for each
let questions = [];
const questionsBank = [
    {
        question: 'What was the name of Prince Harry\'s memoir released in 2023?',
        answers: [
            { text: 'Spare', correct: true },
            { text: 'Extra', correct: false },
            { text: 'Brother', correct: false },
            { text: 'Harry', correct: false },
        ]
    },
    {
        question: 'What was the name of the submarine that went missing in June?',
        answers: [
            { text: 'Cosmos', correct: false },
            { text: 'Titan', correct: true },
            { text: 'Rocket', correct: false },
            { text: 'Disk', correct: false },
        ]
    },
    {
        question: 'The Barbie movie was released in cinemas on June 21st. What other blockbuster was released on the same day?',
        answers: [
            { text: 'Killers of the Flower Moon', correct: false },
            { text: 'John Wick: Chapter 4', correct: false },
            { text: 'Past Lives', correct: false },
            { text: 'Oppenheimer', correct: true },
        ]
    },
    {
        question: 'What was Twitter renamed to at the end of July?',
        answers: [
            { text: 'Y', correct: false },
            { text: 'X', correct: true },
            { text: 'W', correct: false },
            { text: 'Z', correct: false },
        ]
    },
    {
        question: 'Which two countries co-hosted the 2023 Fifa Womens World Cup?',
        answers: [
            { text: 'Australia and New Zealand', correct: true },
            { text: 'Spain and Portugal', correct: false },
            { text: 'Korea and Japan', correct: false },
            { text: 'France and Belgium', correct: false },
        ]
    },
    {
        question: 'What was the most watched English language series on Netflix in 2023?',
        answers: [
            { text: 'Stranger Things 4', correct: false },
            { text: 'Wednesday', correct: true },
            { text: 'The Witcher Season 1', correct: false },
            { text: 'Queen Charlotte A Bridgerton Story', correct: false },
        ]
    },
    {
        question: 'What was the name of Taylor Swift\'s 2023 sellout tour?',
        answers: [
            { text: 'Renaissance', correct: false },
            { text: 'The Eras Tour', correct: true },
            { text: 'Music of the Spheres Tour', correct: false },
            { text: 'Love on Tour', correct: false },
        ]
    },
    {
        question: 'Which city was the host of the 2023 Eurovision Song Contest?',
        answers: [
            { text: 'Stockholm', correct: false },
            { text: 'Oslo', correct: false },
            { text: 'Liverpool', correct: true },
            { text: 'Sydney', correct: false },
        ]
    },
    {
        question: 'What faux animal head did Kylie Jenner wear to Paris fashion week?',
        answers: [
            { text: 'Tiger', correct: false },
            { text: 'Lion', correct: true },
            { text: 'Giraffe', correct: false },
            { text: 'Elephant', correct: false },
        ]
    },
    {
        question: 'In August which country became the fourth country to land on the moon?',
        answers: [
            { text: 'France', correct: false },
            { text: 'England', correct: false },
            { text: 'Korea', correct: false },
            { text: 'India', correct: true },
        ]
    },
    {
        question: 'What did Rihanna reveal in her performance of the halftime show at the Super Bowl?',
        answers: [
            { text: 'The Start Date of her Tour', correct: false },
            { text: 'The Name of her New Albumn', correct: false },
            { text: 'The Name of her Baby', correct: false },
            { text: 'Her Pregnancy', correct: true },
        ]
    },
    {
        question: 'Which film won the 2023 Oscar for Best Picture?',
        answers: [
            { text: 'All Quiet On The Western Front', correct: false },
            { text: 'Oppenheimer', correct: false },
            { text: 'Everything Everywhere All At Once', correct: true },
            { text: 'Barbie', correct: false },
        ]
    },
    {
        question: 'What was the name of Kourtney Kardashian and Travis Barkers son born in December 2023?',
        answers: [
            { text: 'Parade Barker', correct: false },
            { text: 'Rocky 13 Barker', correct: true },
            { text: 'Apple', correct: false },
            { text: 'Adam', correct: false },
        ]
    },
    {
        question: 'In the Netflix documentary Beckham what car did Victoria Beckham admit that her Dad would drive her to school in whist claiming her family was working class?',
        answers: [
            { text: 'BMW', correct: false },
            { text: 'Rolls Royce', correct: true },
            { text: 'Bentley', correct: false },
            { text: 'Lamborghini', correct: false },
        ]
    },
    {
        question: 'What is the name of Beyonce\'s daughter who accompanied her during the 2023 International Renaissance Tour?',
        answers: [
            { text: 'Blue Ivy Carter', correct: true },
            { text: 'Anabella', correct: false },
            { text: 'Carter Lee', correct: false },
            { text: 'Isabella', correct: false },
        ]
    },
    {
        question: 'Which former Pope was buried on the fifth of January 2023?',
        answers: [
            { text: 'Pope Benedict XVI', correct: true },
            { text: 'John Paul II', correct: false },
            { text: 'John Paul I', correct: false },
            { text: 'Paul VI', correct: false },
        ]
    },
    {
        question: 'What was the date of King Charles\' Coronation?',
        answers: [
            { text: 'June 5th 2023', correct: false },
            { text: 'February 4th 2023', correct: false },
            { text: 'April 10th 2023', correct: false },
            { text: 'May 6th 2023', correct: true },
        ]
    },
    {
        question: 'Which country won the rugby world cup 2023?',
        answers: [
            { text: 'France', correct: false },
            { text: 'South Africa', correct: true },
            { text: 'England', correct: false },
            { text: 'New Zealand', correct: false },
        ]
    },
    {
        question: 'Which film won Best Picture in the Baftas?',
        answers: [
            { text: 'Everything Everywhere All At Once', correct: false },
            { text: 'All Quiet on the Western Front', correct: true },
            { text: 'Oppenheimer', correct: false },
            { text: 'Barbie', correct: false },
        ]
    },
    {
        question: 'The King\'s Coronation was planned using which secret code name?',
        answers: [
            { text: 'Operation Ruby Slipper', correct: false },
            { text: 'Operation Diamond Crown', correct: false },
            { text: 'Operation Golden Orb', correct: true },
            { text: 'Operation Silver Sleigh', correct: false },
        ]
    },
    {
        question: 'What was the name of Britney Spears\' memoir released in 2023?',
        answers: [
            { text: 'Revolution', correct: false },
            { text: 'Reinvented', correct: false },
            { text: 'Recovered', correct: false },
            { text: 'The Woman In Me', correct: true },
        ]
    },
    {
        question: 'Which Country won Eurovision this year?',
        answers: [
            { text: 'France', correct: false },
            { text: 'England', correct: false },
            { text: 'Ukraine', correct: false },
            { text: 'Sweden', correct: true },
        ]
    },
    {
        question: 'Who voiced Mario in the Super Mario Bro\'s movie released in cinemas in April?',
        answers: [
            { text: 'Chris Pratt', correct: true },
            { text: 'Ryan Reynolds', correct: false },
            { text: 'Cillian Murphy', correct: false },
            { text: 'Brad Pitt', correct: false },
        ]
    },
    {
        question: 'The year 2023 is the Chinese Year of the what?',
        answers: [
            { text: 'Rat', correct: false },
            { text: 'Rabbit', correct: true },
            { text: 'Tiger', correct: false },
            { text: 'Dragon', correct: false },
        ]
    },
    {
        question: 'Who played Ursula in the 2023 remake of The Little Mermaid?',
        answers: [
            { text: 'Jennifer Lawrence', correct: false },
            { text: 'Meryl Streep', correct: false },
            { text: 'Julia Roberts', correct: false },
            { text: 'Melissa McCarthy', correct: true },
        ]
    },
    {
        question: 'Who won a record 23rd Grand Slam Title at the French Open in Paris?',
        answers: [
            { text: 'Roger Federer', correct: false },
            { text: 'Rafael Nadal', correct: false },
            { text: 'Novak Djokovic', correct: true },
            { text: 'Andy Murray', correct: false },
        ]
    },
    {
        question: 'Which Country won the Fifa womens world cup?',
        answers: [
            { text: 'Spain', correct: true },
            { text: 'USA', correct: false },
            { text: 'Brazil', correct: false },
            { text: 'Australia', correct: false },
        ]
    },
    {
        question: 'Paris Hilton announced the birth of her son and daughter in January and November of this year. What is the first name of her daughter?',
        answers: [
            { text: 'Brooklyn', correct: false },
            { text: 'New York', correct: false },
            { text: 'Bordeaux', correct: false },
            { text: 'London', correct: true },
        ]
    },
    {
        question: '2023 marks the 50th anniversary of what Australian landmark?',
        answers: [
            { text: 'Sydney Tower Eye', correct: false },
            { text: 'Story Bridge', correct: false },
            { text: 'The Sydney Opera House', correct: true },
            { text: 'Sydney Harbour Bridge', correct: false },
        ]
    },
    {
        question: 'The fourth instalment of which film series hit cinemas in 2023 after a two year delay caused by Covid?',
        answers: [
            { text: 'Mission Impossible', correct: false },
            { text: 'John Wick Chapter 4', correct: true },
            { text: 'Top Gun', correct: false },
            { text: 'Terminator', correct: false },
        ]
    },
    {
        question: 'What is 2023 in Roman Numerals?',
        answers: [
            { text: 'MMXXIII', correct: true },
            { text: 'MMXVIII', correct: false },
            { text: 'XXMVIII', correct: false },
            { text: 'MMMMIII', correct: false },
        ]
    },
    {
        question: 'Which currency did Croatia adopt on 1 January 2023?',
        answers: [
            { text: 'The Euro', correct: true },
            { text: 'Pound', correct: false },
            { text: 'Dollar', correct: false },
            { text: 'Baht', correct: false },
        ]
    },
    {
        question: 'In early August 2023 wildfires broke out in the US state of Hawaii, predominantly on which island?',
        answers: [
            { text: 'Maui', correct: true },
            { text: 'Kauai', correct: false },
            { text: 'Lanai', correct: false },
            { text: 'Oahu', correct: false },
        ]
    },
    {
        question: 'After a 35 year run and more than 13,000 performances on Broadway which musical closed on February 18 2023?',
        answers: [
            { text: 'Chicago', correct: false },
            { text: 'Wicked', correct: false },
            { text: 'Rent', correct: false },
            { text: 'The Phantom of the Opera', correct: true },
        ]
    },
    {
        question: 'Which actor from the sitcom Friends passed away on the 28th of October 2023?',
        answers: [
            { text: 'Paul Rudd', correct: false },
            { text: 'David Schwimmer', correct: false },
            { text: 'Matt LeBlanc', correct: false },
            { text: 'Matthew Perry', correct: true },
        ]
    },
    {
        question: 'In which range of mountains was the earthquake of the 8th of September 2023 in Morocco?',
        answers: [
            { text: 'Kunlun Mountains', correct: false },
            { text: 'Carpathian Mountains', correct: false },
            { text: 'The Atlas Mountains', correct: true },
            { text: 'Ural Mountains', correct: false },
        ]
    },
    {
        question: 'What is the 2023 Highest Grossing movie worldwide?',
        answers: [
            { text: 'Oppenheimer', correct: false },
            { text: 'All Quiet on the Western Front', correct: false },
            { text: 'Barbie', correct: true },
            { text: 'Everything Everywhere All At Once', correct: false },
        ]
    },
    {
        question: 'Born in Rosario and one of the most searched people on Google in 2023. Who is it?',
        answers: [
            { text: 'Lionel Messi', correct: true },
            { text: 'Juan Martin del Potro', correct: false },
            { text: 'Cristiano Ronaldo', correct: false },
            { text: 'Neymar da Silva Santos Junior', correct: false },
        ]
    },
    {
        question: 'Who won the copyright infringement case over the song Thinking Out Loud?',
        answers: [
            { text: 'Ed Sheeran', correct: true },
            { text: 'Dermot Kennedy', correct: false },
            { text: 'Lewis Capaldi', correct: false },
            { text: 'Adele', correct: false },
        ]
    },
    {
        question: 'Due to liquidity issues, both First Republic Bank and which other US Financial Institution utterly collapsed in 2023?',
        answers: [
            { text: 'Citigroup', correct: false },
            { text: 'US Bankcorp', correct: false },
            { text: 'Wells Fargo', correct: false },
            { text: 'Silicon Valley Bank', correct: true },
        ]
    },
    {
        question: 'Tyson Fury won a boxing match against Francis Ngannou in a crossover combat event held in which country?',
        answers: [
            { text: 'USA', correct: false },
            { text: 'England', correct: false },
            { text: 'Saudi Arabia', correct: true },
            { text: 'Australia', correct: false },
        ]
    },
    {
        question: 'Which prime minister of New Zealand left office in January 2023?',
        answers: [
            { text: 'John Key', correct: false },
            { text: 'Bill English', correct: false },
            { text: 'Chris Hipkins', correct: false },
            { text: 'Jacinda Ardern', correct: true },
        ]
    },
    {
        question: 'Who broke the record for the most Grammy wins of all time?',
        answers: [
            { text: 'Lady Gaga', correct: false },
            { text: 'Beyonce', correct: true },
            { text: 'Taylor Swift', correct: false },
            { text: 'Rihanna', correct: false },
        ]
    },
    {
        question: 'In July 2023 tens of thousands of tourists fled which Greek island after massive wildfires?',
        answers: [
            { text: 'Kos', correct: false },
            { text: 'Rhodes', correct: true },
            { text: 'Zakynthos', correct: false },
            { text: 'Skiathos', correct: false },
        ]
    },
    {
        question: 'Which worlds largest flower is reported to be at risk of extinction due to habitat loss?',
        answers: [
            { text: 'Helianthus annuus', correct: false },
            { text: 'Corypha umbraculifera', correct: false },
            { text: 'Amorphophallus titanum', correct: false },
            { text: 'Rafflesia', correct: true },
        ]
    },
    {
        question: 'Which multi-sport event was held from 23 September to 8 October 2023 in Hangzhou, China?',
        answers: [
            { text: 'The World Athletics Championship', correct: false },
            { text: 'The Asian Games', correct: true },
            { text: 'The Womens Football World Cup', correct: false },
            { text: 'The Rugby World Cup', correct: false },
        ]
    },
    {
        question: 'On April 4th 2023 which country became the 31st member of Nato?',
        answers: [
            { text: 'Sweden', correct: false },
            { text: 'Finland', correct: true },
            { text: 'Norway', correct: false },
            { text: 'Denmark', correct: false },
        ]
    },
    {
        question: 'Which 2023 American Biographical sports film directed by Ben Affleck is about a basketball shoeline?',
        answers: [
            { text: 'Soaring', correct: false },
            { text: 'Flying', correct: false },
            { text: 'Air', correct: true },
            { text: 'Nike Air', correct: false },
        ]
    },
    {
        question: 'A newly unearthed writing draft reveals that the original title of Queens Bohemian Rhapsody was going to be what?',
        answers: [
            { text: 'Australian Rhapsody', correct: false },
            { text: 'Chinese Rhapsody', correct: false },
            { text: 'British Rhapsody', correct: false },
            { text: 'Mongolian Rhapsody', correct: true },
        ]
    },
    {
        question: 'On June 2023 a submersible operated by which company imploded during a expedition to view the Titanic?',
        answers: [
            { text: 'Oceangate', correct: true },
            { text: 'Watergate', correct: false },
            { text: 'Margate', correct: false },
            { text: 'Seagate', correct: false },
        ]
    },
    {
        question: 'Who directed Oppenheimer?',
        answers: [
            { text: 'Steven Spielberg', correct: false },
            { text: 'Martin Scorsese', correct: false },
            { text: 'Tim Burton', correct: false },
            { text: 'Christopher Nolan', correct: true },
        ]
    },
    {
        question: 'Who stunned Novak Djokovic to win the 2023 Wimbledon men\'s singles title?',
        answers: [
            { text: 'Andrey Rublev', correct: false },
            { text: 'Stefanos Tsitsipas', correct: false },
            { text: 'Jannik Sinner', correct: false },
            { text: 'Carlos Alcaraz', correct: true },
        ]
    },
    {
        question: 'For the first time in US History 2023 saw the leader of which US governmental body ousted from their post?',
        answers: [
            { text: 'Senate', correct: false },
            { text: 'The Department of Defense', correct: false },
            { text: 'House of Representatives', correct: true },
            { text: 'NASA', correct: false },
        ]
    },
    {
        question: 'Which 2023 film starring Leonardo DiCaprio and Robert De Niro is about a series of Oklahoma murders in the 1920s?',
        answers: [
            { text: 'Cobweb', correct: false },
            { text: 'Knock at the Cabin', correct: false },
            { text: 'When Evil Lurks', correct: false },
            { text: 'Killers of the Flower Moon', correct: true },
        ]
    },
    {
        question: 'In November 17th 2023 OpenAI\'s board members made the decision to remove who as its CEO only to reinstate him a few days later?',
        answers: [
            { text: 'Sanjay Mehrotra', correct: false },
            { text: 'Sam Altman', correct: true },
            { text: 'Jay Chaudhry', correct: false },
            { text: 'Arvind Krishna', correct: false },
        ]
    },
    {
        question: 'Which singer did his last ever world tour in 2023?',
        answers: [
            { text: 'Elton John', correct: true },
            { text: 'Cliff Richard', correct: false },
            { text: 'Rod Stewart', correct: false },
            { text: 'Iggy Pop', correct: false },
        ]
    },
    {
        question: 'Which former British prime minister was appointed foreign secretary in November?',
        answers: [
            { text: 'Gordon Brown', correct: false },
            { text: 'Theresa May', correct: false },
            { text: 'Boris Johnson', correct: false },
            { text: 'David Cameron', correct: true },
        ]
    },
    {
        question: 'What was the Oxford English Dictionary\'s word of the year?',
        answers: [
            { text: 'Petfluencer', correct: false },
            { text: 'Rizz', correct: true },
            { text: 'Cakeage', correct: false },
            { text: 'Latine', correct: false },
        ]
    },
    {
        question: 'Who was the only non Red Bull driver to win a Grand Prix race in the 2023 Formula 1 World Championship?',
        answers: [
            { text: 'Charles Leclerc', correct: false },
            { text: 'Fernando Alonso', correct: false },
            { text: 'Carlos Sainz', correct: true },
            { text: 'Lewis Hamilton', correct: false },
        ]
    },
    {
        question: 'Who won the Womens 6 Nations in 2023?',
        answers: [
            { text: 'Wales', correct: false },
            { text: 'Ireland', correct: false },
            { text: 'France', correct: false },
            { text: 'England', correct: true },
        ]
    },
];

//Calls to open instructions
instructionsButton.addEventListener("click", openInstructions);

/** Opens and hides
 * instructions */
function openInstructions() {
    instructionsPage.classList.remove("hidden");
    startPage.classList.add("hidden");
    //Closes instructions 
    exitButton.addEventListener("click", () => {
        instructionsPage.classList.add("hidden");
        startPage.classList.remove("hidden");
    });
}

// runGame function - move from start screen to first question
function runGame() {
    // hide the start button
    startButton.classList.add('hidden');
    // hide the instructions button
    instructionsButton.classList.add('hidden');
    // hide the instructions page
    instructionsPage.classList.add('hidden');
    // hide the greeting
    greeting.classList.add('hidden');
    // show the question
    questionElement.classList.remove('hidden');
    // show the score area
    const scoreArea = document.getElementsByClassName('score-area')[0];
    scoreArea.classList.remove('hidden');

    // initialize game variables
    score = incorrect = 0;
    currentQuestionIndex = -1;

    // shuffle questions
    questions = questionsBank.sort(() => Math.random() - 0.5);

    displayCurrentScore();
    nextQuestion();
}

// ensures current score is showing on each screen
function displayCurrentScore() {
    document.getElementById('score').innerText = score + '';
    document.getElementById('incorrect').innerText = incorrect + '';
}

// calls the first question to be displayed
function displayQuestion() {
    // empty current answers
    answerButtons.innerHTML = '';

    // current question variable
    let currentQuestion = questions[currentQuestionIndex];

    // load the question
    questionElement.innerHTML = currentQuestion.question;

    // load the corresponding question answers which are also shuffled
    const currentQuestionAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);
    currentQuestionAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');

        // if the answer displayed in the button matches the correct answer
        // then associate a correct handler function, otherwise error.
        if (answer.correct) {
            button.onclick = onClickedCorrectButton;
        } else {
            button.onclick = onClickedIncorrectButton;
        }

        // append answer buttons
        answerButtons.appendChild(button);
    });
}

// triggers the next question to be loaded unless there are no questions left
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex += 1;

        displayQuestion();
    } else {
        gameOver();
    }
}

// gameover screen shown once all questions have been answered
function gameOver() {
    // empty current answers
    answerButtons.innerHTML = '';
    questionElement.innerHTML = 'Game Over';

    // show the start button
    startButton.classList.remove('hidden');
    // but show it now as "Restart"
    startButton.innerText = 'Restart';
}

// only allow the user to select one answer for each question
function disableFurtherAnswers() {
    // disable all buttons
    for (let i = 0; i < answerButtons.children.length; i++) {
        answerButtons.children[i].disabled = true;
    }
}

// if answer is correct it goes green on click and increments score by 1
function onClickedCorrectButton() {
    this.style.backgroundColor = 'green';
    score += 1;

    displayCurrentScore();
    disableFurtherAnswers();

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

// if answer is incorrect it goes red on click and increments incorrect score by 1
function onClickedIncorrectButton() {
    this.style.backgroundColor = 'red';
    incorrect += 1;

    displayCurrentScore();
    disableFurtherAnswers();

    setTimeout(() => {
        nextQuestion();
    }, 2000);
}








