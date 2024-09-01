export function Stars(p5) {

    let stars = [];

    class Star {
        constructor() {
            this.x = Math.random() * p5.width
            this.y = Math.random() * p5.height
            this.lifespan = 600 * Math.random()
            this.left = this.lifespan;
            this.color = p5.color(255, 255, 255)
            this.size = 5 * Math.random()
            console.log('nueva estrella');
        }
        draw() {
            this.color.setAlpha(255 * (this.left / this.lifespan))
            p5.textSize(this.size)
            p5.fill(this.color);
            p5.noStroke()
            p5.ellipse(this.x, this.y, this.size, this.size)
            this.left -= 1;
        }
    }

    p5.setup = function() {
        let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
        p5.drawingContext.shadowOffsetX = 0;
        p5.drawingContext.shadowOffsetY = 0;
        p5.drawingContext.shadowBlur = 5;
        p5.drawingContext.shadowColor = 'white';
        return canvas;
    }

    p5.windowResized = function() {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }

    p5.draw = function () {
        p5.background('black');
        let starsNew = [];
        if (0 == (p5.frameCount % 10)) {
            let star = new Star;
            stars.push(star);
        }
        for (let i in stars) {
            if (stars[i].left >= 0) {
                stars[i].draw()
                starsNew.push(stars[i]);
            } else {
                stars[i] = null;
            }
        }
        stars = starsNew;
    }

}
