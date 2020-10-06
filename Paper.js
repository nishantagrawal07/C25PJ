class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.5
      }
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image , pos.x , pos.y - 20 , this.radius , this.radius);
      pop();
    }
  }