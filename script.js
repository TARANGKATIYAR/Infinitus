// script.js

// ====== INIT AOS ======
AOS.init({
  duration: 1000,
  once: true
});

// ====== INIT Typed.js ======
const typed = new Typed("#typed-text", {
  strings: ["Transforming Dreams into Digital Realities"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// ====== INIT Vanta.js Effect ======
let vantaEffect;
window.addEventListener("DOMContentLoaded", () => {
  vantaEffect = VANTA.NET({
    el: "#vanta-overlay",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x00FFE7,
    backgroundColor: 0x0d0d0d,
    points: 10.0,
    maxDistance: 20.0,
    spacing: 15.0
  });
});

// ====== CTA Ripple Animation ======
document.querySelector(".cta-btn").addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  this.appendChild(ripple);

  const maxDim = Math.max(this.clientWidth, this.clientHeight);
  ripple.style.width = ripple.style.height = maxDim + "px";
  ripple.style.left = e.offsetX - maxDim / 2 + "px";
  ripple.style.top = e.offsetY - maxDim / 2 + "px";

  setTimeout(() => ripple.remove(), 600);
});

// ====== Add Ripple CSS Dynamically ======
const style = document.createElement("style");
style.innerHTML = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-effect 0.6s linear;
    pointer-events: none;
    z-index: 5;
  }

  @keyframes ripple-effect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
function createPostCard(title, description, name, saveToStorage = true) {
  const card = document.createElement('div');
  card.className = 'post-card';

  card.innerHTML = `
    <h3>${escapeHTML(title)}</h3>
    <p>${escapeHTML(description)}</p>
    <div class="author">— ${escapeHTML(name)}</div>
    <button class="delete-btn" title="Delete post">🗑️</button>
  `;

  // Add card to top of grid
  postGrid.prepend(card);

  // Delete post on click
  card.querySelector('.delete-btn').addEventListener('click', () => {
    card.remove();
    deleteFromStorage(title, description, name);
  });

  if (saveToStorage) {
    const currentPosts = JSON.parse(localStorage.getItem('dreamPosts')) || [];
    currentPosts.unshift({ title, description, name });
    localStorage.setItem('dreamPosts', JSON.stringify(currentPosts));
  }
}

// Delete matching card from localStorage
function deleteFromStorage(title, description, name) {
  let posts = JSON.parse(localStorage.getItem('dreamPosts')) || [];
  posts = posts.filter(
    post => post.title !== title || post.description !== description || post.name !== name
  );
  localStorage.setItem('dreamPosts', JSON.stringify(posts));
}
