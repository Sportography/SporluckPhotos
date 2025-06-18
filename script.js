// Apply Tilt Effect
function applyTiltEffect(element, maxTilt = 5) {
  window.addEventListener("scroll", () => {
    const rect = element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const screenCenterY = window.innerHeight / 2;
    const deltaY = (centerY - screenCenterY) / 50;
    const clampedY = Math.max(-maxTilt, Math.min(maxTilt, deltaY));

    element.style.transform = `rotateX(${clampedY}deg)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const heroPhoto = document.getElementById("hero-photo");
  const impactPhoto = document.getElementById("impact-photo");
  if (heroPhoto) applyTiltEffect(heroPhoto);
  if (impactPhoto) applyTiltEffect(impactPhoto);
});

// Handle Form Submission
window.addEventListener("DOMContentLoaded", () => {
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
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          status.textContent = "✅ Message sent! I’ll be in touch soon.";
          status.style.color = "#0f0";
          form.reset();
        } else {
          status.textContent = "⚠️ Oops! Something went wrong.";
          status.style.color = "#f00";
        }
      } catch (error) {
        status.textContent = "⚠️ Error submitting form.";
        status.style.color = "#f00";
      }
    });
  }
});

// Gallery Slider Logic
let galleryIndex = 0;

function moveGallery(direction) {
  const track = document.getElementById("galleryTrack");
  const items = document.querySelectorAll(".gallery-item");
  const visibleCount = 3;

  if (!track || items.length === 0) return;

  const maxIndex = items.length - visibleCount;
  galleryIndex = Math.min(Math.max(galleryIndex + direction, 0), maxIndex);
  const itemWidth = items[0].offsetWidth + 20;

  track.style.transform = `translateX(-${galleryIndex * itemWidth}px)`;
}

window.moveGallery = moveGallery;
