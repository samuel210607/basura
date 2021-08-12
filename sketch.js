
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var engine;
var dustbinObj, groundObject, basura;

var lineaI;

var state = 1;
var x=1;
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	basura = new bola (300, 300, 30);
	lineaI = new invisible (1200, 645);
	Engine.run(engine);

	console.log (basura.x);
}
function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  dustbinObj.display();
  basura.display ();
  lineaI.display ();
  console.log (basura.y);

 if (basura.body.position.x < 1100  ){
	if (keyDown ("DOWN_ARROW")){
		Matter.Body.applyForce (basura.body,basura.body.position, {x:10, y:-10});	
	
	}
 }
 else {

 }
  

console.log (basura.body.position.x);
console.log (basura.body.position.y);

}