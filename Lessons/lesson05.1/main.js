enchant();

var gsettings = { width:320,height:320,fps:15}; 

var gassets = {};                              //assets object
gassets.background = {
  image: "../images/miku.jpg"
  ,width:320
  ,height:320
};

var eSprite = enchant.Class.create(enchant.Sprite,{
  initialize:function(asset){
    enchant.Sprite.call(this,asset.width,asset.height); 
    this.image = game.assets[asset.image];
    game.currentScene.addChild(this);
  }
});

gassets.space3 = {
  image: "../images/space3.png"
  ,width:32
  ,height:32
};

var Bear = enchant.Class.create(eSprite,{
  initialize:function(frame,x,y){
    eSprite.call(this,gassets.space3); 
    this.frame = frame || 0;
    this.x = x || 0;
    this.y = y || 0;
    game.currentScene.addChild(this)
  }
});

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  game.preload(gassets.background.image,gassets.space3.image); //Preload Image
  var stage = game.rootScene;

  game.onload = function(){
    var background = new eSprite(gassets.background); //Set 

    var bear1 = new Bear();
    var bear2 = new Bear(4,32,32);
    var bear3 = new Bear([5,6,5,7],64,64);
  }
  game.start();

};

