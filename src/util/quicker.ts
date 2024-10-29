import os from 'os'
import config from '../config/config'
import { memoryUsage, uptime } from 'process'

export default {
    getSystemHealth: () => {
        return {
            cpuUsage: os.loadavg(),
            totalMemory: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
            freeMemory: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`,
            uptime: `${os.uptime()} seconds`
        }
    },
    getApplicationHealth: () => {
        return {
            environment: config.ENV,
            uptime: `${uptime().toFixed(2)} seconds`,
            memoryUsage: {
                heapTotal: `${(memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
                heapUsed: `${(memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                external: `${(memoryUsage().external / 1024 / 1024).toFixed(2)} MB`
            }
        }
    }
}

