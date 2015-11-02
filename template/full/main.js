'use strict';
enchant(); // enchantライブラリ呼び出し

var game, stage; // GameCore,Sceneオブジェクト
var gs = new GS({
  fps:30
  , height: 320
  , width:  320
  , assets: {}
});

// 初期背景画像
gs.assets.background = {
  height: 115,
  width: 115,
  path: './assets/indicator.png'
};

//  ==================================================
//  Template create 2015-10-30
//  ==================================================


window.onload = function() {
  game = new ECore(gs);
  stage = game.rootScene;
  game.onload = function() {
    game.setbackground(gs.assets.background);
    stage.addChild(new EPad(game));
    stage.addChild(new EScoreLabel(game));

    stage.on('touchend', function() {
      game.end();
    });
  };

  game.start();
};
