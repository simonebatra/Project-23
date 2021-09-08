class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
   
  }

  shoot()
{
  var newAngle = player.angle-28;
  newAngle = newAngle*(3.14/180);
  var velocity = p5.vector.fromAngle(newAngle);
  velocity.mult(0.5);
  Matter.Body.setVelocity(this.body, {x: velocity.x*(180/3.14), y:velocity.y*(180/3.14)});
  Matter.Body.setStatic(this.body, false);
}
}
