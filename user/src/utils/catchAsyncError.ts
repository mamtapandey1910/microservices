import { AllAPI } from "../allAPI/userRegistration/regTypes"

export const catchAsyncError = (func: AllAPI): AllAPI => {
    return function (req, res, next) {
        Promise.resolve(func(req, res, next)).catch(err => next(err))
    }
}