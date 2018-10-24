const canvas = document.querySelector('#myCanvas')  
const ctx    = canvas.getContext('2d')



let size = 20;
let columns, rows;
let field = [];
let noiseT = 0;
let particles;

let mouseX, mouseY;
let clickX, clickY;
let isClicked = false;

const simplex = new SimplexNoise()
let value2d;

let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight
let numberOfParticles = canvas.width * canvas.height / 1000;

let now = Date.now()
let lastTime = now
const deltaTime = 16
const expectedFPS = 1000 / 60 // 60 fps

function initParticles() {
    particles = [];
    let numberOfParticles = w * h / 1500;
    for(let i = 0; i < numberOfParticles; i++) {
      let particle = new Particle(Math.random() * canvas.width, Math.random() * canvas.height);
      particles.push(particle);
    }
  }


function draw(){
    requestAnimationFrame(draw)
    noiseT += 0.004;
    calculateField()
    clear()
    drawField()   
    drawParticles() 
}

function init(){
    columns = Math.floor(w / size) + 1;
    rows = Math.floor(h / size) + 1;
    initParticles()
    initField()
}


function drawParticles() {
    particles.forEach(p => {
      let pos = p.pos.div(size);
      let v;
      if(pos.x >= 0 && pos.x < columns && pos.y >= 0 && pos.y < rows) {
        v = { x: field[Math.floor(pos.x)][Math.floor(pos.y)][0], y: field[Math.floor(pos.x)][Math.floor(pos.y)][1]};
      }
      p.move(v);
      p.wrap();
      p.draw();
    });
  }

function clear(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);
}
function initField(){
    field = new Array(columns);
  for(let x = 0; x < columns; x++) {
    field[x] = new Array(columns);
    for(let y = 0; y < rows; y++) {
      field[x][y] = [0, 0];

    } // gros tableau avec les colonnes et les rangs,
  }
}
function calculateField(){
    for(let x = 0; x < columns; x++) {
        for(let y = 0; y < rows; y++) {
          let angle = simplex.noise3D(x/50, y/50, noiseT) * Math.PI * 2;
          let length = simplex.noise3D(x/100 + 40000, y/100 + 40000, noiseT);
          // comme on appelle la fonction noise 2 fois, on ne veut pas les même valeurs, donc on utilise un facteur différent pour X et Y, et on met un offset génat pour se 'décaler' dans le bruit
            field[x][y][0]= angle;
            field[x][y][1]= length;
              // pourquoi in noise3D alors qu'on est dand un plan 2D ? parce qu'on a besoin d'une 3ème dimension, non pas un Z de profondeur, mais une dimension temporelle pour animer le champs

        }
    }
}
function drawField(){
    for (let x = 0; x < columns; x++) { // pour chaque colonne 
        for (let y = 0; y < rows; y++) { // on fait un vector en X
            let angle = field[x][y][0];
            let length = field[x][y][1];
            ctx.save();
            ctx.translate(x*size, y*size);
            ctx.rotate(angle);
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, size * length);
            ctx.stroke();
            ctx.restore();
        }
        
    }
}


init()
draw()