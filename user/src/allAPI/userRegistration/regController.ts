import { catchAsyncError } from "../../utils/catchAsyncError"
import { ErrorHandler } from "../../utils/errorhandler"
import { User } from "./regModel"
import { APIType } from "./regTypes"

export const userRegistration: APIType = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body
    console.log(name, email, password)
    if (!name || !email || !password) {
        return next(new ErrorHandler('Please enter name, email and password', 400))
    }
    const user = await User.create({ ...req.body })
    res.status(201).json({ success: true, user })
})

export const userLogin: APIType = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400))
    }

    const user = await User.findOne({ email })
    if (!user) {
        return next(new ErrorHandler('User does not exits', 404))
    }

    if (user.password !== password) {
        return next(new ErrorHandler('Email and password does not match', 401))
    }

    res.status(200).json({ success: true, message: 'You have been logged in successfully' })
})