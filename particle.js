class Particle {
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
            
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.color = color(random(0,255), random(0,255), random(0,255))
        this.radius = radius;
        
        World.add(world,this.body);
        

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER); 
        ellipse(pos.x, pos.y, this.radius,this.radius);
        pop();
    }
}