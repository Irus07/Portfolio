/**
 * High-performance, lightweight background canvas animation.
 * Features:
 * - Ambient node network with subtle drift
 * - Mouse proximity glow / connection
 * - Automatic adaptation to Dark and Light theme
 * - Zero external libraries, 60 FPS
 */

(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, maxDist: 140 };

  const PARTICLE_COUNT = 45;
  const CONNECTION_DIST = 120;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw(theme) {
      const color = theme === 'light' ? 'rgba(2, 132, 199, ' : 'rgba(56, 189, 248, ';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = color + '0.7)';
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.clearRect(0, 0, width, height);

    const lineColor = isLight ? 'rgba(79, 70, 229, ' : 'rgba(56, 189, 248, ';

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.update();
      p1.draw(isLight ? 'light' : 'dark');

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * (isLight ? 0.15 : 0.2);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lineColor + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Mouse interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p1.x - mouse.x;
        const dy = p1.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.maxDist) {
          const alpha = (1 - dist / mouse.maxDist) * 0.35;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = lineColor + alpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  init();
  animate();
})();
