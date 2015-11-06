'use strict';

// 拡張Core
var ECore = enchant.Class.create(enchant.nineleap.Core, {
  // コンストラクタ
  initialize: function(gs) {
    enchant.nineleap.Core.call(this); // Coreを継承
    this.fps = gs.fps; // fpsをセット
    this.width = gs.width; // 画面の幅
    this.height = gs.height; // 画面の高さ
    this.loadAssets(gs.assets); // アセットの読み込み
  },

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
  },

  setbackground: function(background) {
    switch (typeof background) {
      case 'string':
        this.currentScene.backgroundColor = background;
        break;
      case 'object':
        this.setbackgroundimage(background);
        break;
      default:
        break;
    }
  },

  setbackgroundimage: function(background) {
    var sprite = new Sprite(
      background.width, background.height);

    sprite.moveTo(
      ~~(this.width - background.width) / 2
      , ~~(this.height - background.width) / 2);
    sprite.image = this.assets[background.path];
    this.currentScene.addChild(sprite);
  }
});

/*
* @extent ui.enchant.js(enchant.ui.Pad)
* @construct param Scene object
* @usage pad = new Pad();
*/

var EPad = enchant.Class.create(enchant.ui.Pad, {
  initialize: function(scene) {
    enchant.ui.Pad.call(this);
    this.x = 0;
    this.y = scene.height - this.height;
    scene.addChild(this);
  }
});

/*
* @extent ui.enchant.js(enchant.ui.ScoreLabel)
* @construct param scene ,[x], [y]
* @usage scoreboard = new ScoreBoard();
*/

var EScoreLabel = enchant.Class.create(enchant.ui.ScoreLabel, {
  initialize: function(scene, x, y) {
    enchant.ui.ScoreLabel.call(this, x, y);
    scene.addChild(this);
  }
});

/*
* @extent ui.enchant.js(enchant.ui.TimeLabel)
* @construct param scene ,[x], [y]
* @usage scoreboard = new ScoreBoard();
*/

var ETimeLabel = enchant.Class.create(enchant.ui.TimeLabel, {
  initialize: function(scene, x, y, counttype) {
    enchant.ui.TimeLabel.call(this, x, y, counttype);
    scene.addChild(this);
  }
});


var BaseChara = enchant.Class.create(enchant.Sprite, {

  initialize: function(game, asset, x, y) {
    enchant.Sprite.call(this, asset.width, asset.height);
    this.age = 0;
    this.image = game.assets[asset.image];
    this.range = {x:game.width, y:game.height};
    this.frame = asset.frame;
    this.x = x || 0;
    this.y = y || 0;
  },

  left: function() {
      this.scaleX = -1;
  },

  right: function() {
      this.scaleX = 1;
  },

  turn: function() {
      this.scaleX *= -1;
  },

  remove: function() {
    this.scene.removeChild(this);
  },

  isRange: function() {
    return (this.x > 0 && this.x < (this.range.x - this.width))
            && (this.y > 0 && this.y < (this.range.y - this.height));
  }
});


var Generator = (function() {

  function Generator() {}
  Generator.number = function(range, offset) {
    var result = Math.floor(Math.random() * range);

    return offset ? result + offset : result;
  };

  Generator.color = function() {
    var color = 255;

    return [
      'rgb('
      , [this.number(color), this.number(color), this.number(color)]
      , ')'
    ].join('');
  };

  Generator.position = function(x, y) {
    return {x: this.number(x), y: this.number(y)};
  };

  return Generator;
}());

var GS = enchant.Class.create({
  initialize: function(gs) {
    this.setParameter(gs); // パラメータを渡す
  },
  setParameter: function(gs) {
    var self = this;

    Object.keys(gs).forEach(function(key) {
      self[key] = gs[key];
    });

    document.location.search.substr(1).split('&')
      .map(function(queries) {
        return queries.split('=');
      })
      .forEach(function(key) {
        this[key[0]] = parseInt(key[1], 10);
      }, this);
  }
});