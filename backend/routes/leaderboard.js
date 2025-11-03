const express = require('express')
const leaderboard = express.Router()
const leaderboardController = require("../controllers/leaderboardController")

// GET LEADERBOARD
leaderboard.get("/", leaderboardController.getLeaderboard)

// POST USER/TIME TO LEADERBOARD
leaderboard.post("/", leaderboardController.postLeaderboard)

// NOT FOUND
leaderboard.use((req, res) => {
    res.sendStatus(404)
})

module.exports = leaderboard
