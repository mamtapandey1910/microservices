import express from 'express'
import { userRegistration } from './regController'

const Router = express.Router()

Router.post('/user/registration', userRegistration)

module.exports = Router