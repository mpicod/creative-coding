// class Petale {
//     constructor(angle) {
//       this.pos = new Vector(0, 0, 0);
//       this.vel = new Vector(Math.random(), Math.random(), 0);
//       this.acc = new Vector(0, 0, 0);
//       this.size = 20;
//       this.angle = angle;
//       this.dist = 200;
//     }
    
//     _move() {
//       this.pos = this.pos.multiply(11)
//     }

//     _rotate(){
//       this.angle += 0.001
//     }
    
//     _draw() {
//     //   for (let i = 0; i < floods.length; i++) {
  
//     //     const step = i / length;
//     //     const angle = step * Math.PI * 2 - Math.PI/2;
//     //     let power = floods[i].Numbers;
//     //     let width = 5;
        
//     //     let x1 = (canvas.width/2 + Math.cos(angle)*(circleDiameter));
//     //     let y1 = (canvas.height/2 + Math.sin(angle)*(circleDiameter));
//     //     let x2 = x1 + power * Math.cos(angle)*2;
//     //     let y2 = y1 + power * Math.sin(angle)*2;
        
//     //     const line = new Line(x1, y1, x2, y2, width, i);
//     //     LinesArray.pusize(line)
//     // }
//     let modulo =0;
//     modulo = (this.angle % Math.PI*2);
//         ctx.save()
//         ctx.translate(O.x + Math.cos(this.angle) * this.dist, O.y + Math.sin(this.angle)*this.dist)
//         ctx.rotate(this.angle)
//         ctx.beginPath()
//         ctx.fillStyle = `rgb(255, ${255 -51 * modulo/Math.PI*2}, ${51 * modulo/Math.PI*2})`
//         ctx.moveTo( -this.size/2, this.size/2 )
//         ctx.lineTo( 0, -this.size/2 )
//         ctx.lineTo( this.size/2, this.size/2 )
//         ctx.lineTo( -this.size/2, this.size/2 )
//         ctx.fill()
//         ctx.closePath()
//         ctx.restore()
//     }
//   }

  class Petale {
    constructor(angle, dist) {
      this.pos = new Vector(0, 0, 0);
      this.vel = new Vector(Math.random(), Math.random(), 0);
      this.acc = new Vector(0, 0, 0);
      this.size = dist * 0.5 /400;
      this.scale = this.size;
      this.angle = angle;
      this.dist = dist;
    }
    
    _move() {
      this.pos = this.pos.multiply(1.001)
    }

    _rotate(){
      if (this.dist == 120) {
        this.angle += 0.002
      }else{
        this.angle -= 0.005
      }
    }

    _scale(i, frequencyData){
      this.scale = this.size*frequencyData[i]/255*10
    }
    
    _draw(i, frequencyData, waveData) {
      let meshDist =  (frequencyData[i+this.dist*2])
      // console.log(meshDist)
        ctx.save()
        ctx.translate(O.x + Math.cos(this.angle) * this.dist + Math.cos(meshDist)*5, O.y + Math.sin(this.angle)*this.dist+ Math.sin(meshDist)*5)
        ctx.rotate(this.angle+Math.PI/2)
        ctx.scale(1 + this.scale, 1 + this.scale)
        ctx.beginPath()
      // Create gradient
      let grd = ctx.createLinearGradient(70.000, 300.000, 230.000, 0.000);
      if (this.dist <= 100) {
      // Add colors
      grd.addColorStop(0.000, 'rgba(81, 168, 255, 1.000)');
      grd.addColorStop(0.201, 'rgba(117, 183, 255, 1.000)');
      grd.addColorStop(0.705, 'rgba(168, 211, 255, 1.000)');

      }else if (this.dist <= 120) {
        grd.addColorStop(0.050, 'rgba(181, 218, 255, 1.000)');
        grd.addColorStop(0.817, 'rgba(193, 222, 255, 0.800)');
        grd.addColorStop(1.000, 'rgba(211, 233, 255, 0.600)');
      }else{
      
        // Add colors
        grd.addColorStop(0.050, 'rgba(196, 225, 255, 1.000)');
        grd.addColorStop(1.000, 'rgba(214, 233, 255, 0.700)');
        grd.addColorStop(1.000, 'rgba(229, 242, 255, 0.500)');
      }
      
        ctx.strokeStyle = `rgb(255, ${255 -51 * Math.PI/this.angle*Math.PI}, ${51 * Math.PI/this.angle*Math.PI})`
        ctx.strokeStyle ='white'
        ctx.lineWidth = 5
        ctx.fillStyle = grd;

        ctx.moveTo(- 162*this.size, 4*this.size);
        ctx.bezierCurveTo(- 159*this.size,  - 137*this.size, 7*this.size ,  - 228*this.size,  - 0*this.size,  - 247*this.size);
        ctx.bezierCurveTo( - 3*this.size,  - 227*this.size, 164*this.size ,  - 134*this.size, 165*this.size , 4*this.size );
        ctx.bezierCurveTo(169*this.size , 41*this.size , 140*this.size , 168*this.size , 4*this.size , 206*this.size );
        ctx.bezierCurveTo( - 141*this.size, 168*this.size ,  - 160*this.size, 26*this.size ,  - 161*this.size, 4*this.size );
        // ctx.moveTo(- 162*size, 4*size);
        // ctx.bezierCurveTo(- 159*size,  - 137*size, 7*size ,  - 228*size,  - 0*size,  - 247*size);
        // ctx.bezierCurveTo( - 3*size,  - 227*size, 164*size ,  - 134*size, 165*size , 4*size );
        // ctx.bezierCurveTo(169*size , 41*size , 140*size , 168*size , 4*size , 206*size );
        // ctx.bezierCurveTo( - 141*size, 168*size ,  - 160*size, 26*size ,  - 161*size, 4*size );
        // if (fi==true){
        //   ctx.fill();
        // }
        // if (st==true){
        //   ctx.stroke();
        // }
        // ctx.moveTo(142 , 222 );
        // ctx.bezierCurveTo(132 , 233 , 204 , 171 , 196 , 159 );
        // ctx.bezierCurveTo(188 , 147 , 256 , 248 , 248 , 235 );
        // ctx.bezierCurveTo(240 , 222 , 205 , 334 , 197 , 321 );
        // ctx.bezierCurveTo(240 , 222 , 205 , 334 , 197 , 321 );
        ctx.fill();
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