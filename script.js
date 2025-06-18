// Tilt image shift on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".shift img").forEach((img) => {
    const rect = img.getBoundingClientRect();
    const offset = (rect.top - window.innerHeight / 2) / 20;
    img.style.transform = `translateY(${offset}px)`;
  });
});

// Gallery infinite loop slider
let galleryIndex = 0;

function moveGallery(direction) {
  const track = document.getElementById("gallery-track");
  const items = document.querySelectorAll(".gallery-item");
  const visibleCount = window.innerWidth <= 768 ? 1 : 3;
  const totalItems = items.length;

  galleryIndex = (galleryIndex + direction + totalItems) % totalItems;
  const itemWidth = items[0].offsetWidth + 20; // Include margin
  track.style.transform = `translateX(-${galleryIndex * itemWidth}px)`;
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
