const express = require('express')
const config = require('./config')
const getLanguages = require('./controller')

const server = express()

// Microservice = Get languages for a single GET request route
server.get('/api/languages', getLanguages)

server.listen(
  config.env.PORT,
  console.log(`The microservice is running in ${config.env.NODE_ENV} mode on port ${config.env.PORT}`)
)