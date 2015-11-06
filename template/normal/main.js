'use strict';

enchant(); // enchantライブラリ呼び出し
var game, stage; // GameCore,Sceneオブジェクト

var gs = (enchant.Class.create({
  initialize: function() {
    this.fps = 30; // 描画スピード(per second)
    this.width = 320; // 画面の幅
    this.height = 320; // 画面の高さ
    this.assets = {}; // ゲームで使用する画像や音声ファイル
  }
}))();

// 拡張Core
var MyCore = enchant.Class.create(enchant.nineleap.Core, {
  initialize: function(background) {
    enchant.nineleap.Core.call(this);   // Coreを継承
    this.fps = gs.fps;                  // fpsをセット
    this.width = gs.width;              // 画面の幅
    this.height = gs.height;            // 画面の高さ
    this.setStage(background);          // 背景のセット(色)
    this.loadAssets(gs.assets);         // アセットの読み込み
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
//  Template create 2015-10-30
//  ==================================================

/*
* 画像を使用したい場合

gs.assets.${name} = {
  path     : './assets/${filename}'
  , height : ${height}
  , width  : ${width}
  , frame  : [${frame}]
};

var ${spritename} = new Sprite(
  gs.assets.${name}.width, gs.assets.${name}.height);
${spritename}.image = game.assets[gs.assets.${name}.path];
${spritename}.frame = game.assets[gs.assets.${name}.frame];

*/


window.onload = function() {
  game = new MyCore('mintcream');
  game.onload = function() {

    // ==================================================================

    stage.addChild(new Label('template for enchant js'));
    stage.on('touchend', function() {
      game.end();
    });

    // ==================================================================
  };
  game.start();
};
