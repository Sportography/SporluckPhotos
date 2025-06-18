// Tilt Effect (gentle scroll-based tilt)
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

// Apply tilt to hero and impact sections
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero-photo");
  const impact = document.getElementById("impact-photo");
  if (hero) applyTiltEffect(hero);
  if (impact) applyTiltEffect(impact);
});

// Subtle shift on scroll effect for images
window.addEventListener("scroll", () => {
  document.querySelectorAll(".shift img").forEach(img => {
    const rect = img.getBoundingClientRect();
    const shift = (rect.top - window.innerHeight / 2) / 20;
    img.style.transform = `translateY(${shift}px)`;
  });
});

// Gallery Carousel with loop
let galleryIndex = 0;
function moveGallery(direction) {
  const track = document.getElementById("gallery-track");
  const items = document.querySelectorAll(".gallery-item");
  const visibleCount = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = items.length - visibleCount;

  galleryIndex += direction;

  if (galleryIndex > maxIndex) {
    galleryIndex = 0;
  } else if (galleryIndex < 0) {
    galleryIndex = maxIndex;
  }

  const itemWidth = items[0].offsetWidth + 20;
  track.style.transform = `translateX(-${galleryIndex * itemWidth}px)`;
}

// Contact Form Submission
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
