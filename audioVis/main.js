const canvas = document.querySelector('#myCanvas')  
const ctx    = canvas.getContext('2d')



let size = 20;
let columns, rows;
let field = [];
let noiseT = 0;
let petales = [];
let waves = [];
let noisySpotsNbr = 100;
let noisySpot = [];
let globalRed = 0

let mouseX, mouseY;
let clickX, clickY;
let isClicked = false;

const simplex = new SimplexNoise()

let w = canvas.width = window.innerWidth
let h = canvas.height = window.innerHeight
let O = new Vector(canvas.width/2, canvas.height/2)
let numberOfParticles = 20;

let now = Date.now()
let lastTime = now
let deltaTime = 16
const expectedFPS = 1000 / 60 // 60 fps


function draw(){
    now = Date.now()
    deltaTime =  now - lastTime
    lastTime = now
    
    requestAnimationFrame(draw)
    getFrequence()
    getWave()
    noiseT += 0.005
    clear()
    drawNoisySpot()
    drawWave()
    drawPetales(frequencyData, waveData)
    // console.log(waveData)
}

function getFrequence(){
    analyser.getByteFrequencyData(frequencyData)
    return frequencyData
}

function getWave(){
    analyser.getByteTimeDomainData(waveData)
    return waveData
}

function initShadow(){
    waves.push(new Wave())
}
function drawWave(){
    waves.forEach(el => {
        el._findKick(waveData)
        if (el.bounce == true) {
            el.radius = easeOutBounce(1, el.radius, 100, 5, 1.70158)
            noisySpot = []
            console.log('BOUNCE')
        }
        if (el.radius > 2000) {
            el.bounce = false
            el.radius = 75
        }
        el._draw()
    });
}
function init(){
    columns = Math.round(w / size) + 1;
    rows = Math.round(h / size) + 1;
    initNoisySpot()
    initShadow()
    initPetales()
}
function initNoisySpot(){
    for (let i = 0; i < noisySpotsNbr; i++) {
       noisySpot.push(new NoisySpot())
       noisySpot[i]._draw()
    }
}

function drawNoisySpot(){
    let tryDraw = Math.random();
    if (tryDraw > 0.9) {
        noisySpot.push(new NoisySpot())
    }
    noisySpot.forEach(el => {
        el._draw()
    });
}
function clear(){

    ctx.clearRect(0, 0, w, h)
    // ctx.fillRect();
}


function drawPetales(frequencyData, waveData){
    petales.forEach((p,i) => {
            // p.pos.x = easeOutBounce(1, p.pos.x, 100, 5, 1.70158)
            // p.pos.y = easeOutBounce(1, p.pos.y, 100, 5, 1.70158)
            p._rotate()
            p._scale(i, frequencyData)
            p._move(i, frequencyData)
            p._draw(i, frequencyData)
    });
}
function clear(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
}
function initPetales(){
    for (let i = 0; i < numberOfParticles; i++) {
        petales.push(new Petale(i*Math.PI*2/numberOfParticles, 140))

    }
    for (let i = 0; i < numberOfParticles; i++) {
        petales.push(new Petale(i*Math.PI*2/numberOfParticles+i*Math.PI*2/numberOfParticles, 120))

    }
    for (let i = 0; i < numberOfParticles; i++) {
        petales.push(new Petale(i*Math.PI*2/numberOfParticles, 100))

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