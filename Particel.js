class Particel {
    constructor(x,y,r) 
    var options =  {
        'restitution':0.8 
    } 
    this.r=r
    this.body=Bodies.circel(x,y.this.r,options)
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body);

}
display() {
var pos =  this.body.position
var angel= this.body.angel
Push();
translate((pos.x, pos.y)
rotate(angel);
fill(this.color)
noStroke();
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r)
pop();
}