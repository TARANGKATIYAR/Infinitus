// ==== AOS Initialization ====
AOS.init({
  duration: 1200,
  once: true,
  easing: 'ease-in-out',
});

// ==== Scroll-based Navbar Highlight ====
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((sec) => {
    const top = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
});
