const https = require('https')
const { githubRequest } = require('../config')
const $30DaysAgo = require('./30-days-ago')
const { gatherDataFrom, jsonReposFrom } = require('./response-body')

/* Fetches the first 100 trending github repos created in the last 30 days as a json object */
module.exports = function fetchGithubRepos() {

  return new Promise(function (resolve, reject) {

    https.get(
      githubRequest.reposURLSince($30DaysAgo()),//Request URL
      { headers: githubRequest.headers },//Request Headers 
      //Callback
      async function (githubStream) {
        let responseBody = await gatherDataFrom(githubStream)
        resolve(jsonReposFrom(responseBody))
      }
    )

  })

}