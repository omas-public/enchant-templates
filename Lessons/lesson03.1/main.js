enchant();
gs = {
  width:320,height:320,fps:15
};

var BaseSprite = Class.create(Sprite,{
  initialize:function(x,y,bgcolor) {
    Sprite.call(this,32,32);
    this.x = x || 0;
    this.y = y || 0;
    this.backgroundColor = bgcolor || "white";
    game.currentScene.addChild(this);
  }
});

var SP1 = Class.create(BaseSprite,{
  initialize:function(x,y,bgcolor) {
    BaseSprite.call(this,x,y,bgcolor)
  },
  onenterframe:function() {
    this.moveBy(1,1);
  }
});

var SP2 = Class.create(BaseSprite,{
  initialize:function(x,y,bgcolor) {
    BaseSprite.call(this,x,y,bgcolor)
  },
  onenterframe:function() {
    this.moveBy(1,1);
  },

  ontouchstart:function(e){
      this.backgroundColor = "red";
  },

  ontouchend:function(e){
      this.backgroundColor = "blue";
  },

  ontouchmove:function(e){
      this.scale(1.1,1.1);  
  }
});

var Stage = Class.create(Scene,{
  initialize:function() {
    Scene.call(this);
    game.rootScene.addChild(this);
  }
});

window.onload = function(){

  game = new Core(gs.width,gs.height);
  game.fps = gs.fps;
  var stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function(){

    var sprite1 = new SP1(0,0,"green");
    var sprite2 = new SP2(100,100,"blue");


    sprite2.on("enterframe",function(e){
      if(this.intersect(sprite1)) 
        sprite1.rotate(5);
    });

    stage.on("touchend",function(e){
      sprite2.moveTo(e.localX,e.localY);
    });
   
    stage.on("enterframe",function(e){
      if(game.input.right) sprite2.moveBy(3,0);
      if(game.input.left) sprite2.moveBy(-3,0);
      if(game.input.up) sprite2.moveBy(0,-3);
      if(game.input.down) sprite2.moveBy(0,3);
    });

  };

  game.start();

};

/**
//First

    var sprite1 = new Sprite(32,32);
    sprite1.backgroundColor = "green";
    stage.addChild(sprite1);

    sprite1.on("enterframe",function(){   //フレーム毎に
      this.moveBy(1,1);                   //今いる位置からx方向へ1，y方向に1動かす
    });


// Second
    var sprite2 = new Sprite(32,32);
    sprite2.backgroundColor = "blue";
    sprite2.moveTo(100,100); //初期位置 x座標100，y座標100へ (sprite2.x = 100; sprite2.y = 100;)
    stage.addChild(sprite2);

    sprite2.on("touchstart",function(e){}); //sprite1上でクリック開始時
    sprite2.on("touchend",function(e){});   //sprite1上でクリック終了時
    sprite2.on("touchmove",function(e){});  //sprite1上でドラッグした時

// Third

    sprite2.on("touchstart",function(e){
      this.backgroundColor = "red";         //クリック開始時背景色を赤に
    });
  
    sprite2.on("touchend",function(e){
      this.backgroundColor = "blue";        //クリック終了時背景色をもとに戻す
    });

    sprite2.on("touchmove",function(e){
      this.scale(1.1,1.1);                  //ドラッグ中拡大する
    });

    sprite2.on("enterframe",function(e){
      if(this.intersect(sprite1))           //sprite2がsprite1と接触したら 
        sprite1.rotate(5);                  //sprite1を回転
    });

// Fourth

    stage.on("touchend",function(e){        //ステージ上のクリック終了時
      sprite2.moveTo(e.localX,e.localY);    //イベントオブジェクトよりx座標(e.localX)とy座標(e.localY)を取得
    });

    stage.on("enterframe",function(e){      //ステージ上のエンターフレーム時
      if(game.input.right) sprite2.moveBy(3,0); // 十字キー右ボタン 右へ動かす
      if(game.input.left) sprite2.moveBy(-3,0); // 十字キー左ボタン 左へ動かす
      if(game.input.up) sprite2.moveBy(0,-3);   // 十字キー上ボタン
      if(game.input.down) sprite2.moveBy(0,3);  // 十字キー下ボタン
    });

*/

