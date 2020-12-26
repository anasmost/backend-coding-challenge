## Github Languages REST Microservice
* This is a microserver that responds to `GET /api/languages` requests, with a json string that
represents the languages that are used by the first 100 trending public repositories on Github.
  ##### Endpoint `GET /api/languages`
  For each language, it provides the number and also the list of repos that are using it, as described below.
* The rendered json string contains 2 properties :
  * `"total_count"`: represents the total number of distinguished languages used by the 100 repos.
  * `"items"` : is an json array of json language objects, each of which has three nested properties:
    * `"language"` : is the language name.
    * `"repos_count"` : is the total number of repos, among the 100, `"language"` property of which is the same as the language name.
    * `"repos"` : is a json array of containing all those repos using that same language.
  ##### Response `Content-Type: application/json`
```
{"total_count":32,"items":
[{"language":"Python","repos_count":17,"repos":
[{"id":319029846,"node_id":"MDEwOlJlcG9zaXRvcnkzMTkwMjk4NDY=","name":"Depix", "full_name":"beurtschipper/Depix","private":false,"owner":{"login":"beurtschipper","id":4620457,"node_id":"MDQ6VXNlcjQ2MjA0NTc=","avatar_url":"https://avatars0.githubusercontent.com/u/4620457?v=4",
...
```
***
***
## Set Up
#### Requirements
* NodeJS
* NPM
* ExpressJs (only dependency)
#### Configuration
- **PORT** is defaulted to 5000.
- **OAuth TOKEN** is used to increase github API requests limit to 30req/min.

You can change both of these configuration parameters in both files of the `/config/` directory.
#### Start Microservice
1. run `$ npm install --production` to install dependencies (while ignoring devDependencies)
2. run `$ npm run start` to start the server in production mode (the main file is `microserver.js`)
***
***
## _Important Notes about features_
1. Repos with a `"language"` value equal to `null` are also listed
2. In regards to the languages variousness that a single github repository may have, this microserver
only takes into consideration the main one language each github repository is using. For, it doesn't
use the `"languages_url"` property of a json github repo.
  ###### _As example, a repo having the following two values_
```
"language": "HTML",
"languages_url": "https://api.github.com/repos/LeonidasEsteban/reto-netflix/languages"
```
  ###### the `languages_url` link renders two languages
```
{
  "HTML": 8899,
  "CSS": 3962
}
```
  ###### Thus, in the CSS language element listed in `"items"` json array, which could be rendered by this microservice, you won't find listed this repo.
3. No client authentification is required
4. No custom error handler is used for: github API fetching, client faulty requests or internal errors.
***
### 

