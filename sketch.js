var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
   for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 80; k <=160; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 160; k <=240; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 240; k <=320; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 320; k <=400; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 400; k <=480; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 480; k <=560; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 560; k <=640; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 640; k <=720; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 720; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 20; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,100));
  }

  //create 2nd row of plinko objects
  for (var j = -20; j <=width; j=j+35) { 
    plinkos.push(new Plinko(j,150));
  }

  //create 3rd row of plinko objects
  for (var j = 20; j <=width-10; j=j+100) 
  {
    plinkos.push(new Plinko(j,200));
  }

  //create 4th row of plinko objects
  for (var j = -20; j <=width; j=j+100) { 
    plinkos.push(new Plinko(j,250));

  }
  //create 5th row of plinko objects
  for (var j = 20; j <=width; j=j+35) { 
    plinkos.push(new Plinko(j,300));
  }

  //create 6th row of plinko objects
  for (var j = -20; j <=width; j=j+35) { 
    plinkos.push(new Plinko(j,350));
  }

  //create 7th row of plinko objects
  for (var j = -20; j <=width; j=j+70) { 
    plinkos.push(new Plinko(j,400));
  }

  //create 8th row of plinko objects
  for (var j = -50; j <=width; j=j+70) { 
    plinkos.push(new Plinko(j,450));
  }
  
  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 


if(frameCount % 100 === 0){
  particle = new Particle(random(130, 400), 0, 7, random(0, 360));
  particles.push(particle);
}


Engine.update(engine, 15);
for(var i = 0; i < particles.length; i++){
  particles[i].display();
}
}