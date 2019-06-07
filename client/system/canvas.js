const CANVAS = document.querySelector('canvas');
const context = CANVAS.getContext('2d');

CANVAS.x = 0;
CANVAS.y = 0;
CANVAS.width = 400;
CANVAS.height = 400;
CANVAS.draw = () => {
	context.fillStyle = '#ced9fd';
	context.fillRect(CANVAS.x, CANVAS.y, CANVAS.width, CANVAS.height);
};