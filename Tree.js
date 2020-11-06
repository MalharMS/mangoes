class Tree{
    constructor(x, y,width, height){
        var options={ 
            isStatic:true
            // density:1.2
    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height=height;
        this.width=width;
        World.add(world, this.body);
        this.image = loadImage("image/tree.png");
    }   
display()
{
    var pos=this.body.position
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.width, this.height);
}
}