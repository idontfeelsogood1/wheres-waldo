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

function isCorrectClick(clickX, clickY, rectX, rectY, rectWidth, rectHeight) {
    const isInsideX = (clickX >= rectX) && (clickX <= rectX + rectWidth)
    const isInsideY = (clickY >= rectY) && (clickY <= rectY + rectHeight)
    if (isInsideX && isInsideY) return true
    return false
}

// FIGURE OUT HOW TO KNOW IF A CHARACTER HAS BEEN FOUND OR NOT
// IF FOUND
    // DONT ALLOW USER TO CLICK GET CORRECT SIGNAL WHEN CLICKING AT THE SAME PLACE
async function postMouseClick(req, res) {
    try {
        const gameId = parseInt(req.params.gameId)
        const characterId = parseInt(req.params.characterId)
        const clickX = parseInt(req.body.clickX)
        const clickY = parseInt(req.body.clickY)
        const { x, y, width, height } = await db.findCharacterOfGame(characterId, gameId)

        if (isCorrectClick(clickX, clickY, x, y, width, height)) {
            req.session.score += 1
            if (req.session.score === 3) {
                res.json({
                    isCorrectClick: true,
                    hasWon: true,
                    secondsFinished: Math.floor((Date.now() - req.session.startTime) / 1000)
                })
            } else {
                res.json({
                    isCorrectClick: true,
                    hasWon: false,
                })
            }
        } else {
            res.json({ 
                isCorrectClick: false, 
                hasWon: false,
            })
        }
    } catch(err) {
        res.status(500).json({ message: "Failed to validate click." })
    }
}

module.exports = {
    getGame,
    postMouseClick,
    isCorrectClick
}