// Github API recommended headers for requests
const headers = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "backend-coding-challenge"
}

// Get the route string to retrieve the first 100 trending public repos since a specific date
const reposURLSince = function (date) {
  return `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&per_page=100&page=1`
}

module.exports = {
  headers,
  reposURLSince
}