class Poly{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.2,
            'friction':1.0,
            'density':2.0
        }
        this.body = Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Polygon.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width+20, this.height+20);
        pop();
      }
  }