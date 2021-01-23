//Create variables here
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tank1,ground1;
var invisibleBox;
var backgroundImg;
var lasers,btn;
var hearts = [];
var hearts2 = [];
var gameState = "start";
var count=0;

function preload()
{
	//load images here
  // getBackgroundImg();
   p1Img = loadImage("images/p1.png");
   p2Img = loadImage("images/p2.png");
   blast  = loadImage("images/blast/Explosion1.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  var p1 = createSprite(displayWidth-1120,displayHeight-700,100,50);
  p1.addImage("player1",p1Img);
  p1.scale = 0.25;

  var p2 = createSprite(displayWidth-390,displayHeight-700,100,50);
  p2.addImage("player2",p2Img);
  p2.scale = 0.6;

  firework = new Fireworks(windowWidth-1100,height/4);
  //invisibleBox = new Tanktop(windowWidth-1100,height-205);

  tank1 = new Tank(windowWidth-1200,height-145);
  tanktop1 = new Tanktop(windowWidth-1200,height-205);

  compTank = new CTank(windowWidth-100,height-145);
  ground1 = new Ground(windowWidth/2,height-55,width,height/4-50);
  stroke("red");
  strokeWeight(11);
  //lasers = new Laser(450,350);
  btn = new Btn();

  for(var a = displayWidth-280 ; a<=width-100 ; a=a+40){
    hearts2.push(new Hearts(a,displayHeight-700));
  }

  for(var b = displayWidth-1020 ; b<=width-860 ; b=b+40){
    hearts.push(new Hearts(b,displayHeight-700));
  }
}


function draw() {  
  
 // if(backgroundImg)
  background(255);
  
  Engine.update(engine);
  tank1.display();
  tanktop1.display();
  //invisibleBox.display();
  
  //invisibleBox.invisible();
  
  compTank.display();
  ground1.display();
  btn.display();
  firework.display();
  
  for(var i = 0 ; i < hearts.length ; i++){
    hearts[i].display();
  }
  for(var v = 0 ; v < hearts.length ; v++){
    hearts2[v].display();

  }
   
  //  switch(count){
  //   case 1:hearts2.pop();
  //   break;
  //   case 2:hearts2.pop();
  //   break;
  //   case 3:hearts2.pop();
  //   break;
  //   case 4:hearts2.pop();
  //   break;
  //  }
    
   drawSprites();
}

/* async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json(); 
  var datetime = responseJSON.datetime; 
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=17){
    bg = "images/background/rust evening.png"; 
  }    
  else{ 
    bg = "images/background/green night.png";
  } 
  backgroundImg = loadImage(bg);
  } */

function keyPressed(){ 
	if(keyCode === 32){
  // Matter.Body.applyForce(firework.body,firework.body.position,{x:20,y:-20});

   Matter.Body.setPosition(firework.body,{x:compTank.body.position.x,y:compTank.body.position.y});
   firework.rmv();
   image(blast,compTank.body.position.x,compTank.body.position.y,50,50);
   count++;
   hearts2.pop();
   //console.log(hearts2.length);
   // Matter.Body.setStatic(firework.body,true);
  }
  
  
  if(keyCode === 40){
    //tint(255,255);
    Matter.Body.setStatic(firework.body,false);
  }

  /*

  if(keyCode===32)
  {
   // for(var i = 0;i<this.lasers.length;i++)
     // {
        lasers.update();
        lasers.show();
        lasers.applyForce(5);
     // }
  }*/
}


