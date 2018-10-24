class Particle {
    constructor(x, y) {
      this.pos = new Vector(x, y, 0);
      this.vel = new Vector(Math.random(), Math.random(), 0);
      this.acc = new Vector(0, 0, 0);
      this.size = 20;
      this.angle = 0;
    }
    
    _move(v) {
      // let V = new Vector(v.x, v.y, 0);
      // if(V) {
      //   // console.log(v instanceof Vector)
      //   this.acc = this.acc.add(v);
      //   // this.pos.add(v);
      // }
      // this.vel.add(this.acc);
      // this.pos.add(v)
      this.pos.x += (v.x- this.pos.x)*this.vel.x/100
      this.pos.y += (v.y-this.pos.y)*this.vel.y/100
      // if(this.vel.getLength() > 2) {
      //   this.vel.setLength(2);
      // }
      this.acc = new Vector(0, 0);
      // debugger
    }

    _rotate(angle){
      this.angle = angle
    }
    _wrap() {
      if(this.pos.x > w) {
        this.pos.x = 0;
      } else if(this.pos.x < -this.size) {
        this.pos.x = w - 1;
      }
      if(this.pos.y > h) {
        this.pos.y = 0;
      } else if(this.pos.y < -this.size) {
        this.pos.y = h - 1;
      }
    }
    
    _draw() {
        ctx.save()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.angle)
        ctx.beginPath()
        ctx.fillStyle = `rgb(255, ${255 -51 * canvas.width/this.pos.x}, ${51 * canvas.height/this.pos.x})`
        ctx.moveTo( -this.size/2, this.size/2 )
        ctx.lineTo( 0, -this.size/2 )
        ctx.lineTo( this.size/2, this.size/2 )
        ctx.lineTo( -this.size/2, this.size/2 )
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
  }