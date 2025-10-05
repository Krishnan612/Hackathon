// Simple orbital animation for public/index1.html
document.addEventListener('DOMContentLoaded', () => {
  const center = { x: window.innerWidth/2, y: window.innerHeight/2 };
  const sun = document.querySelector('.sun img');

  // Planet definitions: selector, radius (px), size (px), speed (deg/sec)
  const planets = [
    { cls: 'mercury', img: 'images/mercury.png', radius: 120, size: 18, speed: 0.047 },
    { cls: 'venus', img: 'images/venus.png', radius: 170, size: 22, speed: 0.035 },
    { cls: 'earth', img: 'images/earth.png', radius: 230, size: 26, speed: 0.03 },
    { cls: 'mars', img: 'images/mars.png', radius: 280, size: 20, speed: 0.024 },
    { cls: 'jupiter', img: 'images/jupiter.png', radius: 360, size: 44, speed: 0.013 },
    { cls: 'saturn', img: 'images/saturn.png', radius: 430, size: 38, speed: 0.01 },
    { cls: 'uranus', img: 'images/uranus.png', radius: 500, size: 30, speed: 0.008 },
    { cls: 'neptune', img: 'images/neptune.png', radius: 560, size: 30, speed: 0.006 },
    { cls: 'pluto', img: 'images/pluto.png', radius: 620, size: 12, speed: 0.004 }
  ];

  // Create planet DOM nodes if not present
  planets.forEach(p => {
    let el = document.querySelector('.' + p.cls);
    if (!el) return;
    el.innerHTML = '';
    const img = document.createElement('img');
    img.src = p.img;
    img.className = 'planet-img';
    img.style.width = p.size + 'px';
    img.style.height = p.size + 'px';
    const label = document.createElement('div');
    label.className = 'planet-label';
    label.textContent = p.cls.charAt(0).toUpperCase() + p.cls.slice(1);
    el.appendChild(img);
    el.appendChild(label);
    p.dom = el;
    p.angle = Math.random() * Math.PI * 2;
  });

  // Earth moon
  const earth = planets.find(x => x.cls === 'earth');
  const moon = { dom: null, angle: 0, radius: 36, size: 8, speed: 0.09 };
  if (earth) {
    const moonEl = document.createElement('img');
    moonEl.src = 'images/moon.png';
    moonEl.className = 'planet-img';
    moonEl.style.width = moon.size + 'px';
    moonEl.style.height = moon.size + 'px';
    earth.dom.appendChild(moonEl);
    moon.dom = moonEl;
  }

  let last = performance.now();

  function resize() {
    center.x = window.innerWidth/2;
    center.y = window.innerHeight/2;
  }

  window.addEventListener('resize', resize);

  function animate(t) {
    const dt = (t - last) / 1000;
    last = t;
    planets.forEach(p => {
      p.angle += p.speed * dt * 2 * Math.PI * 0.2; // scaled speed
      const x = center.x + Math.cos(p.angle) * p.radius - (p.size/2);
      const y = center.y + Math.sin(p.angle) * p.radius - (p.size/2);
      if (p.dom && p.dom.querySelector('.planet-img')) {
        const img = p.dom.querySelector('.planet-img');
        img.style.left = x + 'px';
        img.style.top = y + 'px';
        const lbl = p.dom.querySelector('.planet-label');
        if (lbl) { lbl.style.left = x + 'px'; lbl.style.top = y + 'px'; }
      }
    });

    if (moon.dom && earth) {
      moon.angle += moon.speed * dt * 2 * Math.PI;
      const ex = center.x + Math.cos(earth.angle) * earth.radius;
      const ey = center.y + Math.sin(earth.angle) * earth.radius;
      const mx = ex + Math.cos(moon.angle) * moon.radius - moon.size/2;
      const my = ey + Math.sin(moon.angle) * moon.radius - moon.size/2;
      moon.dom.style.left = mx + 'px';
      moon.dom.style.top = my + 'px';
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
