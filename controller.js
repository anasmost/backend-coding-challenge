const Languages = require('./Languages')
const fetchGithubRepos = require('./repos-fetcher')

module.exports = async function getLanguages(req, res) {
  // Get repos from github
  const repos = await fetchGithubRepos()
  // generate languages' object from the fetched repos
  const languages = new Languages(repos)
  // Respond with stringified languages' object
  res.status(200).json(languages)
}