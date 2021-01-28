class Ground{
    constructor(x, y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(0);
        fill(128,78,45)
        rect(0,0,this.width,this.height)
        pop();
      }
}