class bola {
constructor  (x, y, r) {

    var options = {
        isStatic: false,
        restitution: 0.3, 
        friction: 5, 
        density: 1.0
    }
    this.image = loadImage ("paper.png");

    this.body=Bodies.circle(x,  y, r,  options);
    World.add (world, this.body);
}
display (){
    var ppos = this.body.position; 
    push();
    translate(ppos.x, ppos.y);
    imageMode (CENTER);
    image(this.image, 0, 0, 90, 90);
    pop ();
}
};