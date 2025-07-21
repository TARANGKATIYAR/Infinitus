// === AOS Initialization ===
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
});

// === Smooth Scroll for Anchor Buttons ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// === Glowing Cursor Effect (Optional Enhancement) ===
const glowCursor = document.createElement('div');
glowCursor.classList.add('glow-cursor');
document.body.appendChild(glowCursor);

document.addEventListener('mousemove', (e) => {
  glowCursor.style.left = `${e.clientX}px`;
  glowCursor.style.top = `${e.clientY}px`;
});

// === Optional: Scroll-Reveal Title Flicker Animation ===
const animatedText = document.querySelectorAll('.hero h1, .section h2');
animatedText.forEach(title => {
  title.innerHTML = title.textContent
    .split('')
    .map((char, i) => `<span style="animation-delay: ${i * 0.03}s">${char}</span>`)
    .join('');
});
