const canvas = document.querySelector('#myCanvas')  
const ctx    = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight
const size = canvas.width;
let rectNbr = 2000;
let rectangles = []

class Rect{
    constructor(i){
        this.width = Math.random()*50;
        this.height = Math.random()*50;
        this.x = (canvas.width / Math.sqrt(rectNbr)) * canvas.width%i*canvas.width/i;
        this.y = (canvas.height / Math.sqrt(rectNbr)) * canvas.height%i*canvas.height/i;
        this.color = 'rgb( 255, ' + (255 - 51 * i/rectNbr*5) + ',' + (51 * i/rectNbr*5) +')';
        this.velocity = Math.random()*10;
        this.rotation = Math.random()*i
    }

    _draw(i){
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation)
        ctx.fillRect(0, 0, this.width, this.height);
        ctx.restore();
    }
}

for (let i = 0; i < rectNbr; i++) {
    rectangles.push(new Rect(i))        
}

rectangles.forEach((rect, i) => {
    rect._draw(i)

});

function update(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    requestAnimationFrame(update)

    rectangles.forEach((el, i) => {
        if (el.y + el.velocity > canvas.height || el.y + el.velocity < 0) {
            el.velocity = -el.velocity*Math.random()*2;
          }
          if (el.x + el.velocity > canvas.width || el.x + el.velocity < 0) {
            el.velocity = -el.velocity*Math.random()*2;
          }
        el.x += el.velocity;
        el.y += el.velocity; 
        el._draw(i)
    });
}