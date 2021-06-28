var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var k;
function setup() {
  createCanvas(800, 800);
    engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

     

  
  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j =75; j <=width-10; j=j+50) 

  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 100; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }

  //create 3rd row of plinko objects

  
  //create 4th row of plinko objects


  //create particle objects
  
    
}
 


function draw() {
  background("blue");
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
if(frameCount%1===0){
particle.push(new Particle(random(350, 450), 10) );
}
for(var s=0; s<particle.length; s++){
  particle[s].display();
}

}