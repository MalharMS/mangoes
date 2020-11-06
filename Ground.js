class Ground{
    constructor(x, y, width, height){
        var options={
            isStatic:true
            // density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
        // this.image = loadImage("mango.png");
}
display()
{
    var pos=this.body.position
    fill("green")
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
}