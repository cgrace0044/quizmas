# Quizmas

Quizmas is a multiply choice 2023 general knowledge quiz for adults to play over Christmas. There are 60 questions and the aim of the game is to get as many questions correct as possible. The game is designed to be fun and engaging with the use of bright colourful imagery.

This game is a great way to improve your knowledge of 2023 current affairs.

The live link can be found here - [Quizmas](https://cgrace0044.github.io/quizmas/index.html)

ADD RESPONSIVE IMAGE

## Site Owner Goals

- To provide the user with an easy to navigate game that is both fun and educational.
- To present the user with a website that is visually appealing and fully responsive.
- To entice the user to return to the game to improve their score.
- To encourage the user to share the game with friends and family to see who can get the highest score.

## User Stories

ADD USER STORIES HERE

## Design and Colour Scheme

The imagery and colour scheme of the site were both given careful consideration to ensure they compliment each other. The imagery used in the game is very important to the overall experience of the user.

- Given that the game will be predominently played over Christmas 2023, Christmas colours were chosen.

Colour palette from Coolors

![Colour Palette](docs/readme-images/colour_palette.webp)

There are a few subtle Christmas images included on the site including the favicon and some Font Awesome icons used in headers:

![Christmas Imagery](docs/readme-images/christmas_imagery.webp)

Great care was taken to establish a good contrast between background colours and text at all times to ensure maximum user accessibility.

### Fonts

The Montserrat font is the main font used throughout the whole website. This font was imported via [Google Fonts](https://fonts.google.com/). 

Sans Serif is used as a backup font, in case for any reason the main font isn't being imported into the site correctly.

### Layout

The site is a single page with 4 main sections:

- Start screen
- Instructions screen
- Quiz screen with questions and answers
- Gameover and option to restart screen

## Features

### Home Page

The landing page of the website has a very simple layout which includes a H1 heading stating the name of the game and two buttons:

- Start
- Instructions

The H1 heading contains an link to the landing page.

![Landing Page](docs/readme-images/landing_page.webp)

### Instructions

If the user clicks the "Instructions" button the user can read the main rules of the game. The 'X' button will take them back to the landing page.

![Instructions](docs/readme-images/instructions.webp)

### Game Area

- Once the user clicks start on the landing page the first question together with four answers are displayed.
- If the user clicks the correct answer it turns green, otherwise it runs red.
- Once an answer has been clicked the next question will be automatically displayed after a short pause of two seconds.
- As the game progresses a running correct/incorrect answer score is displayed below the game-area.
- A 'Math Random' function was used so that the questions are shuffled.
- The order of the answers to a corresponding question are also shuffled.

![Quiz Screen Large Screens](docs/readme-images/quiz_screen_largerscreens.webp)

![Quiz Screen Smaller Screens](docs/readme-images/quiz_screen_smallerscreens.webp)

### Game Over

- Once the player has answered 60 questions the Gameover screen will be displayed.
- This screen simply states 'gameover' and there is an opportunity to restart the game.
- The final tally of correct and incorrect answers is also shown on this screen.

INPUT THE GAMEOVER SCREEN

### Features Left to Implement

- Ability for the user to input a username
- A leaderboard
  
## Testing

### Validator Testing

HTML

- No errors were returned when passing through the official W3C Markup Validator
INPUT SCREENSHOT HERE

CSS

- No errors were found when passing through the official W3C CSS Validator
INPUT SCREENSHOT HERE
  
Javascript

- No errors or warnings were returned.
INPUT SCREENSHOT HERE

### Accessibility

- The site achieved a Lighthouse accessibility score of 100% on both mobile and desktop which confirms that the colours and fonts chosen are easy to read and accessible

Mobile Lighthouse Score

INPUT FINAL LIGHTHOUSE SCREENSHOT HERE

Desktop Lighthouse Score
INPUT FINAL LIGHTHOUSE SCREENSHOT HERE DESKTOP

### Button Testing

- All buttons were tested manually to ensure the user is directed to the correct section of the website and functions run as intended.

### Game Testing

- The game was thoroughly tested by friends and family to ensure that everything worked as intended including the following:
  - Questions were shuffled so that they don't appear in the same order.
  - Answers to each corresponding questions were shuffled.
  - The game ends once 60 questions have been answered.
  - The user can only select one answer to each question.
  - The total correct and incorrect scores sum to 60 at the end of the game.
  - The next question is automatically displayed once the user has clicked an answer. There is a short timelag of two seconds.
  - Once the game is finished there is an opportunity to restart the game.

### Browser Testing

- The Website was tested on Google Chrome, Firefox, Microsoft Edge, Safari browsers with no issues noted.

### Device Testing

- The website was viewed on a variety of devices such as Desktop, Laptop, mobile and tablet to ensure responsiveness on various screen sizes in both portrait and landscape mode. The website performed as intended. The responsive design was also checked using Chrome developer tools across multiple devices with structural integrity holding for the various sizes.
