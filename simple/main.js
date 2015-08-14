enchant();							// enchantライブラリ呼び出し
var game,stage;					// GameCore,SceneGroupオブジェクト 
var gs = {fps:30};			// Gameのfps
gs.canvas = {           // Windowの高さ，幅
  height:320
  ,width:320
};

//	==================================================

window.onload = function() {
	game  = new Core(gs.canvas.width,gs.canvas.height);
	stage = game.rootScene;

	game.onload = function() {
		
	};

	game.start();
};



