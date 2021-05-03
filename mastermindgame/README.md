# De-mine-a-bridge-Game

This Mastermind game is called "De-mine a bridge"

# The Story:

A player, called "Sapper" in the game, is asked to de-mine a bridge, that has been mined with four bombs by an enemy. In order to de-mine the bridge, Sapper has to guess the correct colors as well the correct locations of bombs. The Sapper has only 10 attemps.

# Instructions on how to play:

- Start with "New Game" button. After you click, a cute pop-up message will appear that explains rules of the game.
- Click on colored buttons at the bottom, this will put the combintaion of four bombs of the clicked colors.
- After the combinations of four bombs appear, click on "De-mine" button. If combination is correct, you will see pop-up message saying that the bridge has been de-mined. If not correct, two numbers of red and blue colors will appear on the side. The red number shows how many right bombs you have guessed and the blue number shows how many right bombs and their locations correct locations you have guessed.
- If you want to change your mind on current combination, you can click the "Clear" button, that will clear current combination and let you generate the new one.
- The remaining number of guesses is also displayed. If you use all your guess and still don't get the correct combination, the new pop-up message, saying that the bridge has exploded, will appear.

# How to run an app:

- In the terminal, run `npm start`.
- It will run the app in the development mode and automatically open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits and you will also see any errors in the console.

# The developemnt history:

Current app has been created with React framework of JavaScript, HTML5, CSS. Axios library, to make HTTP request from Random Number Generator API, is also used. SweetAlert is another JavaScript library, that has been used to replace JavaScript's alert window.

NPM package manager for the Node also implemented in the project. In the beginnig, I thought of implementing Redux framework as well, but since this is not a very large project with complex components, I changed my mind.

Firstly, I have installed Node to be able to use Node Package Manager, then in the terminal I run install creat-react-app to generate a React boilerplate and some minor changes to index.html, package.json and app.js files.

Then, I did wireframing using Figma. I drew how I want to see my UI. After that, I have created UI of an app, creating buttons, paragraphs in JSX and outlined borders. I used CSS flexbox for styling the UI.

I have initialized the state inside of App class component and fetched data from Random Number Generator API. Then I created event handlers for each button and implemented algorithms to descirebe how each event has to change the state.

New state inputs were added inside the initial state as I went on developing the game application. I did a lot of debugging and code re-structuring. I tried to commit as often as possible, trying to give well descriptive message to each commit.

In the end, I implemented more styling and used Font Awesome kit for adding more graphics to the game. In general, I enjoyed creating this game app very much!
