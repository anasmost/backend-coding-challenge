const express = require('express')
const config = require('./config')

const server = express()

//Temporary code for testing at the current commit: run "npm run test"
const fetchGithubRepos = require('./repos-fetcher')

server.get('/__raw', async (req, res) => {
  const repos = await fetchGithubRepos()
  res.status(200).json(repos)
})
//End---------------------------

server.listen(
  config.env.PORT,
  console.log(`The microservice is running in ${config.env.NODE_ENV} mode on port ${config.env.PORT}`)
)