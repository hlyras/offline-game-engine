const Player = function(id, username) {
	this.id = id;
	this.username = username;
	this.x = 15;
	this.y = 15;
	// IF TIS A SQUARE
	// this.width = 15;
	// this.height = 15;
	// IF ITS A CIRCLE
	this.r = 10;
	this.speed = 5;
	this.dirX = random(1, this.speed);
	this.dirY = random(1, this.speed);
	this.draw = () => {
		context.fillStyle = '#fc2828';
		// context.fillText(this.username, this.x-(this.username.length*2), this.y-5);
		// context.fillRect(this.x, this.y, this.width, this.height);
		context.beginPath();
		context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		context.stroke();
	};
	this.move = () => {
		this.x += this.dirX;
		this.y += this.dirY;
		//IF IT'S A SQUARE
		// if(this.x < CANVAS.x){
		// 	this.dirX = random(1, this.speed);
		// 	this.x = CANVAS.x;
		// 	SCORE.update('left');
		// } else if(this.x + this.width > CANVAS.width){
		// 	this.dirX = -random(1, this.speed);
		// 	this.x = CANVAS.width-this.width;
		// 	SCORE.update('right');
		// } else if(this.y < CANVAS.y){
		// 	this.dirY = random(1, this.speed);
		// 	this.y = CANVAS.y;
		// 	SCORE.update('top');
		// } else if(this.y + this.height > CANVAS.height){
		// 	this.dirY = -random(1, this.speed);
		// 	this.y = CANVAS.height - this.height;
		// 	SCORE.update('bottom');
		// };

		// IF IT'S A CIRCLE
		if(this.x - this.r < CANVAS.x){
			this.dirX = random(1, this.speed);
			this.x = CANVAS.x + this.r;
			SCORE.update('left');
		} else if(this.x + this.r > CANVAS.width){
			this.dirX = -random(1, this.speed);
			this.x = CANVAS.width - this.r;
			SCORE.update('right');
		} else if(this.y - this.r < CANVAS.y){
			this.dirY = random(1, this.speed);
			this.y = CANVAS.y + this.r;
			SCORE.update('top');
		} else if(this.y + this.r > CANVAS.height){
			this.dirY = -random(1, this.speed);
			this.y = CANVAS.height - this.r;
			SCORE.update('bottom');
		};

		// To verify if circle touchs another circle
		// var dx = Math.abs(this.x - other.x);
		// var dy = Math.abs(this.y - other.y);
		// var dd = this.r + other.r;
		// if(dd*dd >= (dx*dx)+(dy*dy)) {
		// 	console.log(touch);	
		// };
	};
	this.spawn = () => {
		//IF ITS A SQUARE
		// this.x = random(0, CANVAS.width-this.width);
		// this.y = random(0, CANVAS.height-this.height);
		// this.dirX = random(1, this.speed);
		// this.dirY = random(1, this.speed);

		//IF ITS A CIRCLE
		this.x = random(0, CANVAS.width-this.r);
		this.y = random(0, CANVAS.height-this.r);
		this.dirX = random(1, this.speed);
		this.dirY = random(1, this.speed);
	};
};