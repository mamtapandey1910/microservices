import { catchAsyncError } from "../../utils/catchAsyncError"
import { ErrorHandler } from "../../utils/errorhandler"
import { Ticket } from "./ticketModel"
import { APIType } from "./ticketType"
import crypto from 'crypto'

export const createTicket: APIType = catchAsyncError(async (req, res, next) => {
    const { title, description } = req.body
    console.log('title', title, description)
    if (!title || !description) {
        return next(new ErrorHandler('Please enter Title and Description', 400))
    }
    const ticket = await Ticket.create({ ticketNo: 'HDFFAGSFD', title, description })
    res.status(201).json({ success: true, ticket })
})