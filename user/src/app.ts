import express from 'express'
import { errorMiddleware } from './allAPI/middleware/errorMiddleware'
import { database } from './mongodb'

export const app = express()

// app.use()
database()

app.use('/', require('./allAPI/userRegistration/regRouter'))


app.use(errorMiddleware)