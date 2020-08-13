class Box{
  constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      console.log(this.body.speed);
      if(this.body.speed<10){
        fill(this.color);
        rect(pos.x,pos.y,this.width,this.height); 
      }
      else{
        push();
        this.visibility = this.visibility-5;
        World.remove(world,this.body);
        tint(255,this.visibility);
      //rect(pos.x,pos.y,this.width,this.height); 
        pop();
      }
      
    }
}