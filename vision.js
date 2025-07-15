// ===== Initialize AOS Animation on Scroll Library =====
AOS.init({
  duration: 1200,
  once: true,  // animations trigger once
});

// ===== OPTIONAL: Tilt-on-Hover for Images =====
// Adds 3D-like effect when hovering over image elements
document.querySelectorAll('.vision-section .visual img').forEach((img) => {
  img.addEventListener('mousemove', (e) => {
    const bounds = img.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

// ===== OPTIONAL: Floating Orbs Background (CSS Alternative) =====
// If you want dynamic floating particles, consider using a canvas-based library like particles.js or Vanta
// Here’s a minimal example using CSS animations (ensure you style .orb in CSS if added):
//
// const orbCount = 20;
// const container = document.body;
// for (let i = 0; i < orbCount; i++) {
//   const orb = document.createElement('div');
//   orb.className = 'orb';
//   orb.style.left = `${Math.random() * 100}%`;
//   orb.style.top = `${Math.random() * 100}%`;
//   orb.style.animationDuration = `${8 + Math.random() * 10}s`;
//   container.appendChild(orb);
// }

