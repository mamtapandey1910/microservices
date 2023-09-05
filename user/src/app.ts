import express from 'express'
import { errorMiddleware } from './middleware/errorMiddleware'
import { database } from './mongodb'
import cors from 'cors'

export const app = express()

// app.use()
database()
app.use(express.json())
app.use(cors())

app.use('/', require('./allAPI/userRegistration/regRouter'))


app.use(errorMiddleware)