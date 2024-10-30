import { NextFunction, Request, Response } from 'express'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'
import { rateLimiterMongo } from '../config/rateLimiter'
import httpError from '../util/httpError'
import responseMessage from '../constant/responseMessage'

/**
 * A middleware function that rate limits incoming requests based on the environment.
 * If the environment is set to DEVELOPMENT, it bypasses the rate limiting and calls the next function.
 * If rate limiting is enabled, it checks if the client has exceeded the allowed requests and calls the next function if they have not.
 * If they have exceeded the allowed requests, it returns a 429 TOO_MANY_REQUESTS error.
 *
 * @param {Request} req - The incoming request object.
 * @param {Response} _ - The response object (not used in this function).
 * @param {NextFunction} next - The next function to call in the middleware chain.
 */
export default (req: Request, _: Response, next: NextFunction) => {
    if (config.ENV === EApplicationEnvironment.DEVELOPMENT) {
        return next()
    }

    if (rateLimiterMongo) {
        rateLimiterMongo
            .consume(req.ip as string, 1)
            .then(() => {
                next()
            })
            .catch(() => {
                httpError(next, new Error(responseMessage.TOO_MANY_REQUESTS), req, 429)
            })
    }
}

