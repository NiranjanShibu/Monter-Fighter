const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1, box2, box3, box4, box5, box6;
var ball, rope1;
var bg;
var monster;

function preload(){

    bg = loadImage("images/backgroundIMG.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600, 345, 100, 100);
    box2 = new Box(600, 245, 100, 100);
    box3 = new Box(600, 145, 100, 100);
    box4 = new Box(740, 345, 100, 100);
    box5 = new Box(740, 245, 100, 100);
    box6 = new Box(740, 145, 100, 100);
    //box7 = new Box(670, 80, 200, 10);
    monster = new Monster(670, 40, 150, 150);

    ball = new Ball(320, 200, 170);

    rope1 = new Rope(ball.body, {x: 320, y:100});
    ground = new Ground(100,380,1400,6);

}

function draw(){
    background(bg);

    Engine.update(engine);
    ground.display(); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    //box7.display();
    monster.display();

    ball.display();

    rope1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
}

function keyPressed(){
}