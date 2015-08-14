enchant();

var gsettings = { width:320,height:320,fps:15}; 

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  var stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function(){
    
    var sprite1 = new Sprite(320,320);
    var surface1 = new Surface(320,320);
    with(surface1.context){
      strokeStyle = "black";
      lineCap = "round";
      lineWidth = 5;
      beginPath();
      moveTo(0,0);
      lineTo(320,320);
      stroke();
    }
    sprite1.image = surface1;
    stage.addChild(sprite1);

    var sprite2 = new Sprite(100,100);
    sprite2.moveTo(64,64);
    var surface2 = new Surface(100,100);
    with(surface2.context){
      fillStyle = "red";
      fillRect(0,0,100,100);
    }
    sprite2.image = surface2;
    stage.addChild(sprite2);

    var sprite3 = new Sprite(100,100);
    sprite3.moveTo(110,110);
    var surface3 = new Surface(100,100);
    with(surface3.context){
      strokeStyle = "black";
      lineWidth = 3;
      rect(0,0,100,100);
      stroke();
    }
    sprite3.image = surface3;
    stage.addChild(sprite3);

    var sprite4 = new Sprite(106,106);
    sprite4.moveTo(32,192);
    var surface4 = new Surface(106,106);
    with(surface4.context){
      strokeStyle = "black";
      lineWidth = 2;
      arc(53,53,50,0,Math.PI * 2,true);
      stroke();
    }
    sprite4.image = surface4;
    stage.addChild(sprite4);

    var sprite5 = new Sprite(106,106);
    sprite5.moveTo(192,32);
    var surface5 = new Surface(106,106);
    with(surface5.context){
      fillStyle = "blue";
      lineCap = "round";
      arc(53,53,50,0,Math.PI * 2,true);
      fill();
    }
    sprite5.image = surface5;
    stage.addChild(sprite5);
    
  }
  game.start();

};

/**
 
*/
