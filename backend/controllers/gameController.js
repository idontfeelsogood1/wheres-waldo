const db = require("../prisma/queries")

async function getGame(req, res) {
    try {
        req.session.score = 0
        req.session.startTime = Date.now()

        const gameId = parseInt(req.params.gameId)
        const game = await db.findGame(gameId)

        res.status(200).json({ game })
    } catch(err) {
        res.status(500).json({ message: "Failed to fetch game." })
    }
}

async function postMouseClick(req, res) {
    // VALIDATE USER'S CLICK
    // If correct:
        // Increment session score 

    // CHECK IF USER HAS WON ( score === 3 )
    // If won:
        // Calculate seconds by (currentTime - startTime)
        // Send won signal
        // SET score/startTime TO NULL
    // Else:
        // Send not won signal
}

module.exports = {
    getGame,
    postMouseClick,
}