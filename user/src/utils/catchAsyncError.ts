import { APIType } from "../allAPI/userRegistration/regTypes"

export const catchAsyncError = (func: APIType): APIType => {
    return function (req, res, next) {
        Promise.resolve(func(req, res, next)).catch(err => {
            console.log(err)
            next(err)
        })
    }
}