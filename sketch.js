var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
 
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
ground = new Ground(400,390,800,40);


}

function draw() {
  background(0); 
  
  

  


ground.display();

  plinko1.display();
}


for(var k = 0; k <= innerWidth, k = k+80) {
  divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
    }