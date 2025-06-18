// Tilt Effect for Scroll
function applyTiltEffect(element) {
  window.addEventListener("scroll", () => {
    const rect = element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const screenCenterY = window.innerHeight / 2;
    const deltaY = (centerY - screenCenterY) / 20;

    element.style.transform = `rotateX(${deltaY}deg)`;
  });
}


// Apply to hero and impact photos
document.addEventListener("DOMContentLoaded", () => {
  const heroPhoto = document.getElementById("hero-photo");
  const impactPhoto = document.getElementById("impact-photo");

  if (heroPhoto) applyTiltEffect(heroPhoto);
  if (impactPhoto) applyTiltEffect(impactPhoto);
});

// Form Submission Handling
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
