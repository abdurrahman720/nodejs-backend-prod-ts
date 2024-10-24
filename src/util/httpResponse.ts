import { Request, Response } from 'express'
import { THttpResponse } from '../types/types'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'
import logger from './logger'

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

