class Chain{
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 1
        }
       this.chain= Constraint.create(options);        
       this.pointB= pointB 
       World.add(world, this.chain);
        
      }
      attach(bodyA){
      this.chain.bodyA=bodyA
      }

      fly(){
        this.chain.bodyA = null;
    }
      display(){
       if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        strokeWeight(1.5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
    }