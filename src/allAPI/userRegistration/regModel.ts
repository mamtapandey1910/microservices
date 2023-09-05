import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userRegistrationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
})

export const User = mongoose.model('user', userRegistrationSchema)