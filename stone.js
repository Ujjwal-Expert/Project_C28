class Stone{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.2,
            'friction':2,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width/2, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/stone.png");
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