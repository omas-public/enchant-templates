enchant();
gs = {
  width:320,height:320,fps:15
};

window.onload = function() {

  game = new Core(gs.width,gs.height);
  stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function() {

  };

  game.start();

};

/**

    var sprite1 = new Sprite(150,150);        // スプライトオブジェクトの生成，幅150px，高さ150px
    sprite1.backgroundColor = "rgb(0,255,0)"; // 背景色の設定
    sprite1.x = 50;                           // x座標を50の位置へ
    sprite1.y = 50;                           // y座標を50の位置へ
    stage.addChild(sprite1);                  // ステージに追加

    var sprite2 = new Sprite(150,150);
    sprite2.backgroundColor = "rgba(0,0,255,0.7)"; // 透過背景色
    sprite2.x = 130;
    sprite2.y = 130;
    stage.addChild(sprite2);

    var label1 = new Label();             // ラベルオブジェクトの生成 
    label1.text = "Hello World!!";        // テキストを設定
    label1.textAlign = "center";          // テキストの位置(left|center|right)
    label1.font = "bold 16pt sans-serif"; // フォントを設定(CSSのフォント設定と同じ)
    label1.width = gs.width;              // ラベルの幅を設定
    label1.height = 20;                   // ラベルの高さを設定
    label1.color = "white";               // フォントの前景色
    label1.backgroundColor = "#ff0000";   // フォントの背景色
    stage.addChild(label1);               // ステージに追加 

    var label2 = new Label();
    label2.text = "this is object sample";
    label2.scaleX = 2;                    // 横方向に2倍拡大 
    label2.scaleY = 2;                    // 縦方向に2倍拡大
    label2.textAlign = "center";
    label2.rotation = -15;                // 回転
    label2.y = (game.height - label2.height) / 2; 
    stage.addChild(label2);


// enchant.Sprite  
http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Sprite.html
@extends enchant.Entity -> enchant.Node
obj = new Sprite(width, height)
Sprite Field
   
obj.frame = 表示するフレームのインデックス.
obj.image = Spriteで表示する画像.

// enchant.Label   
http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Label.html
@extends enchant.Entity -> enchant.Node
obj = new Label(text)
Label Field

obj.color = 文字色の指定.
obj.font = フォントの指定.
obj.text = 表示するテキスト.
obj.textAlign = テキストの水平位置の指定.

// enchant.Entitiy
http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Entity.html
@extends enchant.Node
Entity Field(主要なもの)

obj.backgroundColor = "色"; //背景色("色名" | "#ffffff" | rgb(255,255,255) | rgba(255,255,255,0.7))
obj.height = "高さ";        //高さを設定
obj.opacity = "透過率";     //透明度を設定(0.0 - 1.0)     
obj.rotation = "角度";      //傾きを設定(+-360)
obj.scaleX = "倍率";        //x方向の拡大率
obj.scaleY = "倍率";        //y方向の拡大率
obj.width = "幅";

// enchant.Node
http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Node.html
Node Field(主要なもの)

obj.x = x座標;              // x座標の位置を設定
obj.y = y座標;              // y座標の位置を設定

*/
