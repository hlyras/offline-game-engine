const express = require('express');
const path = require("path");
const app = express();
const server = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'client')));

// Connection handler
const io = require('socket.io')(server);

io.on('connection', (socket) => {
	socket.on('connected', (username) => {
		let player = {
			id: socket.id,
			username: username
		}
		socket.emit('my player', player);
		// socket.emit('new player', players);
		// socket.broadcast.emit('new player', players);
	});
});

// Server host
const port = process.env.PORT || 3000;
server.listen(port, () => {
	console.log('server listening on port ' + port);
});