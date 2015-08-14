enchant();

var gsettings = { width:320,height:320,fps:15}; 

var Shape = enchant.Class.create(enchant.Sprite,{
  initialize:function(width,height,x,y){
    enchant.Sprite.call(this,width,height);
    this.x = x || 0;
    this.y = y || 0;
    this.surface = new Surface(width,height);
    this.context = this.surface.context;
    this.image = this.surface;
    game.currentScene.addChild(this);
  }
});

var Line = enchant.Class.create(Shape,{
  initialize:function(width,height){
    Shape.call(this,width,height);
  }
  ,draw:function(start,end){
    with(this.context){
      beginPath();
      moveTo(start.x,start.y);
      lineTo(end.x,end.y);
      stroke();
    }
  }
});

var STYLE = {
  STROKE:0
  ,FILL:1
};

var RectAngle = enchant.Class.create(Shape,{
  initialize:function(width,height,style){
    Shape.call(this,width,height);
    this.style = style;
  }
  ,draw:function(){
    with(this.context){
      beginPath();
      rect(this.x,this.y,this.width,this.height);
      switch (this.style){
      case STYLE.STROKE:
        stroke();
        break;
      case STYLE.FILL:
        fill();
        break;
      }
    }
  }
});

var Circle = enchant.Class.create(Shape,{
  initialize:function(width,height,style){
    Shape.call(this,width,height);
    this.style = style;
  }
  ,draw:function(){
    var center = {x:this.width/2,y:this.height/2};
    with(this.context){
      beginPath();
      arc(center.x,center.y,center.x - this.context.lineWidth,0,Math.PI * 2,true);
      switch (this.style){
      case STYLE.STROKE:
        stroke();
        break;
      case STYLE.FILL:
        fill();
        break;
      }
    }
  }
});

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  game.fps = gsettings.fps;
  var stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function(){
    var line = new Line(320,320);
    line.context.lineWidth = 5;
    line.context.strokeStyle="red";
    line.draw({x:0,y:0},{x:320,y:320});

    var rect = new RectAngle(100,100,STYLE.FILL);
    rect.draw();

    var circle = new Circle(100,100,STYLE.STROKE);
    circle.moveTo(96,96);
    circle.draw();
    
  }
  game.start();

};

/**
 
*/
