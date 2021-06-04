class Crumpledball{
	constructor(x,y,r)
	{
		
		
		var options = {

			isStatic:false,
            restitution: 0.5,
            friction: 0,
            
			density:1.2
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image=loadImage("paper.png")
        World.add(world, this.body);
		


	}
	display()
	{
push()
translate(this.body.position.x,this.body.position.y)
imageMode(CENTER)		
image(this.image,0,0,this.r*1.8,this.r*2);
pop();	
	
	
	}

}

