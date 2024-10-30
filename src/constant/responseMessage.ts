interface StatusMessages {
    SUCCESS: string
    SOMETHING_WENT_WRONG: string
    UNAUTHORIZED: string
    FORBIDDEN: string
    INTERNAL_SERVER_ERROR: string
    TOO_MANY_REQUESTS: string
    NOT_FOUND: (entity: string) => string
    BAD_REQUEST: (entity: string) => string
    CONFLICT: (entity: string) => string
    UNPROCESSABLE_ENTITY: (entity: string) => string
}

const responseMessages: StatusMessages = {
    SUCCESS: 'The request was successful',
    SOMETHING_WENT_WRONG: 'Something went wrong',

    UNAUTHORIZED: 'You are not authorized to access this resource',
    FORBIDDEN: 'You are not allowed to access this resource',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    TOO_MANY_REQUESTS: 'Too many requests',
    NOT_FOUND: (entity: string) => {
        return `The ${entity} was not found`
    },
    BAD_REQUEST: (entity: string) => {
        return `The ${entity} is invalid`
    },
    CONFLICT: (entity: string) => {
        return `The ${entity} already exists`
    },
    UNPROCESSABLE_ENTITY: (entity: string) => {
        return `The ${entity} is invalid`
    }
}

export default responseMessages

