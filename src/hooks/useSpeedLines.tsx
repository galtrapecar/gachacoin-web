import { useLayoutEffect, useState } from "react";

const useSpeedLines = () => {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useLayoutEffect(() => {
    // logic from https://codepen.io/jsonyeung/pen/JwLMYr
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    setCanvas(canvas);

    let cw = (canvas.width = window.innerWidth);
    let ch = (canvas.height = window.innerHeight);

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    class SpeedLine {
      x: number;
      y: number;
      speed: number;
      life: number;
      curLife: number;
      alpha: number;
      angle: number;
      size: number;
      inRadius: number;
      outRadius: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speed = rand(2, 4);
        this.life = this.curLife = rand(500, 900);
        this.alpha = rand(0.1, 0.4);
        this.angle = Math.PI * rand(0, 2);
        this.size = rand(20, 40);
        this.inRadius = rand(200, 400);
        this.outRadius = cw;
      }

      update() {
        this.curLife -= this.speed;
        this.inRadius += this.speed * 4;

        this.alpha *= this.curLife / this.life;
        this.size *= this.curLife / this.life;

        this.draw();
      }

      draw() {
        const { x, y, size, angle, alpha } = this,
          { inRadius, outRadius } = this;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, inRadius);
        ctx.lineTo(size, outRadius);
        ctx.lineTo(-size, outRadius);
        ctx.closePath();

        ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        ctx.stroke();
        ctx.restore();
      }
    }

    // Animation
    const lines: any[] = [];
    const MAX_LINES = 300;

    function updateLines() {
      lines.forEach((line, i) => {
        if (!line || line.curLife < 0) lines[i] = new SpeedLine(cw / 2, ch / 2);
        lines[i].update();
      });
    }

    for (let i = 0; i < MAX_LINES; i++) {
      lines[i] = new SpeedLine(cw / 2, ch / 2);
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, cw, ch);
      updateLines();
    }

    animate();

    // Resize
    window.addEventListener("resize", () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
      updateLines();
    });
  }, []);

  if (!canvas) return;
  return <div ref={(ref) => ref?.appendChild(canvas)} />;
};

export default useSpeedLines;
