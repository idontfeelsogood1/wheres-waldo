const express = require('express')
const index = express.Router()

// LEADERBOARD
const leaderboardRouter = require('./leaderboard')
index.use('/leaderboard', leaderboardRouter)

// GAME
const gameRouter = require('./game')
index.use('/game', gameRouter)

// NOT FOUND
index.use((req, res) => {
    res.sendStatus(404)
})

module.exports = index

