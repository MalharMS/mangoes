
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6;
var boy;
var stone;
var chain;
var tree;
var treeImg;
var boyImg;
function preload()
{
  treeImg = loadImage("image/tree.png")
  boyImg= loadImage("image/boy.png")
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;


mango1 = new Mango(1280, 270, 100);
mango2 = new Mango(1150, 330, 100);
mango3 = new Mango(1250, 200, 100);
mango4 = new Mango(1350, 360, 100);
mango5 = new Mango(1210, 590, 70);
 
ground = new Ground(750, 750, 1500, 40);
stone= new Stone(184, 630, 40);

chain = new Chain(stone.body, {x : 310, y: 585})
	Engine.run(engine);
  
}


function draw() {

  background("lightblue");

   text("Press Space To Get One More Chance",200,200 )
    
  chain.display();
  drawSprites();
  imageMode(CENTER)
  image(boyImg, 350, 670, 300, 350);
  image(treeImg,1250, 430,900,600);

  
  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  mango5.display();  
     
  
  stone.display();
  ground.display();  

}
   
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(stone.body, {x:184, y:715})
  chain.attach(stone.body)
}

function detectcollision(lstone, lmango){

mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
if(distance<=lmango.radius-25+lstone.radius-50){
  console.log("pluck")
Matter.Body.setStatic(lmango.body ,false)
}
}


