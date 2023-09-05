import mongoose, { ConnectOptions } from "mongoose";

export const database = () => mongoose.connect('mongodb://127.0.0.1/TicketApplication', {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions).then(() => {
    console.log('connected to mongodb')
}).catch((err: Error) => {
    console.log('an error occured while connecting to mongodb', err)
})