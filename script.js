document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
// Scroll-based tilt for hero and impact photos
function applyScrollTilt(id, maxTilt = 10) {
  const el = document.getElementById(id);
  if (!el) return;

  window.addEventListener("scroll", () => {
    const rect = el.getBoundingClientRect();
    const centerY = window.innerHeight / 2;
    const offsetY = rect.top + rect.height / 2 - centerY;
    const tilt = Math.max(-maxTilt, Math.min(maxTilt, -offsetY / 40));
    el.style.transform = `rotateX(${tilt}deg)`;
  });
}

applyScrollTilt("hero-photo", 10);
applyScrollTilt("impact-photo", 10);

