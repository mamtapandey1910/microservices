import express from 'express'
import { createTicket } from './ticketController'

const Router = express.Router()

Router.post('/create/ticket', createTicket)

module.exports = Router