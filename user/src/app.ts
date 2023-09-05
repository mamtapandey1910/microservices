import express from 'express'
import { errorMiddleware } from './allAPI/middleware/errorMiddleware'

export const app = express()

// app.use()

app.use('/', require('./allAPI/userRegistration/regRouter'))


app.use(errorMiddleware)