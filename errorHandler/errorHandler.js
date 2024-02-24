import mongoose from 'mongoose';

export class customErrorHandlers extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}


export const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof mongoose.Error.ValidationError) {
        return res.status(404).json({ success: false, message: err.message })
    }
    if (err instanceof customErrorHandlers) {
        return res.status(err.statusCode).json({ success: false, message: err.message })
    }
    return res.status(500).json({ success: false, message: 'Something went wrong - ' + err.message })
}