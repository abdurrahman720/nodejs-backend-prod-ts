import app from './app'
import config from './config/config'
import logger from './util/logger';

const server = app.listen(config.PORT)

;(() => {
    try {
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

