# vue-socketio-heroku-starter

`vue-socketio-heroku-starter` is a vue-socket.io boilerplate, which sets up a simple socket.io counter application. It consists of a vue client and a express server and is already configured to be deployed to Heroku.

## Usage

Run `npm run serve` and `node server` for development, run `npm run build` and `node server`for production.

## Deploy to Heroku

Create a new Heroku application and add the `heroku/nodejs` and `https://github.com/heroku/heroku-buildpack-static` buildpacks. After development the node server automatically starts from the path specified in the [Procfile](https://heroku-vue-socket-test.herokuapp.com/), make sure to update the file if the `server.js` is moved.
