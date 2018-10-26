class Wave{
    constructor(){
        this.radius = 75;
        this.bounce = false;
        this.blur = 80
        this.red = 81
    }
    _draw(){
        ctx.save()
        ctx.translate(O.x, O.y)
        ctx.shadowColor = `rgba(${this.red + globalRed}, 168, 255, 1.000)`;
        ctx.shadowBlur = this.blur;
        ctx.beginPath()
        ctx.arc(0, 0, this.radius, 0, Math.PI*2, true)
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
    _findKick(waveData){
        waveData.forEach(el => {
            if (el > 200) {
                this.bounce = true
            }
        });
    }
}