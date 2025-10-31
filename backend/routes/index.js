const express = require('express')
const index = express.Router()
const db = require("../prisma/queries")

// IMPLEMENT ROUTES
index.get('/', async (req, res) => {
    try {
        const leaderboard = await db.getLeaderboard()
        res.status(200).json({ leaderboard })
    } catch(err) {
        console.log(err)
        return res.sendStatus(500)
    }
})

module.exports = index