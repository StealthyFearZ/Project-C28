class Launcher{
    constructor(bodyA,pointB){
        var prop= {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 20
        }
        this.pointB= pointB;
    this.launcher = Constraint.create(prop);
        World.add(world,this.launcher);  
    }
    display(){
        if(this.launcher.bodyA){
        var ptA=this.launcher.bodyA.position;
        var ptB= this.pointB;
        strokeWeight(4);
        line(ptA.x,ptA.y,ptB.x,ptB.y);
    }
    }
    attach(bodyA){
        this.launcher.bodyA= bodyA;
    }
    fly() {
    this.launcher.bodyA= null;
    }  
}