const express = require('express')
const game = express.Router()
const gameController = require("../controllers/gameController")

// GET GAME IMAGE
game.get("/:gameId/image", gameController.getGameImage)

// GET CHARACTER IMAGE
game.get("/:gameId/character/:characterId/image", gameController.getCharacterImage)

// GET GAME
game.get("/:gameId", gameController.getGame)

// CHECK MOUSE CLICK
game.post("/:gameId/character/:characterId/check-mouse", gameController.postMouseClick)

// NOT FOUND
game.use((req, res) => {
    res.sendStatus(404)
})

module.exports = game