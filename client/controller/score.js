var SCORE = {
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	draw: () => {
		context.fillStyle = '#222';
		context.fillText('left: '+SCORE.left, ((CANVAS.width/4)*0)+(CANVAS.width/4)*0.25,
			CANVAS.y + 10);
		context.fillText('right: '+SCORE.right, ((CANVAS.width/4)*1)+(CANVAS.width/4)*0.25,
			CANVAS.y + 10);
		context.fillText('top: '+SCORE.top, ((CANVAS.width/4)*2)+(CANVAS.width/4)*0.25,
			CANVAS.y + 10);
		context.fillText('bottom: '+SCORE.bottom, ((CANVAS.width/4)*3)+(CANVAS.width/4)*0.25,
			CANVAS.y + 10);
	},
	update: (data) => {
		if(data=='left'){
			SCORE.left++;
		} else if(data=='right'){
			SCORE.right++;
		} else if(data=='top'){
			SCORE.top++;
		} else if(data=='bottom'){
			SCORE.bottom++;
		};
	},
	reset: () => {
		SCORE.left = 0;
		SCORE.right = 0;
		SCORE.top = 0;
		SCORE.bottom = 0;
	}
};

const scoreController = {
	exe: () => {

	},
	render: () => {
		SCORE.draw();
	}
};