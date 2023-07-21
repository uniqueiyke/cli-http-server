const errors = [
    {
        code: 'ENOENT',
        message: 'no such file or directory',
        statusCode: 404,
        statusMessage: 'Not Found'
    },
    {
        code: 'ERR_HTTP_INVALID_HEADER_VALUE',
        message: 'Invalid value "undefined" for header "Content-Type"',
        statusCode: 400,
        statusMessage: 'Bad Request'
    },
    {
        code: 'ERR_INVALID_ARG_TYPE',
        message: 'Server Crashed',
        statusCode: 500,
        statusMessage: 'Internal server error'
    },
    {
        code: 'ERR_INVALID_URL',
        message: 'Invalid URL',
        statusCode: 404,
        statusMessage: 'Not Found'
    }
]

const parseError = err => {
    if(err.code){
        const errObj = errors.find(er => er.code === err.code);
        return {
        message: errObj.message ? errObj.message : 'Unknown error',
        statusCode: errObj.statusCode,
        statusMessage: errObj.statusMessage
        }
    }
    else{
        return {
        message: 'Unknown error',
        statusCode: 403,
        statusMessage: 'Unknown'
        }
    }
}


export {errors, parseError};