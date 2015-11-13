/*eslint spaced-comment:0, newline-after-var:0, no-invalid-this:0*/
/*global Pad, ScoreLabel, TimeLabel*/

'use strict';

enchant(); // enchantライブラリ呼び出し

var gs = (enchant.Class.create({
  initialize: function() {
    this.fps    = 30; // 描画スピード(per second)
    this.width  = 320; // 画面の幅
    this.height = 320; // 画面の高さ
    this.assets = {}; // ゲームで使用する画像や音声ファイル
  }
}))();
var game, stage; // GameCore,Sceneオブジェクト

// 拡張Core
var MyCore = enchant.Class.create(enchant.nineleap.Core, {
  initialize: function(background) {
    enchant.nineleap.Core.call(this); // Coreを継承
    this.fps    = gs.fps;             // fpsをセット
    this.width  = gs.width;           // 画面の幅
    this.height = gs.height;          // 画面の高さ
    this.setStage(background);        // 背景のセット(色)
    this.loadAssets(gs.assets);       // アセットの読み込み(game.preload)
  },

  setStage: function(background) {
    stage = this.rootScene;
    stage.backgroundColor = background || 'white';
  },

  // アセットのパスを配列で返す
  loadAssets: function(assets) {
    var keyname = 'path';
    var assetsPathList = [];

    for (var obj in assets) {
      if (assets[obj].hasOwnProperty(keyname)) {
        assetsPathList.push(assets[obj][keyname]);
      }
    }
    if (assetsPathList !== 0) {
      this.preload(assetsPathList);
    }
  }
});

//  ==================================================
//  Template Normal
//  ==================================================




window.onload = function() {
  game = new MyCore('yellow');
  game.onload = function() {

    // ==================================================================
    var pad = new Pad();
    pad.moveTo(0, game.height - 100);
    stage.addChild(pad);

    var score = new ScoreLabel(0, 0);
    score.on('enterframe', function() {
      if (this.age % 10 === 0) {
        this.score += 1;
      }
    });
    stage.addChild(score);

    var timer = new TimeLabel(game.width / 2, 0, 'countdown');
    timer.time = 10;
    timer.on('enterframe', function() {
      if (this.time < 0) {
        this.text = 'TIME:0.00';
        game.end(score.score);
      }
    });
    stage.addChild(timer);

    // ==================================================================
  };
  game.start();
};
