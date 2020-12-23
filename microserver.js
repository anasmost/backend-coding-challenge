const express = require('express')
const config = require('./config')

const server = express()

server.listen(
  config.env.PORT,
  console.log(`The microservice is running in ${config.env.NODE_ENV} mode on port ${config.env.PORT}`)
)