const socket = io.connect();

socket.on('my player', data => {
	player = new Player(data.id, data.username);
});

socket.on('new player', data => {
	console.log(data);
});