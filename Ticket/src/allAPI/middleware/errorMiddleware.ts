import { ErrorMiddlewareType } from "./errorMiddlewareType";

export const errorMiddleware: ErrorMiddlewareType = (err, req, res, next) => {
    const message = err.message || 'Internal Server Error'
    const status = err.status || 500
    res.status(status).json({ success: false, message })
}