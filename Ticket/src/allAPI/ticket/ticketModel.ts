import mongoose from "mongoose";

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    ticketNo: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId
    }
})

export const Ticket = mongoose.model('ticket', ticketSchema)