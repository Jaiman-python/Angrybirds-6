class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke_image = loadImage("sprites/smoke.png"); 
    this.traj = [];
  }

  display() {
    if(this.body.position.x>200 && this.body.velocity.x>6){
      var position = [this.body.position.x, this.body.position.y];
    this.traj.push(position);
    }

    for(var i = 0;i<this.traj.length-1 ;i++){
      image(this.smoke_image, this.traj[i][0], this.traj[i][1]);
    }
 
    super.display();
  }
}
