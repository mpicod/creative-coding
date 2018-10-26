
class NoisySpot{
    constructor(){
        this.pos = {x: Math.random()*canvas.width, y: Math.random()*canvas.height}
        this.radius = Math.random()*50
        this.magnitude = Math.random()
        this.frequency = Math.random()*10
        this.color = `rgba(${Math.random()*255}, ${Math.random()*255},200, 0.1)`
    }
    _draw(){
        ctx.save()
        ctx.translate(this.pos.x, this.pos.y)
        ctx.beginPath();
        ctx.strokeStyle = this.color
        ctx.lineWidth = 2
        // Sample points evenly around the circle
        const samples = Math.floor(4 * this.radius + 20);
        for (let j = 0; j < samples; ++j) {
            const angle = (2 * Math.PI * j) / samples;

            // Figure out the x/y coordinates for the given angle
            const x = Math.cos(angle);
            const y = Math.sin(angle);

            // Randomly deform the radius of the circle at this point
            const deformation = simplex.noise2D(x * this.frequency,
                                              y * this.frequency);
            const radius = this.radius * (1 + this.magnitude * deformation);

            // Extend the circle to this deformed radius
            ctx.lineTo(this.pos.x + radius * x,
                       this.pos.y + radius * y);
        }
        ctx.closePath()
        ctx.stroke();
        ctx.restore()
    }
}

// export function drawDeformedCircle(ctx: CanvasRenderingContext2D,
//                                    circle: {x: number, y: number, radius: number},
//                                    frequency: number,
//                                    magnitude: number,
//                                    seed: number = 0): void {
        
// }