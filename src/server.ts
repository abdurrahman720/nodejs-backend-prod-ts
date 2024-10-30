import app from './app'
import config from './config/config'
import { initRateLimiter } from './config/rateLimiter'
import databaseService from './services/databaseService'
import logger from './util/logger'

const server = app.listen(config.PORT)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
    try {
        //Database Connection
        const connection = await databaseService.connect()
        logger.info('Database_Connected', {
            meta: {
                connection: connection.name
            }
        })

        //Rate Limiter
        initRateLimiter(connection)
        logger.info('RateLimiter_Initialized')

        logger.info(`Application_Started`, {
            meta: {
                PORT: config.PORT,
                SERVER_URL: config.SERVER_URL
            }
        })
    } catch (error) {
        logger.error('Error', {
            meta: error
        })

        server.close((error) => {
            if (error) {
                logger.error('Error', {
                    meta: error
                })
            }
            process.exit(1)
        })
    }
})()

