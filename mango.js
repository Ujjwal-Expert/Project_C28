class Mango{
    constructor(x, y,width) {
        var options = {
            'restitution':0.1,
            'friction':3,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.circle(x, y, width/2, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}