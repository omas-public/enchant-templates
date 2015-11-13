/*eslint spaced-comment:0, newline-after-var:0*/
/*global Core, Label, Sprite*/
'use strict';
enchant();

var game, stage;
var gs = {
  height: 300,
  width: 300,
  fps: 30
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
