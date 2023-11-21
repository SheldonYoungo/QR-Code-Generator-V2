const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()

// SETTINGS
app.set('PORT', process.env.PORT || 3000)

// MIDDLEWARES
app.disable('x-powered-by')
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static('public'))
app.use(express.static('dist'))
app.use(express.json())
app.use('/', require('../routes/routes'))

module.exports = app