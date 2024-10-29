import { RateLimiterMongo } from 'rate-limiter-flexible'
import { Connection } from 'mongoose'

export let rateLimiterMongo: null | RateLimiterMongo = null
const POINTS = 10
const DURATION = 60

export const initRateLimiter = (mongooseConnection: Connection) => {
    rateLimiterMongo = new RateLimiterMongo({
        storeClient: mongooseConnection,
        points: POINTS,
        duration: DURATION
    })
}
