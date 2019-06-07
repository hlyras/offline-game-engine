function registerPlayer(){
	let username = document.getElementById('username').value;
	socket.emit('connected', username);
	GAMESTATE.menu();
};