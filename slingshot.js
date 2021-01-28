class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }
    reload(lbody){
        this.sling.bodyA = lbody
        Matter.Body.setPosition(this.sling.bodyA,{x:120,y:430})
    }
    lengthPlus(){
        this.sling.length = this.sling.length+0.5
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    fly(){
        this.sling.bodyA = null;
    }
}