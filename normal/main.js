"use strict";

enchant();		// enchantライブラリ呼び出し
var game,stage;	// GameCore,Sceneオブジェクト 

var gs = (enchant.Class.create({
	initialize:function() {
		this.fps   =  30;	// 描画スピード(per second)
		this.width = 320;	// 画面の幅
		this.height= 320;	// 画面の高さ
		// ゲームで使用する画像や音声ファイル
		this.assets = {};
		/* assets.bear = {
			path:"assets/chara1.png"
			,width:32,height:32
			,frame:[5]
		}; */
	}
}))();

// 拡張Core
var eCore = enchant.Class.create(enchant.nineleap.Core,{
	// コンストラクタ
	initialize:function(background){
		enchant.nineleap.Core.call(this);	// Coreを継承
		this.fps = gs.fps;					// fpsをセット
		this.width = gs.width;				// 画面の幅
		this.height= gs.height;				// 画面の高さ
		this.setStage(background);			// 背景のセット(色)
		this.loadAssets(gs.assets);			// アセットの読み込み
	},	// 
	setStage:function(background) {
		stage = this.rootScene;
		stage.backgroundColor = background || "white";
	},	// アセットのパスを配列で返す
	loadAssets:function(assets) {
		var keyname = "path";
		var assetsPathList = [];
		for (var obj in assets) {
			if (assets[obj].hasOwnProperty(keyname))
				assetsPathList.push(assets[obj][keyname]);
		}
		if (assetsPathList !== 0) {
			this.preload(assetsPathList);
		}
	}
});

//	==================================================
//	Template create 2014-09-03
//	==================================================




window.onload = function(){
	game = new eCore("mintcream");

	game.onload = function(){
		stage.addChild(new Label("template for enchant js"));
		stage.on("touchend",function(){
			game.end();
		});
	};

	game.start();
};
