/*
 global enchant, GS, BaseChara, ECore, Generator
*/

'use strict';

enchant(); // enchantライブラリ呼び出し

var game, stage; // GameCore,Sceneオブジェクト
var gs = new GS({
  fps: 15,
  height: 320,
  width: 320,
  assets: {}
});

// 初期背景画像
gs.assets.background = {
  height: 320,
  width: 320,
  path: './assets/background.gif'
};

gs.assets.bear = {
  height: 32,
  width: 32,
  frame: [5, 5, 6, 6, 5, 5, 7, 7],
  path: './assets/chara1.png',
  speed: 3
};

var Player = enchant.Class.create(BaseChara, {
  initialize: function(x, y) {
    BaseChara.call(this, game, gs.assets.bear);
    this.speed = gs.assets.bear.speed;
    this.input = game.input;
    this.x = x || 0;
    this.y = y || 0;
    this.on('enterframe', this.move);
    stage.addChild(this);
  },

  move: function() {
    if (this.input.up && this.isRangeMinY()) {
      this.y -= this.speed;
    }

    if (this.input.down && this.isRangeMaxY()) {
      this.y += this.speed;
    }

    if (this.input.left && this.isRangeMinX()) {
      this.x -= this.speed;
      this.left();
    }

    if (this.input.right && this.isRangeMaxX()) {
      this.x += this.speed;
      this.right();
    }
  }
});

gs.assets.enemy = {
  height: 32,
  width: 32,
  frame: [3, 3, 4, 4, 5, 5, 4, 4],
  path: './assets/chara6.png',
  speed: 3
};

var Enemy = enchant.Class.create(BaseChara, {
  initialize: function(x, y) {
    BaseChara.call(this, game, gs.assets.enemy);
    this.x = x || Generator.number(game.width - this.width);
    this.y = y || Generator.number(game.height - this.height);
    this.lifetime = Generator.number(100);
    this.on('enterframe', this.start);
    stage.addChild(this);
  },

  start: function() {
    if (this.age > this.lifetime) {
      this.remove();
    }
  }
});

//  ==================================================
//  Template create 2015-10-30
//  ==================================================



window.onload = function() {
  game = new ECore(gs);
  stage = game.rootScene;
  game.onload = function() {
    game.setbackground(gs.assets.background);
    var player = new Player(100, 100);
    var enemies = [];

    for (var i = 0; i < 3; i++) {
      enemies.push(new Enemy());
    }

    stage.on('enterframe', function() {
      if (this.age % 50 === 0) {
        enemies.push(new Enemy());
      }
    });

    stage.on('touchend', function() {
      game.end();
    });
  };

  game.start();
};
