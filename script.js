
// Tilt image shift on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".shift img").forEach((img) => {
    const rect = img.getBoundingClientRect();
    const offset = (rect.top - window.innerHeight / 2) / 20;
    img.style.transform = `translateY(${offset}px)`;
  });
});

// Smooth infinite gallery scroll using transform
let galleryOffset = 0;
const visibleItems = 3; // Assume 3 images shown at a time

function moveGallery(direction) {
  const track = document.getElementById("gallery-track");
  const items = track.children;
  const itemWidth = items[0].offsetWidth + 20;

  galleryOffset += direction;

  // Wrap around
  if (galleryOffset < 0) {
    galleryOffset = items.length - visibleItems;
  } else if (galleryOffset >= items.length) {
    galleryOffset = 0;
  }

  const newX = -(galleryOffset * itemWidth);
  track.style.transform = `translateX(${newX}px)`;
  track.style.transition = 'transform 0.6s ease';
}

// Contact form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const action = form.getAttribute("action");

      try {
        const response = await fetch(action, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          status.textContent = "✅ Message sent!";
          status.style.color = "#4aff6d";
          form.reset();
        } else {
          status.textContent = "⚠️ Oops! Something went wrong.";
          status.style.color = "#f55";
        }
      } catch (err) {
        status.textContent = "⚠️ Network error.";
        status.style.color = "#f55";
      }
    });
  }
});

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}
