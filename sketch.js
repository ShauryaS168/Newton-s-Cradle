
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, roof;

{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400,100,300,20);
	bob1 = new Bob(300,300,20);
	rope = new Rope(bob1.body,)
	Engine.run(engine);
  
}

function draw(){
  background("black");


  bob1.display();
  roof.display();
  
  drawSprites();
 
 
}


