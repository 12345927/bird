const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,pig1,log1,box3,box4,pig2,log2,box5,log3,log4,bird;
var grounds;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(835,300,50,50);
    box2 = new Box(715,300,50,50);
    grounds = new ground(600,390,1200,20);
    pig1 = new Pig(775,300);
    log1 = new log(775,225,180,PI/2);
    box3 = new Box(835,175,50,50);
    box4 = new Box(715,175,50,50);
    pig2 = new Pig(775,175);
    log2 = new log(775,125,180,PI/2);
    box5 = new Box(775,75,50,50);
    log3 = new log(820,40,100,-PI/7);
    log4 = new log(730,40,100,PI/7);
    bird = new Bird(200,100);
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    grounds.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}