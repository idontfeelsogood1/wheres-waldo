import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

// TODO:
  // START WITH BACKEND 
  // DESIGN DATABASE RELATION
  // FIGURE OUT HOW TO SAVE REQUIRED DATA IN DB
  // IMPLEMENT ROUTES

// RESPONSIBILITIES:
  // BACKEND SERVES DATA 
  // FRONTEND HANDLES WIN CONDITION

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