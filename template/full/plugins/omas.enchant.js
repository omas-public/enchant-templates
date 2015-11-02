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
* @construct param Core
* @usage pad = new Pad();
*/

var EPad = enchant.Class.create(enchant.ui.Pad, {
  initialize: function(game) {
    enchant.ui.Pad.call(this);
    this.x = 0;
    this.y = game.height - this.height;
    game.currentScene.addChild(this);
  }
});

/*
* @extent ui.enchant.js(enchant.ui.ScoreLabel)
* @construct param game [x], [y]
* @usage scoreboard = new ScoreBoard();
*/

var EScoreLabel = enchant.Class.create(enchant.ui.ScoreLabel, {
  initialize: function(game, x, y) {
    enchant.ui.ScoreLabel.call(this);
    this.x = x || 0;
    this.y = y || 0;
    game.currentScene.addChild(this);
  }
});

var BaseChara = enchant.Class.create(enchant.Sprite, {

  initialize: function(game, asset, x, y) {
    enchant.Sprite.call(this, asset.width, asset.height);
    this.age = 0;
    this.image = game.assets[asset.image];
    this.frame = asset.frame;
    this.x = x || 0;
    this.y = y || 0;
    game.rootScene.addChild(this);
  },

  left: function() {
      this.scaleX = -1;
  },

  right:function() {
      this.scaleX = 1;
  },

  turn:function() {
      this.scaleX *= -1;
  }

  , remove:function() {
    game.rootScene.removeChild(this);
  }

  , isRange:function() {
    return (this.x > 0 && this.x < game.width)
            && (this.y > 0 && this.y < game.height);
  }

  , isCollision: function(target) {
    if (!Array.isArray(target)) {
      target = new Array(target);
    }

    for (var i = 0; i < target.length; i++)
      if (this.within(target[i],28)) {
        return true;
      }
    return false;
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
   var self = this;
    Object.keys(gs).forEach(function(key) {
      self[key] = gs[key];
    });
    this.setParameter(); // URLからパラメータを渡す
  },
  setParameter: function() {
    document.location.search.substr(1).split('&')
      .forEach(function(urlParam) {
        var keyString = urlParam.split('=');

        this[keyString[0]] = parseInt(keyString[1], 10);
      }, this);
  }
});