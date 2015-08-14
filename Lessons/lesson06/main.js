enchant();

var gsettings = { width:320,height:320,fps:15}; 

var gassets = {};                              //assets object
gassets.background = {
  image: "../images/map0.png"
  ,width:16
  ,height:16
};
gassets.background.layer0 = [
   [0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
  ,[0,0,0,0,0,0,0,0,0,0]
];
gassets.background.layer1 = [
   [4,4,4,4,4,4,4,4,4,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,-1,-1,-1,-1,-1,-1,-1,-1,4]
  ,[4,4,4,4,4,4,4,4,4,4]
];



window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  game.preload(gassets.background.image); //Preload Image
  var stage = game.rootScene;

  game.onload = function(){
      var map = new Map(gassets.background.width,gassets.background.height);
      map.image = game.assets[gassets.background.image];
      map.loadData(gassets.background.layer0,gassets.background.layer1);
      stage.addChild(map);
  }
  game.start();

};

