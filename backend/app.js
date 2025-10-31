const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

// CONFIGS
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// APP RUNNING
const PORT = 3000
app.listen(PORT, (err) => {
  if (err) {
    console.log("App failed to run: ", err)
    return
  }
  console.log(`App running on PORT: ${PORT}`)
})

// TODO:
  // START WITH BACKEND 
  // DESIGN DATABASE RELATION
  // FIGURE OUT HOW TO SAVE REQUIRED DATA IN DB
  // IMPLEMENT SESSION STORAGE TO KEEP TRACK OF ANONYMOUS USER'S PROGRESS
  // IMPLEMENT ROUTES

// RESPONSIBILITIES:
  // BACKEND SERVES DATA AND WIN CONDITION
  // FRONTEND HANDLES RENDERING AND SENDING BACK DATA

// FRONTEND ROUTES
  // Header is present in every routes
  // "/" Renders picture selection
  // "/leaderboard" Renders username/seconds/game-game
  // "picture" routes should Renders each picture components


// CORDINATES LOGIC
  // Database should store:
    // baseWidth, baseHeight of an image
    // width, height, x, y of a character inside the image
  // Checking logic:
    // Backend: 
      // Use point in rectangle equation to determine if user click cord is inside the character rectangle
    // Frontend: 
      // Get current image width, height
      // Fetch necessary data for normalization from backend
      // Normalize cords using equation before sending to backend

// GAME LOGIC
  // Upon visiting a picture:
    // Frontend sends back signal to Backend to start a timer
  
  // The cursor will renders a box around the cursor with character selections menu besides
  // Upon character selection:
    // Sends back current cord of cursor - id of image - character id, to backend
    // Backend check if cords is in range of character's cord of that picture
    // If cords match:
      // Backend sends back correct indicator
    // Else:
      // Backend sends back incorrect indicator
  
  // If correct:
    // Renders a success dialog box and hides it
    // Renders a div with an "x" marker around the character picture
  // Else:
    // Renders an unsuccess dialog box and hides it

  // If all characters found:
    // Fetch time of completion
    // Renders a dialog box and show the user :
      // Time of completion
    // Ask user for username
    // Saves in database
    // Redirect to "/leaderboard"