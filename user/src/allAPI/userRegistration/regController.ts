import { ErrorHandler } from "../../utils/errorhandler"
import { User } from "./regModel"
import { AllAPI } from "./regTypes"

export const userRegistration: AllAPI = async (req, res, next) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400).json({ success: false })
        return next(new ErrorHandler('Please enter name, email and password', 400))
    }
    const user = await User.create({ ...req.body })
    res.status(201).json({ success: true, user })
}