class Link {
    constructor(bodyA,bodyB){
        var lastlink = bodyA.bodyA.bodies.length-2;
        this.link=Constraint.create({
            bodyA:bodyA.bodyA.bodies[lastlink],
            pointA:{x:0,y:0},
            bodyB:bodyB.bodyA,
            pointB:{x:0,y:0},
            length:10,
            stiffness:0.8
        });
        World.add(world,this.link);
    }
}