const canvas = document.querySelector('#myCanvas')  
const ctx    = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight
const size = canvas.width;
let particleNbr = 5;
let particles = []

class Particle{
    constructor(i){
        this.width = Math.random()*50;
        this.height = Math.random()*50;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.color = 'white';
        this.vy = (Math.random()*2-1)*5;
        this.vx = (Math.random()*2-1)*5;
        this.rotation = Math.random()*i

        this._draw()

    }

    _draw(i){
        ctx.beginPath()
        ctx.arc(this.x, this.y, 0, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color
        ctx.closePath()
        ctx.fill()

    }
    _line(target){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = this.color
        ctx.stroke();
    }
}

for (let i = 0; i < particleNbr; i++) {
    particles.push(new Particle(i))        
}

// particles.forEach((rect, i) => {
//     Particle._draw(i)

// });

function update(){
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    requestAnimationFrame(update)

    particles.forEach(el => {
        particles.forEach(el2 => {
            let dist = checkDist(el, el2)
            if (dist < 300) {
                el._line(el2)
            }
        });
        
    });

    particles.forEach((el, i) => {
        if (el.y + el.vy > canvas.height ) {
            el.y = 0;
            // el.vy = -el.vy;
          }
          if (el.x + el.vx > canvas.width) {
              el.x = 0;
            // el.vx = -el.vx;
          }
          if (el.y + el.vy < 0) {
              el.y = canvas.height
          }
          if (el.x + el.vx < 0) {
              el.x = canvas.width
          }
        //   if (el.y + el.vy < canvas.height || el.y + el.vy > 0) {
        //     el.y = canvas.height;
        //     el.vy = -el.vy;
        //   }
        //   if (el.x + el.vx < canvas.width || el.x + el.vx > 0) {
        //       el.x = canvas.width;
        //     el.vx = -el.vx;
        //   }
        el.color = `rgb(255, ${255 -51 * canvas.width/el.x}, ${51 * canvas.height/el.x})`
        el.x += el.vx;
        el.y += el.vy; 
        el._draw(i)
    });
}

function checkDist(el, target){
    let a = el.x - target.x;
    let b = el.y - target.y;
    let c = Math.sqrt( a*a + b*b );

    return c
}

update()


document.addEventListener('click', function(){
    for (let i = 0; i < 10; i++) {
        particles.push(new Particle(i))
        
    }
    
})