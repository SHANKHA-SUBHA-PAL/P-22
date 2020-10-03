var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bSide1,bSide2,bSide3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bSide1 = createSprite(width/2,height-40,200,20);
	bSide1.shapeColor = "red";

	bSide2 = createSprite(500,height-80,20,100);
	bSide2.shapeColor = "red";

	bSide3 = createSprite(300,height-80,20,100);
	bSide3.shapeColor = "red";
	//bside3.debug = true;

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 bSide1 = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	 World.add(world, ground);
	 
	 ground = Bodies.rectangle(300, 620, 20, 200 , {isStatic:true} );
	 World.add(world, ground);

	 ground = Bodies.rectangle(500, 620, 20, 200 , {isStatic:true} );
	 World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 keyPressed(); 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.7,isStatic:false})
	World.add(world,packageBody);
    
  }
}



