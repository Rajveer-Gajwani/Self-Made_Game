const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var gameState = 0;

function setup() {
  createCanvas(800,400);
 
engine = Engine.create();
world = engine.world;

 // screen1 = new Screen();

  obs1 = new Obstacle(100,350,100,20);
  obs2 = new Obstacle2(130,250,100,50);
  obs3 = new Obstacle(270,350,100,20);
  play1 = new Player(50,200);                                

}

function draw() {
  background("cyan");
  
  Engine.update(engine);
  
//screen1.display();
obs1.display();
obs2.display();
obs3.display();
play1.display();

//keyPressed();
Fall();
}


function keyPressed(){
  if(keyCode === 39){
    play1.body.position.x = play1.body.position.x + 5;
  }
  if(keyCode === 37){
    play1.body.position.x = play1.body.position.x - 5;
  }
  if(keyCode === 32){
    play1.body.position.y = play1.body.position.y - 5;
  }
}

function Fall(){
  if(play1.body.position.x === obs2.body.position.x){
    obs2.options.isStatic = false
  }
}