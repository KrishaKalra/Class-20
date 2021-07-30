
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let kEngine;
let kWorld;
let ball, ground, rock, wall;

function setup()
{
  createCanvas(400,400);
  kEngine = Engine.create()
  kWorld = kEngine.world;

 var ball_options = {
    restitution:0.95,
    frictionAir:0.01
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(kWorld,ball);

 var rock_options = {
   restitution:0.01,
   frictionAir:0.1
 } 
rock = Bodies.circle(300, 20, 40, rock_options);

World.add(kWorld, rock);

var wall_options ={
  isStatic:true
}
wall = Bodies.rectangle(300,200,200,20,wall_options);
  World.add(kWorld,wall);

  var ground_options ={
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(kWorld,ground);


}

function draw() 
{
  background(51);
  Engine.update(kEngine);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y,40);
  ellipse(rock.position.x, rock.position.y,80);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y,400,20);
  rect(wall.position.x, wall.position.y,200,20);
  console.log(ball);
 
}

