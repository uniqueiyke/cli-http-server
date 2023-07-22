"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseError = exports.errors = void 0;
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
];
exports.errors = errors;
const parseError = (err) => {
    if (err.code !== undefined) {
        const errObj = errors.find(er => er.code === err.code);
        if (!errObj)
            return {
                message: 'Unknown error',
                statusCode: 403,
                statusMessage: 'Unknown'
            };
        return {
            message: (errObj.message) ? errObj.message : 'Unknown error',
            statusCode: errObj.statusCode,
            statusMessage: errObj.statusMessage
        };
    }
    return {
        message: 'Unknown error',
        statusCode: 403,
        statusMessage: 'Unknown'
    };
};
exports.parseError = parseError;
//# sourceMappingURL=errors.js.map