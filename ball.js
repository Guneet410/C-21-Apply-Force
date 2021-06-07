class Ball {
    constructor(x,y,r){
         var  options ={
             restitution : 0.95
         }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius = r
    }

    display(){
        var pos = this.body.position
      //  ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius*2,this.radius*2);
        
    }
}