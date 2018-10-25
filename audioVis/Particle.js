class Petale {
    constructor(angle) {
      this.pos = new Vector(0, 0, 0);
      this.vel = new Vector(Math.random(), Math.random(), 0);
      this.acc = new Vector(0, 0, 0);
      this.size = 20;
      this.angle = angle;
      this.dist = 200;
    }
    
    _move() {
      this.pos = this.pos.multiply(11)
    }

    _rotate(){
      this.angle += 0.001
    }
    
    _draw() {
    //   for (let i = 0; i < floods.length; i++) {
  
    //     const step = i / length;
    //     const angle = step * Math.PI * 2 - Math.PI/2;
    //     let power = floods[i].Numbers;
    //     let width = 5;
        
    //     let x1 = (canvas.width/2 + Math.cos(angle)*(circleDiameter));
    //     let y1 = (canvas.height/2 + Math.sin(angle)*(circleDiameter));
    //     let x2 = x1 + power * Math.cos(angle)*2;
    //     let y2 = y1 + power * Math.sin(angle)*2;
        
    //     const line = new Line(x1, y1, x2, y2, width, i);
    //     LinesArray.push(line)
    // }
    let modulo =0;
    modulo = (this.angle % Math.PI*2);
        ctx.save()
        ctx.translate(O.x + Math.cos(this.angle) * this.dist, O.y + Math.sin(this.angle)*this.dist)
        ctx.rotate(this.angle)
        ctx.beginPath()
        ctx.fillStyle = `rgb(255, ${255 -51 * modulo/Math.PI*2}, ${51 * modulo/Math.PI*2})`
        ctx.moveTo( -this.size/2, this.size/2 )
        ctx.lineTo( 0, -this.size/2 )
        ctx.lineTo( this.size/2, this.size/2 )
        ctx.lineTo( -this.size/2, this.size/2 )
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
  }

  class Petale2 {
    constructor(angle) {
      this.pos = new Vector(0, 0, 0);
      this.vel = new Vector(Math.random(), Math.random(), 0);
      this.acc = new Vector(0, 0, 0);
      this.size = 80;
      this.angle = angle;
      this.dist = 500;
    }
    
    _move() {
      this.pos = this.pos.multiply(1.001)
    }

    _rotate(){
      this.angle -= 0.002    }
    
    _draw() {
    //   for (let i = 0; i < floods.length; i++) {
  
    //     const step = i / length;
    //     const angle = step * Math.PI * 2 - Math.PI/2;
    //     let power = floods[i].Numbers;
    //     let width = 5;
        
    //     let x1 = (canvas.width/2 + Math.cos(angle)*(circleDiameter));
    //     let y1 = (canvas.height/2 + Math.sin(angle)*(circleDiameter));
    //     let x2 = x1 + power * Math.cos(angle)*2;
    //     let y2 = y1 + power * Math.sin(angle)*2;
        
    //     const line = new Line(x1, y1, x2, y2, width, i);
    //     LinesArray.push(line)
    // }

        ctx.save()
        ctx.translate(O.x + Math.cos(this.angle) * this.dist, O.y + Math.sin(this.angle)*this.dist)
        ctx.rotate(this.angle+Math.PI/2)
        ctx.beginPath()
        ctx.strokeStyle = `rgb(255, ${255 -51 * Math.PI/this.angle*Math.PI}, ${51 * Math.PI/this.angle*Math.PI})`
        ctx.lineWidth = 5
        ctx.moveTo(142 , 222 );
        ctx.bezierCurveTo(132 , 233 , 204 , 171 , 196 , 159 );
        ctx.bezierCurveTo(188 , 147 , 256 , 248 , 248 , 235 );
        ctx.bezierCurveTo(240 , 222 , 205 , 334 , 197 , 321 );
        ctx.bezierCurveTo(240 , 222 , 205 , 334 , 197 , 321 );
        ctx.stroke();
        ctx.closePath()
        ctx.restore()
    }
  }

  class Petale3 {
    constructor(angle) {
      this.pos = new Vector(0, 0, 0);
      this.vel = new Vector(Math.random(), Math.random(), 0);
      this.acc = new Vector(0, 0, 0);
      this.size = 40;
      this.angle = angle;
      this.orientation =0;
      this.dist = 300;
    }
    
    _move() {
      this.pos = this.pos.multiply(1.001)
    }

    _rotate(){
      this.angle -= 0.001    }
    
    _draw() {
    //   for (let i = 0; i < floods.length; i++) {
  
    //     const step = i / length;
    //     const angle = step * Math.PI * 2 - Math.PI/2;
    //     let power = floods[i].Numbers;
    //     let width = 5;
        
    //     let x1 = (canvas.width/2 + Math.cos(angle)*(circleDiameter));
    //     let y1 = (canvas.height/2 + Math.sin(angle)*(circleDiameter));
    //     let x2 = x1 + power * Math.cos(angle)*2;
    //     let y2 = y1 + power * Math.sin(angle)*2;
        
    //     const line = new Line(x1, y1, x2, y2, width, i);
    //     LinesArray.push(line)
    // }
    this.pos = new Vector( O.x + Math.cos(this.angle) * this.dist, O.y + Math.sin(this.angle)*this.dist)
    this.orientation = O.angleTo(this.pos)

        ctx.save()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.rotate(this.angle+Math.PI/2)
        ctx.beginPath()
        ctx.fillStyle = `rgb(255, ${255 -251 * Math.PI/this.angle*Math.PI}, ${11 * Math.PI/this.angle*Math.PI})`
        ctx.moveTo( -this.size/2, this.size/2 )
        ctx.lineTo( 0, -this.size/2 )
        ctx.lineTo( this.size/2, this.size/2 )
        ctx.lineTo( -this.size/2, this.size/2 )
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
  }