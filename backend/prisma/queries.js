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

module.exports = {
    findLeaderboard,
}