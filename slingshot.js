class Slingshot{
    constructor(a,b) {
    var options = {
       bodyA : a,
       pointB : b,
       stifness : 0.01,
       length : 10
    }
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }

    display(){
       if(this.sling.bodyA != null){
       strokeWeight(1);
       line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
       }
    }

    fly(){
       this.sling.bodyA = null;
    }
}