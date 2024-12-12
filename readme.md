Docker Build: sudo docker build -t backend-app:dev -f docker/development/Dockerfile .

Docker Run: docker run --rm -it -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 3000:3000 backend-app:dev



Docker Run (prod): docker run --rm -d -v ${PWD}:/usr/src/backend-app -v /usr/src/backend-app/node_modules -p 3000:3000 backend-app:1.0.0

# Documentation

## Overview
This is a Node.js application using Express.js as the web framework and TypeScript as the programming language. The application uses a rate limiter and database connection. It also has a health check endpoint.

## Folder Structure
The application has the following folder structure:

```bash

├── docker
│   └── development
│       └── Dockerfile
│    ├── production
│      └── Dockerfile
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── readme.md
├── src
│   ├── config
│   │   ├── config.ts
│   │   └── rateLimiter.ts
│   ├── constant
│   │   └── responseMessage.ts
│   ├── controller
│   │   └── apiController.ts
│   ├── middleware
│   │   └── rateLimit.ts
│   ├── routes
│   │   └── apiRouter.ts
│   ├── services
│   │   └── databaseService.ts
│   ├── util
│   │   ├── httpError.ts
│   │   ├── httpResponse.ts
│   │   ├── logger.ts
│   │   └── quicker.ts
│   ├── app.ts
│   └── server.ts
└── tsconfig.json

```

* `config`: Contains application configuration files, including `config.ts` for general configuration and `rateLimiter.ts` for rate limiter configuration.
* `controller`: Contains controller files, including `apiController.ts` for API endpoints.
* `middleware`: Contains middleware files, including `rateLimit.ts` for rate limiter middleware.
* `models`: Not present in the given codebase, but typically contains database model files.
* `routes`: Contains route files, including `apiRouter.ts` for API routes.
* `services`: Contains service files, including `databaseService.ts` for database connection and interaction.
* `util`: Contains utility files, including `httpResponse.ts` for HTTP responses, `httpError.ts` for HTTP errors, and `logger.ts` for logging.
* `quicker`: Contains utility files for system and application health checks.

## Configuration
The application configuration is stored in `config/config.ts`. It exports an object with configuration values such as `PORT`, `SERVER_URL`, and `ENV`.

## Rate Limiter
The rate limiter is implemented using the `initRateLimiter` function in `config/rateLimiter.ts`. It uses the `databaseService` to connect to the database and initialize the rate limiter.

## Database
The database connection is implemented using the `databaseService` in `services/databaseService.ts`. It exports a function to connect to the database and a function to close the connection.

## API Endpoints
The API endpoints are implemented using Express.js routers in `routes/apiRouter.ts`. It exports a router with two endpoints: `/self` and `/health`. The `/self` endpoint returns a response with a status code of 200 and a message. The `/health` endpoint returns a response with a status code of 200 and a message with system and application health information.

## System and Application Health Checks
The system and application health checks are implemented using the `quicker` utility files. The `getSystemHealth` function returns an object with system health information such as CPU usage, total memory, free memory, and uptime. The `getApplicationHealth` function returns an object with application health information such as environment, uptime, and memory usage.

## Usage
To use this codebase as a template for a new project, run the following command:
```bash
npx <template-name> my-project
