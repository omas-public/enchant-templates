enchant();
gs = {
  height:640
  ,width:640
  ,fps:30
  ,title:'トルネコの冒険'
};

window.onload = function() {
  game = new Core(gs.width,gs.height);
  game.fps = gs.fps;
  stage = game.rootScene;
  stage.backgroundColor = 'yellow';
  game.onload = function() {
    title = new Label(gs.title);
    stage.addChild(title);
  };
  game.start();
};

/**

enchantのベースプログラム
// First Step
enchant();                     // enchant ライブラリの呼び出しメソッド
window.onload = function() {}; // ブラウザWindowの起動イベントにfunctionオブジェクトを代入


// Second Step
enchant();
window.onload = function(){

  game = new Core(320,320);    // gameインスタンスをenchantのCoreオブジェクトから生成
  game.onload = function() {}; // gameインスタンスの起動イベントにfunctionオブジェクトを代入
  game.start();                // gameインスタンスのプログラムを開始

};

// Third Step
enchant();
window.onload = function() {

  game = new Core(320,320);
  stage = game.rootScene;           // ステージ変数に初期値としてgameインスタンスのrootSceneを代入
  stage.backgroundColor = "yellow"; // ステージの背景色を設定
  game.onload = function(){};
  game.start();

};

// リファクタリング (マジックナンバーを排除)
enchant();
gs = {                  //ゲームウィンドウの幅，高さ，fpsを定義
  width:320
  ,height:320
  ,fps:15
};

window.onload = function(){

  game = new Core(gs.width,gs.height);//定義した変数を使用
  stage = game.rootScene;     
  stage.backgroundColor = "yellow"; 
  game.onload=function(){};
  game.start();

};


*/
