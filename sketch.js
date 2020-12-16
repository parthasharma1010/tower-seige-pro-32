const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var p1, p2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15;
var block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30;

function setup() {  
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  block1 = new Box(400, 230, 50, 50);
  block2 = new Box(450, 230, 50, 50);
  block3 = new Box(500, 230, 50, 50);
  block4 = new Box(550, 230, 50, 50);
  block5 = new Box(600, 230, 50, 50);
  
  block6 = new Box(425, 180, 50, 50);
  block7 = new Box(475, 180, 50, 50);
  block8 = new Box(525, 180, 50, 50);
  block9 = new Box(575, 180, 50, 50);

  block10 = new Box(450, 130, 50, 50);
  block11 = new Box(500, 130, 50, 50);
  block12 = new Box(550, 130, 50, 50);
  block13 = new Box(475, 80, 50, 50);
  block14 = new Box(525, 80, 50, 50);
  block15 = new Box(500, 30, 50, 50);

  block16 = new Box(800, 170, 30, 30);
  block17 = new Box(830, 170, 30, 30);
  block18 = new Box(860, 170, 30, 30);
  block19 = new Box(890, 170, 30, 30);
  block20 = new Box(920, 170, 30, 30);

  block21 = new Box(815, 140, 30, 30);
  block22 = new Box(845, 140, 30, 30);
  block23 = new Box(875, 140, 30, 30);

  block24 = new Box(830, 110, 30, 30);
  block25 = new Box(860, 110, 30, 30);

  block26 = new Box(845, 80, 30, 30);

  
  ball = new Polygon(100, 100, 30);
  p1 = new Ground(500, 270, 300, 20);
  p2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  block1.display("yellow", "black");
  block2.display("yellow", "black");
  block3.display("yellow", "black");
  block4.display("yellow", "black");
  block5.display("yellow", "black");
  block6.display("yellow", "black");
  block7.display("yellow", "black");
  block8.display("yellow", "black");
  block9.display("yellow", "black");
  block10.display("yellow", "black");
  block11.display("yellow", "black");
  block12.display("yellow", "black");
  block13.display("yellow", "black");
  block14.display("yellow", "black");
  block15.display("yellow", "black");
  
  block16.display("yellow", "black");
  block17.display("yellow", "black");
  block18.display("yellow", "black");
  block19.display("yellow", "black");
  block20.display("yellow", "black");
  
  block21.display("yellow", "black");
  block22.display("yellow", "black");
  block23.display("yellow", "black");

  block24.display("yellow", "black");
  block25.display("yellow", "black");

  block26.display("yellow", "black");

  
  
  sling.display("lime");
  p1.display();
  p2.display();
  ball.display("darkblue", "orange");

  fill("orange");
  textSize(20);
  text("PRESS SPACE FOR A SECOND CHANCE !!",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}

//async function getBackgroundImg(){
//var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
//var responceJSON = await responce.json();

//var datatime = responceJSON.datatime;
//var hour = datatime.slice(11,13)

//}