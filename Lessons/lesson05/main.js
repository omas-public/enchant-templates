enchant();

var gsettings = { width:320,height:320,fps:15}; 

var gassets = {};                              //assets object
gassets.background = {
  image: "../images/miku.jpg"
  ,width:320
  ,height:320
};
gassets.space3 = {
  image: "../images/space3.png"
  ,width:32
  ,height:32
};

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  game.preload(gassets.background.image,gassets.space3.image); //Preload Image
  var stage = game.rootScene;

  game.onload = function(){
    var background = new Sprite(gassets.background.width,gassets.background.height); //Set 
    background.image = game.assets[gassets.background.image]; //Set Image
    stage.addChild(background);

    var bear1 = new Sprite(gassets.space3.width,gassets.space3.height);
    bear1.image = game.assets[gassets.space3.image];
    stage.addChild(bear1);

    var bear2 = new Sprite(gassets.space3.width,gassets.space3.height);
    bear2.image = game.assets[gassets.space3.image];
    bear2.moveTo(32,32);
    bear2.frame = 4;
    stage.addChild(bear2);
    
    var bear3 = new Sprite(gassets.space3.width,gassets.space3.height);
    bear3.image = game.assets[gassets.space3.image];
    bear3.moveTo(64,64);
    bear3.frame = [5,6,5,7];
    stage.addChild(bear3);
  }
  game.start();

};


/**
// First

enchant();
gsettings = { width:320,height:320,fps:15}; 
window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  game.preload("../images/miku.jpg"); //Preload Image
  var stage = game.rootScene;

  game.onload = function(){
    var background = new Sprite(320,320);
    background.image = game.assets["../images/miku.jpg"]; //Set Image
    stage.addChild(background);
  }
  game.start();

};

// リファクター
enchant();
gsettings = { width:320,height:320,fps:15}; 
gassets = {};                              //assets object
gassets.background = {
  image: "../images/miku.jpg"
  ,width:320
  ,height:320
};
window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  game.preload(gassets.background.image); //Preload Image
  var stage = game.rootScene;

  game.onload = function(){
    var background = new Sprite(gassets.background.width,gassets.background.height); //Set 
    background.image = game.assets[gassets.background.image]; //Set Image
    stage.addChild(background);
  }
  game.start();

};

// Second
//Add Assets
gassets.space3 = {
  image: "../images/space3.png"
  ,width:32
  ,height:32
};
//Add Image
  game.preload(gassets.background.image,gassets.space3.image); 
//Add 
    var bear1 = new Sprite(gassets.space3.width,gassets.space3.height);
    bear1.image = game.assets[gassets.space3.image];
    stage.addChild(bear1);

    var bear2 = new Sprite(gassets.space3.width,gassets.space3.height);
    bear2.image = game.assets[gassets.space3.image];
    bear2.moveTo(32,32);
    bear2.frame = 4;       //frame change
    stage.addChild(bear2);
    
    var bear3 = new Sprite(gassets.space3.width,gassets.space3.height);
    bear3.image = game.assets[gassets.space3.image];
    bear3.moveTo(64,64);
    bear3.frame = [5,6,5,7];//frame array
    stage.addChild(bear3);
 
*/
