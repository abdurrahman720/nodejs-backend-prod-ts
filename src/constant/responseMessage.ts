export default {
    SUCCESS: 'The request was successful',
    SOMETHNG_WENT_WRONG: 'Something went wrong',

    UNAUTHORIZED: 'You are not authorized to access this resource',
    FORBIDDEN: 'You are not allowed to access this resource',
    INTERNAL_SERVER_ERROR: 'Internal server error',
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

