import Sketch from "react-p5";
export default function P5Particles() {
  let particles = [];
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
        p5.fill("rgba(0,59,70,0.4)");
      } else {
        p5.fill("rgba(0,59,70,1)");
      }
      p5.circle(this.x, this.y, this.r);
    }
    moveParticle() {
      if (this.x < 0 || this.x > window.innerWidth) this.xSpeed *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.ySpeed *= -1;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
    joinParticles(particles, p5) {
      particles.forEach((element) => {
        let dis = p5.dist(this.x, this.y, element.x, element.y);
        if (dis < 85) {
          p5.stroke("rgba(0,59,70,0.5)");
          p5.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }
  let setup = (p5, canvasRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasRef);
    p5.frameRate(this.fr);
    for (let i = 0; i < window.innerWidth / 25; i++) {
      particles.push(new Particle(p5));
    }
  };
  let draw = (p5) => {
    p5.clear();
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle(p5);
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i), p5);
    }
  };
  return <Sketch setup={setup} draw={draw}></Sketch>;
}
