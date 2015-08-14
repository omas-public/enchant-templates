enchant();
gs = {
  width:320,height:320,fps:15
};

var SP1 = Class.create(Sprite,{
  initialize:function(width,height,bgcolor,x,y) {
    Sprite.call(this,width,height);
    this.backgroundColor = bgcolor;        // 背景色の設定
    this.x = x;                            // x座標をセット
    this.y = y;                            // y座標をセット
    game.currentScene.addChild(this);      // ステージに追加    
  }
});

var LB = Class.create(Label,{
  initialize:function(text,x,y) {
    Label.call(this,text);
    this.textAlign = "center";          // テキストの位置(left|center|right)
    this.font = "bold 16pt sans-serif"; // フォントを設定(CSSのフォント設定と同じ)s
    this.x = x || 0;
    this.y = y || 0;
    game.currentScene.addChild(this);   // ステージに追加    
  }
});

var LB1 = Class.create(LB,{
  initialize:function(text,x,y) {
    LB.call(this,text,x,y)
    this.width = gs.width;              // ラベルの幅を設定
    this.height = 20;                   // ラベルの高さを設定
    this.color = "white";               // フォントの前景色
    this.backgroundColor = "#ff0000";   // フォントの背景色    
  }
});

var LB2 = Class.create(LB,{
  initialize:function(text,x,y) {
    LB.call(this,text,x,y)
    this.scaleX = 2;                    // 横方向に2倍拡大 
    this.scaleY = 2;                    // 縦方向に2倍拡大
    this.rotation = -15;                // 回転
    this.y = (game.height - this.height) / 2; // 真ん中 
  }
});

window.onload = function() {

  game = new Core(gs.width,gs.height);
  stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function() {
    var sprite1 = new SP1(150,150,"rgb(0,255,0)",50,50);
    var sprite2 = new SP1(150,150,"rgba(0,0,255,0.7)",130,130);
    var label1 = new LB1("Hello World!!");
    var label2 = new LB2("this is sample");
  };

  game.start();

};

