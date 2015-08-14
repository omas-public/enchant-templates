enchant();		// enchantライブラリ呼び出し

var game,stage;	// GameCore,Sceneオブジェクト 
var gs = (enchant.Class.create({
	initialize:function() {
		this.fps   =  30;	// 描画スピード(per second)
		this.width = 320;	// 画面の幅
		this.height= 320;	// 画面の高さ
		// ゲームで使用する画像や音声ファイル
		this.assets = {};
		this.setParameter();
	},
	setParameter:function() {
		document.location.search.substr(1).split('&')
		.forEach(function(url_param){
			var key_value = url_param.split('=');
			this[key_value[0]] = parseInt(key_value[1],10);
		},this);
	}
}))();

// Game Pad
var ePad = enchant.Class.create(enchant.ui.Pad,{
	initialize:function(){
		enchant.ui.Pad.call(this);
		this.x = 0;
		this.y = gs.height - this.height;
	}
});

// Pad用アセット
gs.assets.pad  =  {path:"pad.png"};
gs.assets.apad =  {path:"apad.png"};
gs.assets.font0 = {path:"font0.png"};
gs.assets.icon0 = {path:"icon0.png"};

// 拡張Core
var eCore = enchant.Class.create(enchant.nineleap.Core,{
	// コンストラクタ
	initialize:function(){
		enchant.nineleap.Core.call(this);	// Coreを継承
		this.fps = gs.fps;					// fpsをセット
		this.width = gs.width;				// 画面の幅
		this.height= gs.height;				// 画面の高さ
		this.loadAssets(gs.assets);			// アセットの読み込み
		stage = this.rootScene;
	},	// 
	setbackground:function(background){
		switch (typeof background) {
			case "string":
				stage.backgroundColor = background;
				break;
			case "object":
				this.setbackgroundimage(background);
				break;
		}
	},
	setbackgroundimage:function(background){
		var sprite = new Sprite(
			background.width,background.height);
		sprite.image = this.assets[background.path];
		sprite.moveTo(
			~~(this.width - background.width) / 2
			,~~(this.height - background.width) / 2
		);
		stage.addChild(sprite);
	},	// アセットのパスを配列で返す
	loadAssets:function(assets){
		var keyname = "path";
		var assetsPathList = [];
		for (var obj in assets) 
			if (assets[obj].hasOwnProperty(keyname))
				assetsPathList.push(assets[obj][keyname]);

		if (assetsPathList !== 0) 
			this.preload(assetsPathList);

	}
});

//初期背景画像
gs.assets.background = { 
	height:115
	,width:115
	,path :"indicator.png"
};


//	==================================================
//	Template create 2014-09-03
//	==================================================


window.onload = function(){
	game = new eCore();
	game.setbackground(gs.assets.background);
  game.onload = function(){

		stage.addChild(new ePad());
		stage.addChild(new Label("template for enchant js"));

		stage.on("touchend",function(){
			game.end();
		});
	};

	game.start();
};
