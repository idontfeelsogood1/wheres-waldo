const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
require('dotenv').config()

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

function getGameImageUrl(imgPath) {
    return process.env.SERVER_URL + `/images` + `/${imgPath}`
}

function getCharacterImageUrl(imgPath) {
    return process.env.SERVER_URL + `/character_images` +  `/${imgPath}`
}

async function findGame(gameId) {
    try {
        const game = await prisma.game.findFirst({
            where: {
                id: gameId
            },
            include: {
                characters: {
                    select: {
                        id: true,
                        gameId: true,
                        imgPath: true,
                        width: true,
                        height: true
                    }
                }
            }
        })

        game["imgUrl"] = getGameImageUrl(game.imgPath)
        for (let character of game.characters) {
            character["imgUrl"] = getCharacterImageUrl(character.imgPath)
        }
        return game
    } catch(err) {
        console.log("DB error at findGame: ", err)
        throw err
    }
}

module.exports = {
    findLeaderboard,
    createLeaderboardRecord,
    findGame,
}