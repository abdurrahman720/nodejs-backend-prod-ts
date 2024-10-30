import { NextFunction, Request } from 'express'
import errorObject from './errorObject'

/**
 * Handles and propagates error responses through the Express.js error handling middleware chain.
 *
 * @param {NextFunction} nextFunc The next function in the Express.js middleware chain.
 * @param {Error | unknown} err The error object or unknown value to be handled.
 * @param {Request} req The Request object associated with the current route.
 * @param {number} [errorStatusCode=500] The HTTP status code to be used for the error response. Defaults to 500 (Internal Server Error) if not specified.
 *
 * @returns {void} Nothing (calls the next function in the chain with the error object).
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (nextFunc: NextFunction, err: Error | unknown, req: Request, errorStatusCode: number = 500): void => {
    const errorObj = errorObject(err, req, errorStatusCode)
    return nextFunc(errorObj)
}

