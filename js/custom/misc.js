'use strict';
/*
*
* @extent ui.enchant.js(enchant.ui.Pad)
* @require game(core) instance
* @usage crosskey = new CrossKey();
*/
var CrossKey = enchant.Class.create(enchant.ui.Pad, {
  initialize: function(game) {
    enchant.ui.Pad.call(this);
    this.x = 0;
    this.y = game.height - this.height;
    game.currentScene.addChild(this);
  }
});

/*
*
* @extent ui.enchant.js(enchant.ui.ScoreLabel)
* @require game(core) instance
* @construct param x,y
* @usage scoreboard = new ScoreBoard();
*/
var ScoreBoard = enchant.Class.create(enchant.ui.ScoreLabel, {
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
        return {x:this.number(x), y:this.number(y)};
    };

    return Generator;
}());


