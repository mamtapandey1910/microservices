import { APIType } from "../allAPI/ticket/ticketType"


export const catchAsyncError = (func: APIType): APIType => {
    return function (req, res, next) {
        Promise.resolve(func(req, res, next)).catch(err => next(err))
    }
}