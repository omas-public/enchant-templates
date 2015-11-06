'use strict';
enchant();

var game, stage;
var gs = {
  height: 320,
  width: 320,
  fps: 15
};

window.onload = function() {

  game = new Core(gs.width, gs.height);
  // game.preload('./assets/filename.png'); //画像を使う場合
  stage = game.rootScene;
  stage.backgroundColor = 'yellow';

  game.onload = function() {

    // Code Write Here ===================================




    //  ==================================================

  };

  game.start();
};
