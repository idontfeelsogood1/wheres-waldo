const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function findLeaderboard() {
    try {
        return await prisma.leaderboard.findMany({ })
    } catch(err) {
        console.log("DB error at getLeaderboard: ", err)
        throw err
    }
}

async function createLeaderboardRecord(username, gamename, seconds) {
    try {
        await prisma.leaderboard.create({
            username: username,
            gamename: gamename,
            seconds: seconds,
        })
    } catch(err) {
        console.log("DB error at createLeaderboardRecord: ", err)
        throw err
    }
}

module.exports = {
    findLeaderboard,
    createLeaderboardRecord,
}