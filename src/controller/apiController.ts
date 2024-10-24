import { NextFunction, Request, Response } from 'express'
import httpResponse from '../util/httpResponse'
import responseMessage from '../constant/responseMessage'
import httpError from '../util/httpError'

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            throw new Error('this is error')
            //to send a response , pass the following params where data is optional
            const data = {
                id: '13123'
            }
            httpResponse(req, res, 200, responseMessage.SUCCESS, data)
        } catch (error) {
            httpError(next, error, req, 500)
        }
    }
}

