Game.registerMod("fullscreen",{
	init:function(){
		Game.Notify(`Fullscreen Shortcut successfully loaded!`,'',[]);
		addEventListener("keydown", function(event) {
    		if (event.key == "F11") {
				Game.prefs.fullscreen = (Game.prefs.fullscreen) ? 0 : 1
				Game.ToggleFullscreen();
			};
  		});
	},
	save:function(){
		return "" + Game.prefs.fullscreen;
	},
	load:function(str){
		Game.prefs.fullscreen = parseInt(str);
	}
});
