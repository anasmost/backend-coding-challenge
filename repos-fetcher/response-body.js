/* get the string data from the response's welcoming buffer */
exports.gatherDataFrom = function (readableStream) {
  return new Promise((resolve, reject) => {
    let data = ""
    readableStream.on('data', chunk => data += chunk)
    readableStream.on('end', () => {
      resolve(data)
    })
  })
}

/* Parse the github response's body */
exports.jsonReposFrom = function (githubString) {
  let { items: repos } = JSON.parse(githubString)
  return repos
}