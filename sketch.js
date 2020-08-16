const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//create engine, world and ovject
var engine, world;
var ground;
var ball;

function setup()
{
    //create canvas
    var canvas = createCanvas(400,400);
    //create your engine and world
    engine = Engine.create();
    world = engine.world;
    //make the ground static
    var ground_options ={
        isStatic: true
    }
    //give properties to the ground and add it to world
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
    
    //allow the ball to bounce 
    var ball_options= 
    {
    restitution: 1
    }
    //give properties to the ball and add it to world
    ball=Bodies.circle (200,100,20, ball_options);
    World.add(world, ball);
}

function draw()
{
    //give background color
    background(0);
    //update engine
    Engine.update(engine);
    //draw from the center of the page
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}