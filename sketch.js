
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperball;
var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(1300,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650,350,1300,20);
	paperball = new paper(100,330,30,30);
	dustbin1 = new dustbin(1000,310,10,50);
	dustbin2 = new dustbin(1058,330,100,10);
	dustbin3 = new dustbin(1110,310,10,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:60,y:-60});
	}
}


