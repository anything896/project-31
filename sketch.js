
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground,engine, world;
var particel[];
var plinko[];
var diversion[];
var diversionhigh=300
function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground (220, 460, 800, 20);
  for(var k=0;k<innerWidth;k=k+80){
  diversion.push(new Diversion(k,height,diversionhigh/2,10,diversionhigh)
  }
for(var j=40;j<width;j=j+50)
{
  plinko.push(new plinko(j,75))
}
}
for(var j=15;j<width-10;j=j+50)
{
  plinko.push(new plinko(j,175))
}
for(var j=0;j<particel.lenght;j++){
  particel[j].display
}
for(var k=0;k<particel.lenght;k++){
  particel[k].display
} 
function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  drawSprites();
}