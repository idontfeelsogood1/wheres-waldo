import Header from './components/Header.jsx'
import './App.css'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <div>
        <Helmet>
            <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1" />
            <title>Find The Character</title>
        </Helmet>

        <Header />

        <Outlet />
      </div>
    </>
  )
}

export default App

// FRONTEND ROUTES
  // Header is present in every routes
  // "/" Renders picture selection
  // "/leaderboard" Renders username/seconds/game-game
  // "/game/:gameId" should render the game 

// CORDINATES LOGIC
  // Checking logic:
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