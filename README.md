# README

 [![](https://user-images.githubusercontent.com/1638767/38254268-d4476bbe-3793-11e8-964c-8865d690baff.png)](https://growi.org)

 [![](https://img.shields.io/github/release/weseek/crowi-plus.svg)](https://github.com/weseek/crowi-plus/releases/latest) [![](https://crowi-plus-slackin.weseek.co.jp/badge.svg)](https://growi-slackin.weseek.co.jp/)

 [Demo Site](https://demo.growi.org)

 [![](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## GROWI

[![wercker status](https://app.wercker.com/status/595b761d0e26796ddb304679f7bf27de/s/master)](https://app.wercker.com/project/byKey/595b761d0e26796ddb304679f7bf27de) [![dependencies status](https://david-dm.org/weseek/growi.svg)](https://david-dm.org/weseek/growi) [![devDependencies Status](https://david-dm.org/weseek/growi/dev-status.svg)](https://david-dm.org/weseek/growi?type=dev) [![docker pulls](https://img.shields.io/docker/pulls/weseek/growi.svg)](https://hub.docker.com/r/weseek/growi/)

* [Features](./#features)
* [Quick Start for Production](./#quick-start-for-production)
  * [On-premise](./#on-premise)
  * [Using Heroku](./#using-heroku)
  * [Using docker-compose](./#using-docker-compose)
* [Environment Variables](./#environment-variables)
* [Documentation](./#documentation)
* [License](./#license)

## Features

* **Pluggable**
  * You can find plugins from [npm](https://www.npmjs.com/browse/keyword/growi-plugin) or [github](https://github.com/search?q=topic%3Agrowi-plugin)!
* **Features**
  * Create hierarchical pages with markdown
  * Support Authentication with LDAP / Active Directory 
  * Slack Incoming Webhooks Integration
  * [Miscellaneous features](https://github.com/weseek/growi/wiki/Additional-Features)
* [**Docker Ready**](https://hub.docker.com/r/weseek/growi)
* [**Docker Compose Ready**](https://github.com/weseek/growi-docker-compose)
  * [Multiple sites example](https://github.com/weseek/growi-docker-compose/tree/master/examples/multi-app)
  * [HTTPS\(with Let's Encrypt\) proxy integration example](https://github.com/weseek/growi-docker-compose/tree/master/examples/https-portal)
* Support IE11 \(Experimental\)

## Quick Start for Production

### Using Heroku

1. Go to [https://heroku.com/deploy](https://heroku.com/deploy)
2. \(Optional\) Input INSTALL\_PLUGINS to install plugins

### Using docker-compose

```bash
git clone https://github.com/weseek/growi-docker-compose.git growi
cd growi
docker-compose up
```

See also [weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose)

### On-premise

[**Migration Guide from Crowi** is here](https://github.com/weseek/growi/wiki/Migration-Guide-from-Crowi).

#### Dependencies

* node 8.x \(DON'T USE 9.x\)
* npm 5.x
* yarn
* MongoDB 3.x

See [confirmed versions](https://github.com/weseek/growi/wiki/Developers-Guide#versions-confirmed-to-work).

**Optional Dependencies**

* Redis 3.x
* ElasticSearch 5.x \(needed when using Full-text search\)
  * **CAUTION: Following plugins are required**
    * [Japanese \(kuromoji\) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
    * [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

#### How to start

**Build and run the app**

```bash
git clone https://github.com/weseek/growi.git
cd growi
yarn
MONGO_URI=mongodb://MONGO_HOST:MONGO_PORT/growi npm start
```

**DO NOT USE** `npm install`, use `yarn` instead.

If you launch growi with Redis and ElasticSearch, add environment variables before `npm start` like following:

```text
export MONGO_URI=mongodb://MONGO_HOST:MONGO_PORT/growi
export REDIS_URL=redis://REDIS_HOST:REDIS_PORT/growi
export ELASTICSEARCH_URI=http://ELASTICSEARCH_HOST:ELASTICSEARCH_PORT/growi
npm start
```

For more info, see [Developers Guide](https://github.com/weseek/growi/wiki/Developers-Guide) and [Crowi documents](https://github.com/crowi/crowi/wiki/Install-and-Configuration#env-parameters).

**Command details**

| command | desc |
| --- | --- |
| `npm run build:prod` | Build the client |
| `npm run server:prod` | Launch the server |
| `npm start` | Invoke `npm run build:prod` and `npm run server:prod` |

#### How to upgrade

```bash
git pull
yarn
npm start
```

#### How to install plugins

* Stop server if server is running
* `yarn add` to install plugin or `npm install`
* `npm start` to build client app and start server

**Examples**

```bash
yarn add growi-plugin-lsx
npm start
```

For more info, see [Developers Guide](https://github.com/weseek/growi/wiki/Developers-Guide) on Wiki.

## Environment Variables

* **Required**
  * MONGO\_URI: URI to connect to MongoDB.
* **Option**
  * NODE\_ENV: `production` OR `development`.
  * PORT: Server port. default: `3000`
  * REDIS\_URL: URI to connect to Redis \(to session store\).
  * ELASTICSEARCH\_URI: URI to connect to Elasticearch.
  * PLANTUML\_URI: URI to connect to [PlantUML](http://plantuml.com/) server.
  * BLOCKDIAG\_URI: URI to connect to [blockdiag](http://http://blockdiag.com/) server.
  * PASSWORD\_SEED: A password seed used by password hash generator.
  * SECRET\_TOKEN: A secret key for verifying the integrity of signed cookies.
  * SESSION\_NAME: The name of the session ID cookie to set in the response by Express. default: `connect.sid`
  * FILE\_UPLOAD: `aws` \(default\), `local`, `none`

## Documentation

* [github wiki pages](https://github.com/weseek/growi/wiki)
  * [Questions and Answers](https://github.com/weseek/growi/wiki/Questions-and-Answers)
  * [Migration Guide from Crowi](https://github.com/weseek/growi/wiki/Migration-Guide-from-Crowi)
  * [Developers Guide](https://github.com/weseek/growi/wiki/Developers-Guide)

## Contribution

### For development

#### Build and Run the app

1. `clone` this repository
2. `yarn` to install all dependencies
   * DO NOT USE `npm install`
3. `npm run build` to build client app
4. `npm run server` to start the dev server
5. Access `http://0.0.0.0:3000`

### Found a Bug?

If you found a bug in the source code, you can help us by [submitting an issue](https://github.com/weseek/growi/issues) to our [GitHub Repository](https://github.com/weseek/growi). Even better, you can [submit a Pull Request](https://github.com/weseek/growi/pulls) with a fix.

### Missing a Feature?

You can _request_ a new feature by [submitting an issue](https://github.com/weseek/growi/issues) to our GitHub Repository. If you would like to _implement_ a new feature, firstly please submit the issue with your proposal to make sure we can confirm it. Please clarify what kind of change you would like to propose.

* For a **Major Feature**, firstly open an issue and outline your proposal so it can be discussed. 

  It also allows us to coordinate better, prevent duplication of work and help you to create the change so it can be successfully accepted into the project.

* **Small Features** can be created and directly [submitted as a Pull Request](https://github.com/weseek/growi/pulls).

### Language

You can write issues and PRs in English or Japanese.

### Discussion

If you have questions or suggestions, you can [join our Slack team](https://growi-slackin.weseek.co.jp/) and talk about anything, anytime.

## License

* The MIT License \(MIT\)
* See LICENSE file.

