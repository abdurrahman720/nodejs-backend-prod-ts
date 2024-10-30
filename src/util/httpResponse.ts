import { Request, Response } from 'express'
import { THttpResponse } from '../types/types'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'
import logger from './logger'

/**
 * Creates and sends an HTTP response based on the provided parameters.
 *
 * This function constructs a response object, logs it, and then sends the response
 * back to the client. In production environment, the client's IP address is not
 * included in the logged response for security reasons.
 *
 * @param req The Express Request object
 * @param res The Express Response object
 * @param responseStatusCode The HTTP status code of the response
 * @param responseMessage A human-readable message describing the response
 * @param responseData Arbitrary data to be included in the response (optional)
 * @returns None
 */
export default (req: Request, res: Response, responseStatusCode: number, responseMessage: string, responseData: unknown = null) => {
    const response: THttpResponse = {
        success: true,
        statusCode: responseStatusCode,
        request: {
            ip: req.ip,
            method: req.method,
            url: req.url
        },
        message: responseMessage,
        data: responseData
    }

    //log
    logger.info('HTTP_RESPONSE', response)

    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete response.request.ip
    }

    res.status(responseStatusCode).json(response)
}

