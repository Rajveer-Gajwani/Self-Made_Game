class Player{

    constructor(x,y){
        var options = {
            isStatic : false
            
        }
        this.body = Bodies.rectangle(x,y,15,15,options);
        this.width = 15;
        this.height = 15;
        World.add(world,this.body);
    }
    display(){
      
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("yellow");
        rect(0,0,15,15);
        pop();
    }
}