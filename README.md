<img src="icon.svg" align="right" width="200" height="145" />

# vue-socketio-heroku-starter

`vue-socketio-heroku-starter` is a vue-socket.io boilerplate to set up a new vue application using a node backend and websockets. It consists of a vue client and a node server and is using [vue-socket.io-extended](https://github.com/probil/vue-socket.io-extended) to bind socket.io to the vue instance. The project is set up to be deployed to Heroku.

:sparkles: Example app demo:
[vue-socketio-heroku-starter.herokuapp.com](https://vue-socketio-heroku-starter.herokuapp.com/)

## Usage

Run `npm run serve` and `node server` for development, run `npm run build` and `node server` for production.

The application is a simple counter example app, using a node-socket.io server to increment the value across all connected clients. The node server is located in `server.js`.

## Deploy to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/alexwidua/vue-socketio-heroku-starter)

or manually create a new Heroku application and add the `heroku/nodejs` and `https://github.com/heroku/heroku-buildpack-static` buildpacks. Note that
the node server runs from the path specified in the [Procfile](https://heroku-vue-socket-test.herokuapp.com/).
