
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball;
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);


	Engine.run(engine);
  
	groundObj.display();
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



