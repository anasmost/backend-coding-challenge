const Language = require('./Language')

module.exports = class Languages {

  constructor(githubRepos = []) {
    // Languages count deduced from the githubRepos array
    this.total_count = 0
    // Array of instances of Language class
    this.items = []
    // Computes "items" and "total_count" depending on githubRepos argument
    this.getLanguagesFrom(githubRepos)
  }

  /* adds a language Object to the items array and increments total_cout */
  addLanguage(language) {
    this.items.push(language)
    this.total_count += 1
  }

  /* creates and adds to items Array, language Objects each one of which contains repos, from an Array of repos*/
  getLanguagesFrom(githubRepos) {
    while (githubRepos.length !== 0) {
      // instanciate a new language object from the first github repo's language name
      const currentLanguage = new Language(githubRepos[0].language)
      // load all current language's matching repos
      currentLanguage.getReposFrom(githubRepos)
      // finally, add current language to this languages' object
      this.addLanguage(currentLanguage)
    }
  }

}