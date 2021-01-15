class Bob{
    constructor(x, y, radius){
        var options ={
            isStatic:true,
            restitution:0.1,
            friction:0.5,
            density:3.2
        }
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.radius = radius;
    
        World.add(world, this.body);
    }
        display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("aqua");
        ellipse(0,0,this.radius);
        pop();
        }

    }