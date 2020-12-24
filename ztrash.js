// 
class Language {
  constructor(languageName) {
    this.language = languageName
    this.repos = []
  }

  isUsedBy(repo) {
    return repo.language === this.language
  }

  addRepo(repo) {
    this.repos.push(repo)
  }

  getReposFrom(githubRepos) {
    githubRepos.forEach((repo, index) => {
      if (this.isUsedBy(repo)) {
        const grabbedRepo = githubRepos.splice(index, 1)[0]
        this.addRepo(grabbedRepo)
      }
    })
    return this.repos
  }
}

class Languages {
  constructor() {
    this.total_count = 0
    this.items = []
  }

  addLanguage(language) {
    this.items.push(language)
    this.total_count += 1
  }

  getLanguagesFrom(githubRepos) {
    while (githubRepos.length !== 0) {
      const currentLanguage = new Language(githubRepos[0].language)
      currentLanguage.getReposFrom(githubRepos)
      this.addLanguage(currentLanguage)
    }
  }
}







/* get the first 100 trending github repos created in the last 30 days as a json object */
exports.fetchRepos = function (abridged = false) {
  return new Promise(function (resolve, reject) {

    https.get(
      requestParams.searchReposSince($30DaysAgo()),//Request URL
      { headers: requestParams.headers },//Request Headers 
      //Callback
      async function (githubStream) {
        let responseBody = await receiveData(githubStream)
        resolve(toJsonRepos(responseBody, abridged))
      }
    )
  })
}

/* Parse the github response's body. If abridged is true, the json array obtained will be further reduced to primary information : id, url, language, languages_url */
function toJsonRepos(githubString, abridged = false) {
  let { items: repos } = JSON.parse(githubString)
  if (!abridged) {
    return repos
  } else {
    const abridgedRepos = repos.map(repo => {
      const { id, url, language, languages_url } = repo
      return { id, url, language, languages_url }
    })
    return abridgedRepos
  }
}