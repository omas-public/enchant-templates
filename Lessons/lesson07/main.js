enchant();

var gsettings = {width:320,height:320,fps:15}; 

var gassets = {};                              //assets object
gassets.ui = {
  images:[ "pad.png","apad.png","icon0.png","font0.png" ]
};

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  game.preload(gassets.ui.images); //Preload Image
  var stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function(){

    var pad = new Pad();
    pad.moveTo(0,gsettings.height - pad.height);
    stage.addChild(pad);

    var timelabel = new TimeLabel(0,0);
    timelabel.score = 0;
    stage.addChild(timelabel);

    var lifelabel = new LifeLabel(0,timelabel.height,5);
    stage.addChild(lifelabel);

    var scorelabel = new ScoreLabel(0,lifelabel.y + lifelabel.label.height);
    scorelabel.score = 0;
    stage.addChild(scorelabel);



    stage.on("enterframe",function(){
      if (stage.age > 10 * game.fps){
        game.end();
      }
    });
  }
  game.start();

};

