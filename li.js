class invisible  {
    constructor (x, y){
        var options = {
          isStatic: true
        };
        this.body = Bodies.rectangle (x, y, 150, 5, options);
        this.width = 150;
        this.height = 5;
        World.add (world, this.body);
    };
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke('black')
fill ("black");
rectMode (CENTER);
rect (0, 0, this.width, this.height);
pop ();
    };
};
	