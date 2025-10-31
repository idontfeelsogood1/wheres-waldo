const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function getLeaderboard() {
    try {
        return await prisma.leaderboard.findMany({ })
    } catch(err) {
        // ADD MORE ROBUST ERROR MESSAGE
        console.log(err)
    }
}

module.exports = {
    getLeaderboard,
}