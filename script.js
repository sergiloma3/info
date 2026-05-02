// ANIMATIONS SCROLL
const elements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 },
);
elements.forEach((el) => observer.observe(el));

// HAMBURGER GÉRÉ UNIQUEMENT PAR JS
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const nav = document.querySelector("nav");

  function checkSize() {
    if (window.innerWidth <= 1024) {
      hamburger.style.display = "block";
      navLinks.style.display = "none";
    } else {
      hamburger.style.display = "none";
      navLinks.style.display = "flex";
    }
  }

  checkSize();
  window.addEventListener("resize", checkSize);

  hamburger.addEventListener("click", () => {
    if (navLinks.style.display === "none") {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "fixed";
      navLinks.style.top = "60px";
      navLinks.style.left = "290px";
      navLinks.style.width = "100%";
      navLinks.style.background = "rgba(10, 10, 15, 0.98)";
      navLinks.style.backdropFilter = "blur(12px)";
      navLinks.style.padding = "1rem 5%";
      navLinks.style.zIndex = "9999";
      navLinks.style.gap = "0.8rem";
      navLinks.style.borderBottom = "1px solid rgba(96, 165, 250, 0.3)";
      navLinks.style.height = "auto";
      navLinks.style.maxHeight = "300px";
    } else {
      navLinks.style.display = "none";
    }
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.style.display = "none";
      checkSize();
    });
  });
});
