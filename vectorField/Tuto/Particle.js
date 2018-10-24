class Particle {
    constructor(x, y) {
      this.pos = new Vector(x, y);
      this.vel = new Vector(Math.random()*2-1, Math.random()*2-1);
      this.acc = new Vector(0, 0);
      this.size = 8;
    }
    
    move(v) {
      if(v) {
        this.acc = this.acc.addTo(v);
      }
      this.vel.addTo(this.acc);
      this.pos.addTo(this.vel);
      if(this.vel.getLength() > 2) {
        this.vel.setLength(2);
      }
      this.acc.setLength(0);
    }
    
    draw() {
        ctx.save()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.beginPath()
        ctx.strokeStyle = `rgb(${w/100 * 255}, 255, 255)`
        ctx.arc(0, 0, 5, Math.PI *2, true);
        ctx.stroke()
        ctx.closePath()
    }
    
    wrap() {
    //   if(this.pos.x > w) {
    //     this.pos.x = 0;
    //   } else if(this.pos.x < -this.size) {
    //     this.pos.x = w - 1;
    //   }
    //   if(this.pos.y > h) {
    //     this.pos.y = 0;
    //   } else if(this.pos.y < -this.size) {
    //     this.pos.y = h - 1;
    //   }
    }
  }