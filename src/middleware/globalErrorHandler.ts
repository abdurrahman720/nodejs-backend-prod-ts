import { NextFunction, Response, Request } from 'express'
import { THttpError } from '../types/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: THttpError, _: Request, res: Response, __: NextFunction) => {
    res.status(err.statusCode).json(err)
}

