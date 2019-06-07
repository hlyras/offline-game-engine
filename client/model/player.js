const Player = function(id, username) {
	this.id = id;
	this.username = username;
	this.x = 15;
	this.y = 155;
	this.width = 15;
	this.height = 15;
	this.speed = 10;
	this.dirX = random(1, this.speed);
	this.dirY = random(1, this.speed);
	this.draw = () => {
		context.fillStyle = '#fc2828';
		context.fillText(this.username, this.x-(this.username.length*2), this.y-5);
		context.fillRect(this.x, this.y, this.width, this.height);
	};
	this.move = () => {
		this.x += this.dirX;
		this.y += this.dirY;
		if(this.x < CANVAS.x){
			this.dirX = random(1, this.speed);
			this.x = CANVAS.x;
			SCORE.update('left');
		} else if(this.x + this.width > CANVAS.width){
			this.dirX = -random(1, this.speed);
			this.x = CANVAS.width-this.width;
			SCORE.update('right');
		} else if(this.y < CANVAS.y){
			this.dirY = random(1, this.speed);
			this.y = CANVAS.y;
			SCORE.update('top');
		} else if(this.y + this.height > CANVAS.height){
			this.dirY = -random(1, this.speed);
			this.y = CANVAS.height - this.height;
			SCORE.update('bottom');
		};
	};
	this.spawn = () => {
		this.x = random(0, CANVAS.width-this.width);
		this.y = random(0, CANVAS.height-this.height);
		this.dirX = random(1, this.speed);
		this.dirY = random(1, this.speed);
	};
};