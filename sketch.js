const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onsling"
function setup() {
  createCanvas(1300,400);
  engine = Engine.create();
  world = engine.world;
  
  //create Ground
  ground = new Ground(650,390,1500,20,"brown");
  // create stand 1
  stand1 = new Ground(450,313,10,135,"silver");
  stand1_2 = new Ground(450,245,200,10,"silver");
  // create stand 2
  stand2 = new Ground(1000,313,10,135,"silver");
  stand2_2 = new Ground(1000,245,200,10,"silver");

  //create Boxes For Stand 1
  box1 = new Box(380,230,30,30,"lightBlue");
  box2 = new Box(415,230,30,30,"Blue");
  box3 = new Box(450,230,30,30,"red");
  box4 = new Box(485,230,30,30,"yellow");
  box5 = new Box(520,230,30,30,"green");

  box6 = new Box(397.5,200,30,30,"red");
  box7 = new Box(432.5,200,30,30,"green");
  box8 = new Box(467.5,200,30,30,"blue");
  box9 = new Box(502.5,200,30,30,"indigo");

  box10 = new Box(415,170,30,30,"lightBlue");
  box11 = new Box(450,170,30,30,"Blue");
  box12 = new Box(485,170,30,30,"red");

  box13 = new Box(432.5,140,30,30,"red");
  box14 = new Box(467.5,140,30,30,"green");

  box15 = new Box(450,100,30,30,"lightBlue");
  
  //create Boxes For Stand 2

  box_1 = new Box(930,230,30,30,"lightBlue");
  box_2 = new Box(965,230,30,30,"Blue");
  box_3 = new Box(1000,230,30,30,"red");
  box_4 = new Box(1035,230,30,30,"yellow");
  box_5 = new Box(1070,230,30,30,"green");

  box_6 = new Box(947.5,200,30,30,"red");
  box_7 = new Box(982.5,200,30,30,"green");
  box_8 = new Box(1017.5,200,30,30,"blue");
  box_9 = new Box(1052.5,200,30,30,"indigo");

  box_10 = new Box(965,170,30,30,"lightBlue");
  box_11 = new Box(1000,170,30,30,"Blue");
  box_12 = new Box(1035,170,30,30,"red");

  box_13 = new Box(982.5,120,30,30,"red");
  box_14 = new Box(1017.5,120,30,30,"green");

  box_15 = new Box(1000,100,30,30,"lightBlue");

  //create Player Ball
  Player = new Poly(150,200,30,30);
  slingshot = new SlingShot(Player.body,{x:150, y:200});
  
}

function draw() {
background(255,255,255);
  Engine.update(engine);
  // Display all the objects
  ground.display();

  stand1.display();
  stand1_2.display();

  stand2.display();
  stand2_2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();

  box15.display();

  //stand 2
  box_1.display();
  box_2.display();
  box_3.display();
  box_4.display();
  box_5.display();

  box_6.display();
  box_7.display();
  box_8.display();
  box_9.display();

  box_10.display();
  box_11.display();
  box_12.display();

  box_13.display();
  box_14.display();

  box_15.display();
  
  //player
  Player.display();

  //slingshot
  slingshot.display();
  
  textSize(30);
  textFont("Times");
  fill("Blue");
  text("Tower Seige",650,50);
}

function mouseDragged(){
  if(gameState==="onsling"){
    Matter.Body.setPosition(Player.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  gameState="launched";
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===SPACE){
    gameState="onsling";
    slingshot.attach(this.Player);
  }
}