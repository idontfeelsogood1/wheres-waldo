const app = require('../app')
const request = require('supertest')
const db = require("../prisma/queries")

// MOCK DB QUERIES 
jest.mock("../prisma/queries")

// GET
describe('GET /leaderboard', () => {
    describe('getLeaderboard', () => {
        beforeEach(() => {
            jest.resetAllMocks(); 
        });

        // SUCCESSFUL QUERY
        test('Responded with HTTP 200 and leaderboard json array', async () => {
            // MOCK RETURN VALUE
            db.findLeaderboard.mockResolvedValue([{ 
                id: "1",
                username: "test1",
                gamename: "game1",
                seconds: "100",
            }])

            const res = await request(app)
                            .get('/leaderboard')

            expect(res.headers["content-type"]).toMatch(/json/)
            expect(res.status).toEqual(200)
            expect(res.body.leaderboard[0].id).toEqual("1")
            expect(res.body.leaderboard[0].username).toEqual("test1")
            expect(res.body.leaderboard[0].gamename).toEqual("game1")
            expect(res.body.leaderboard[0].seconds).toEqual("100")
        })

        // FAILED QUERY
        test('Responded with HTTP 500 and "Something went wrong." error message', async () => {
            // MOCK ERROR THROW
            db.findLeaderboard.mockRejectedValue({
                error: "Database query failed."
            })

            const res = await request(app)
                            .get('/leaderboard')

            expect(res.headers["content-type"]).toMatch(/json/)
            expect(res.status).toEqual(500)
            expect(res.body.message).toEqual("Something went wrong.")
        })
    })
})

// POST
describe('POST /leaderboard', () => {
    describe('postLeaderboard', () => {
        beforeEach(() => {
            jest.resetAllMocks(); 
        });

        // SUCCESSFUL QUERY
        test('Responded with HTTP 200', async () => {
            // MOCK SUCCESSFUL RESOLVE
            db.createLeaderboardRecord.mockResolvedValue([{ 
                success: true
            }])

            const res = await request(app)
                            .post('/leaderboard')

            expect(res.status).toEqual(200)
        })

        // FAILED QUERY
        test('Responded with HTTP 500 and "Something went wrong." error message', async () => {
            // MOCK ERROR THROW
            db.createLeaderboardRecord.mockRejectedValue({
                error: "Database query failed."
            })

            const res = await request(app)
                            .post('/leaderboard')

            expect(res.headers["content-type"]).toMatch(/json/)
            expect(res.status).toEqual(500)
            expect(res.body.message).toEqual("Something went wrong.")
        })
    })
})