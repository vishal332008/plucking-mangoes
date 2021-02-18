
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(240,410,50,50);

	sling1 = new Slingshot(stoneObj.body,{x:240 , y:410});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  groundObject.display();
  stoneObj.display();

  if(stoneObj.body.position.x >1050 && stoneObj.body.position.y >75 && stoneObj.body.position.y <160){
	  Body.setStatic(mango1.body , false);
  }

  console.log(mouseX , mouseY);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body ,{x:mouseX , y:mouseY});
}

function mouseReleased(){
    sling1.fly();
}

//function detectCollision(stone , mango){
	//mangoBodyPosition = mango.body.position
	//stoneBodyPosition = stone.body.position

	//var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)

	//if(distance<=mango.radius+stone.width/2){
	//	Body.setStatic(mango.body,false);
	//}

//}
