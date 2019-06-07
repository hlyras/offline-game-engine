const GAMESTATE = {
	loadGame: () => {
		ENGINE.loop()
		cancelAnimationFrame(animation);
		document.getElementById('load-game').innerHTML = "<h1>Loading..."+loadingTime+"</h1>"
		let interval = setInterval(() => {
			--loadingTime;
			document.getElementById('load-game').innerHTML = "<h1>Loading..."+loadingTime+"</h1>"
			if(loadingTime<1){
				clearInterval(interval);
				GAMESTATE.login();
			};
		}, 1000);
	},
	login: () => {
		cancelAnimationFrame(animation);
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'block';
		CANVAS.style.display = 'none';
		MAIN_MENU.style.display = 'none';
		PAUSE_MENU.style.display = 'none';
	},
	menu: () => {
		cancelAnimationFrame(animation);
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'none';
		CANVAS.style.display = 'none';
		MAIN_MENU.style.display = 'block';
		PAUSE_MENU.style.display = 'none';
	},
	playing: () => {
		ENGINESTATE.status = 'playing';
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'none';
		CANVAS.style.display = 'block';
		MAIN_MENU.style.display = 'none';
		PAUSE_MENU.style.display = 'none';
		
		cancelAnimationFrame(animation);
		ENGINE.loop();
	},
	paused: () => {
		if(ENGINESTATE.status == 'playing'){
			ENGINESTATE.status = 'paused';
			
			LOAD_GAME.style.display = 'none';
			LOGIN.style.display = 'none';
			CANVAS.style.display = 'block';
			MAIN_MENU.style.display = 'none';
			PAUSE_MENU.style.display = 'block';
		} else if(ENGINESTATE.status == 'paused'){
			GAMESTATE.playing();
		};
	},
	over: () => {
		ENGINESTATE.status = 'over';
		
		LOAD_GAME.style.display = 'none';
		LOGIN.style.display = 'none';
		CANVAS.style.display = 'block';
		MAIN_MENU.style.display = 'none';
		
		cancelAnimationFrame(animation);
		ENGINE.loop();
	}
};

GAMESTATE.loadGame();