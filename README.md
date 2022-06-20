# supadu-test

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Developer Comments ###
- Install on local server
- Git Clone Repo (Master branch)
- Install Node Packages
- Change Database Creadetials in /config/datastore.js file
- Run `Sails lift` (Default port is 1337 - Dev mode)(Database table auto migration will be done automatic)
- Postman collaction (v 2.1) is attached in root directory
- End Points
    - POST /v1/users (Create user)
    - GET /v1/users (Get all users)
    - GET /v1/users/1 (Get user with id 1)
    - PATCH /v1/users/1 (update user with id 1)
    - DELETE /v1/users/1 (delete user with id 1)

- Unit Test File located at test/UsersApi.test.js
- To run Unit Test run below command from root directory 
    node_modules/mocha/bin/mocha.js test/UsersApi.test.js

### Important file locations For code review
/api/models
/api/controllers
/config/routes.js
/config/datastores.js

### MYSQL Version ###
MYSQL - 5.0.12
Db Collection - UTF8_general_ci


<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

