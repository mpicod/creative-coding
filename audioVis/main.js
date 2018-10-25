const canvas = document.querySelector('#myCanvas')  
const ctx    = canvas.getContext('2d')



let size = 20;
let columns, rows;
let field = [];
let noiseT = 0;
let petales = [];

let mouseX, mouseY;
let clickX, clickY;
let isClicked = false;

const simplex = new SimplexNoise()

let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight
let O = new Vector(canvas.width/2, canvas.height/2)
let numberOfParticles = canvas.width * canvas.height / 100000;

let now = Date.now()
let lastTime = now
const deltaTime = 16
const expectedFPS = 1000 / 60 // 60 fps


function draw(){
    requestAnimationFrame(draw)
    noiseT += 0.005
    clear()
    drawPetales()
}

function init(){
    columns = Math.round(w / size) + 1;
    rows = Math.round(h / size) + 1;
    initPetales()
}

function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
}


function drawPetales(){
    let v = 100000;
    let closest;
    petales.forEach(p => {
            p._rotate()
            p._move()
            p._draw()
            // P._wrap()
    });
}
function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
}
function initPetales(){
    for (let i = 0; i < numberOfParticles; i++) {
        petales.push(new Petale(Math.random()*Math.PI*2))
        petales.push(new Petale2(Math.random()*Math.PI*2))
        petales.push(new Petale3(Math.random()*Math.PI*2))
        
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