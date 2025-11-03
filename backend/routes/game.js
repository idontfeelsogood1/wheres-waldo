const express = require('express')
const game = express.Router()
const gameController = require("../controllers/gameController")

// GET GAME
game.get("/:gameId", gameController.getGame)

// CHECK MOUSE CLICK
game.post("/:gameId/character/:characterId", gameController.postMouseClick)

// NOT FOUND
game.use((req, res) => {
    res.sendStatus(404)
})

module.exports = game