import React from "react";
import Sketch from "react-p5";


export default function AnimusParticle() {
  let particles = [];
  let waves = [];
  class Particle {
    constructor(p5) {
      this.x = p5.random(0, window.innerWidth);
      this.y = p5.random(0, window.innerHeight);
      this.r = p5.random(1, 8);
      this.xSpeed = p5.random(-2, 2);
      this.ySpeed = p5.random(-1.5, 1.5);
    }
    createParticle(p5) {
      p5.noStroke();
      if (this.r > 4) {
        p5.fill("rgb(255, 239, 0)");
        
      } else {
        p5.fill("rgb(239,0,255)");
        
      }
      p5.circle(this.x, this.y, this.r);
    }
    moveParticle() {
      if (this.x < 0 || this.x > window.innerWidth) this.xSpeed *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
    // joinParticles(particles, p5) {
    //   particles.forEach((element) => {
    //     let dis = p5.dist(this.x, this.y, element.x, element.y);
    //     if (dis < 85) {
    //       p5.stroke("rgb(146, 146, 146)");
    //       p5.line(this.x, this.y, element.x, element.y);
    //     }
    //   });
    // }
  }
  class WaveParticle {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
    setParticles(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
    drawParticles(r, g, b, p5) {
      p5.noStroke();

      if (this.r > 4) {
        p5.fill("rgba(" + r + "," + g + "," + b + ",0.8)");
      } else {
        p5.fill("rgba(" + r + "," + g + "," + b + ",1");
      }
      //fill(color(r,g,b));
      p5.circle(this.x, this.y, this.r);
    }
  }
  class SinWave {
    constructor(wave) {
      this.amplitude = wave.amp;
      this.theta = wave.theta;
      this.xspacing = wave.xspace;
      this.period = wave.period;
      this.dx = (6.2831853 / this.period) * this.xspacing;
      //let size = (window.innerWidth + wave.xspace) / wave.xspace;
      this.particles = [];
    }
    calcWave(p5) {
      this.theta += 0.05;
      let x = this.theta;
      for (
        let a = 0;
        a < (window.innerWidth + this.xspacing) / this.xspacing;
        a++
      ) {
        let yValue = p5.sin(x) * this.amplitude;
        if (this.particles[a] === undefined || this.particles[a] === null)
          this.particles.push(
            new WaveParticle(
              a * this.xspacing,
              450 / 2 + yValue,
              p5.random(1, 8)
            )
          );
        else
          this.particles[a].setParticles(
            a * this.xspacing,
            450 / 2 + yValue,
            p5.map(p5.sin(x), 0, 1, 0, 8)
          );
        x += this.dx;
      }
    }
    renderWave(R, G, B, p5) {
      //noStroke();
      //fill(c);
      for (
        let b = 0;
        b < (window.innerWidth + this.xspacing) / this.xspacing;
        b++
      ) {
        //circle(b * this.xspacing, 450 / 2 + this.yValues[b], random(1,8));
        this.particles[b].drawParticles(R, G, B, p5);
      }
    }
  }
  let setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    p5.frameRate(this);
    for (let i = 0; i < window.innerWidth / 25; i++) {
      particles.push(new Particle(p5));
    }
    waves.push(new SinWave({ amp: 10, theta: 0, xspace: 16, period: 600 }));
    waves.push(
      new SinWave({ amp: 15, theta: 0.5233, xspace: 16, period: 600 })
    );
    waves.push(
      new SinWave({ amp: 20, theta: 1.0467, xspace: 16, period: 600 })
    );
  };
  let draw = (p5) => {
    p5.clear();
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle(p5);
      particles[i].moveParticle();
      
    }
    waves[0].calcWave(p5);
    waves[0].renderWave(114,21,115,p5);
    waves[1].calcWave(p5);
    waves[1].renderWave(255,231,21, p5);
    waves[2].calcWave(p5);
    waves[2].renderWave(21,162,255, p5);
  };
  return <Sketch  setup={setup} draw={draw}  className="animus" />;
}
