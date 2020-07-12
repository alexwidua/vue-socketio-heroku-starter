const express = require('express')
const port = process.env.PORT || 3000
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

/*
 *  Serve /dist/ folder
 */
app.use(express.static(__dirname + '/dist'))
app.get(/.*/, (req, res) => {
	res.sendFile(__dirname + '/dist/index.html')
})

http.listen(port, () => {
	console.log(`Listening on port ${port}`)
})

/*
 *  Store connected clients etc.
 *  Do not use in production 🤪
 */
var clients = []
var counter = 0

io.on('connection', (socket) => {
	/*
	 *  ✨ Handle new connected client
	 */
	console.log(`Client ${socket.id} connected to the server.`)

	// Push new connected socket to socketList
	clients.push({ id: socket.id })

	// Emit the updated client list to *ALL* connected clients.
	io.emit('update_clients', clients)

	// Emit the current counter *ONLY* to the new connected client.
	// Refer to https://socket.io/docs/emit-cheatsheet/ for the difference
	// of `io.emit` and `socket.emit`
	socket.emit('update_counter', counter)

	/*
	 *  👂 Listen to socket events emitted from vue components
	 */

	// Listen to increment_counter event, fired by `increment()` in 'Counter.vue'
	socket.on('increment_counter', () => {
		counter += 1
		io.emit('update_counter', counter)
	})

	// Listen to disconnect event. 'disconnecting' is a reserved event,
	// again refer to https://socket.io/docs/emit-cheatsheet/
	socket.on('disconnecting', () => {
		// Remove the disconnected client from the client list
		clients = clients.filter((client) => {
			return client.id != socket.id
		})
		// Emit the updated client list to all connected clients *EXCEPT* sender.
		socket.broadcast.emit('update_clients', clients)
		console.log(`Client ${socket.id} disconnected from the server.`)
	})
})
