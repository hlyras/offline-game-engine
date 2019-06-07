const ENGINESTATE = {
	status: 'load-game',
	system: {
		exe: () => {
			if(ENGINESTATE.status=='playing'){
				playerController.exe();
			};
			if(ENGINESTATE.status=='paused'){

			};
			if(ENGINESTATE.status=='over'){

			};
		},
		render: () => {
			if(ENGINESTATE.status=='playing'){
				scoreController.render();
				playerController.render();
			};
			if(ENGINESTATE.status=='paused'){
				playerController.render();
			};
			if(ENGINESTATE.status=='over'){
				context.fillStyle = 'black';
				context.font = "30px Arial";
				context.fillText('over...', CANVAS.width / 2 - 55, CANVAS.height / 2 - 15);
			};
		}
	}
};

const ENGINE = {
	loop: () => {
		animation = requestAnimationFrame(ENGINE.loop);
		ENGINE.update();
		ENGINE.render();
		// cancelAnimationFrame(animation);
	},
	update: () => {
		ENGINESTATE.system.exe();
	},
	render: () => {
		CANVAS.draw();
		ENGINESTATE.system.render();
	}
};