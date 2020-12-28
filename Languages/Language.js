module.exports = class Language {

  constructor(languageName) {
    this.language = languageName
    // count of repos language of which is this
    this.repos_count = 0
    // The exact repos language of which is this
    this.repos = []
  }

  /* tests if it is same as the repo's language */
  isLangOf(repo) {
    return repo.language == this.language
  }

  /* Adds a repo to the language repos Array, then increments repos_count*/
  addRepo(repo) {
    const repos = this.repos
    repos.push(repo)
    this.repos_count += 1
    return repo
  }

  /* loads the repos using this language and deletes them from the original array passed as argument */
  getReposFrom(githubRepos) {
    // Read through githubRepos array
    for (let index = 0; index < githubRepos.length; index++) {
      if (this.isLangOf(githubRepos[index])) {
        // remove the matched repo from githubRepos to optimize research for other languages 
        const grabbedRepo = githubRepos.splice(index, 1)[0]
        // Add the matched repo to this language repos
        this.addRepo(grabbedRepo)
        // the actual index is poiting to the next item because of splice
        index--
      }
    }

    return this.repos
  }

}