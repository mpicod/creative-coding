const canvas = document.querySelector('#myCanvas')  
const ctx    = canvas.getContext('2d')



let size = 20;
let columns, rows;
let field = [];
let noiseT = 0;
let particles = [];

let mouseX, mouseY;
let clickX, clickY;
let isClicked = false;

const simplex = new SimplexNoise()

let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight
let numberOfParticles = canvas.width * canvas.height / 10000;

let now = Date.now()
let lastTime = now
const deltaTime = 16
const expectedFPS = 1000 / 60 // 60 fps

function initParticles() {
}


function draw(){
    requestAnimationFrame(draw)
    noiseT += 0.005
    clear()
    calculateField()
    drawField()
    drawParticles()
}

function init(){
    columns = Math.round(w / size) + 1;
    rows = Math.round(h / size) + 1;
    initField()
    initParticles()
}

function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
}
function initField(){
    for(let x = 0; x < columns; x++) {
        for(let y = 0; y < rows; y++) {
          let v = new Vector(x*size, y*size);
          field.push(v);
        }
      }
      calculateField()
}
function calculateField(){
    field.forEach(el => {
        let angle = simplex.noise3D(el.x/20/size, el.y/20/size, noiseT) * Math.PI * 2;
        let length = simplex.noise3D(el.x/40/size + 40000, el.y/40/size + 40000, noiseT) * 0.5;
        // avant, x était la poition dans le rang de l'élément
        el.length = length;
        el.angle = angle;
    });
}
function drawField(){
    field.forEach(el => {
        let x1 = el.x;
        let y1 = el.y;
        ctx.save()
        
        ctx.translate(x1, y1)
        ctx.rotate(el.angle)
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, size * el.length);
        ctx.stroke();
        ctx.closePath()
        ctx.restore()
    });
}

function drawParticles(){
    let v = 100000;
    let closest;
    particles.forEach(p => {
        field.forEach(el => {
            let dist = checkDist(p, el)
            if(dist < v){
                v = dist
                closest = el
            }
        });
            
            p._rotate(closest.angle* Math.PI * 2)
            p._move(closest)
            p._draw()
            p._wrap()
    });
}
function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
}
function initParticles(){
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(Math.random()*canvas.width, Math.random()*canvas.height))
    }
  }

function checkDist(el, target){
    let a = el.pos.x - target.x;
    let b = el.pos.y - target.y;
    let c = Math.sqrt( a*a + b*b );
    return c
}


init()
draw()