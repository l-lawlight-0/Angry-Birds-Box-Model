const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,650);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,600,70,70);
    box2 = new Box(900,600,70,70);
    log1 = new Log(1000,525,270,PI/2);
    pig1 = new Pig(1000,600);
    ground = new Ground(600,height,1200,20)

    box3 = new Box(1095,500,70,70);
    box4 = new Box(900,500,70,70);
    log2 = new Log(1000,450,270,PI/2);
    pig2 = new Pig(1000,480);

    box5 = new Box(1000,430,70,70);
    log3 = new Log(970,400,150,PI/7);
    log4 = new Log(1070,400,150,-PI/7);
    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    log1.display();
    pig1.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}