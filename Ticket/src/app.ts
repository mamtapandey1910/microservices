import express from 'express'
import { errorMiddleware } from './allAPI/middleware/errorMiddleware'
import { database } from './mongodb'
import cors from 'cors'

export const app = express()

// app.use()
database()
app.use(express.json())

app.use(cors())



app.use('/', require('./allAPI/ticket/ticketRouter'))

app.use(errorMiddleware)