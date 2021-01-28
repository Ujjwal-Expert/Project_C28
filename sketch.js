
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
   treeImg = loadImage("sprites/tree.png")
   bgImg = loadImage("sprites/bg.jpg");
   boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height-25,width,20);
  stone = new Stone(120,430,50,50);
  slingShot = new SlingShot(stone.body,{x:120,y:420});

  mango1 = new Mango(500,400, 50);
  mango2 = new Mango(700,200,50);
  mango3 = new Mango(850,300,50);
  mango4 = new Mango(550,150,50);
  mango5 = new Mango(650,320,50);
  mango6 = new Mango(520,270,50);
  mango7 = new Mango(800,170,50)
	
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  Engine.update(engine);

  ground.display();
  
  image(treeImg,300,50);
  image(boyImg,100,400);

  slingShot.display();
  stone.display();

  

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
  push();
  textSize(20);
  fill("red");
  text("Press Space for another Chance",50,50)
  pop();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if (keyCode==32){
    slingShot.reload(stone.body);
  }
}

function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition  = lmango.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=70){
    Matter.Body.setStatic(lmango.body,false);
  }
  
}



