// Scroll-based tilt effect
function applyTiltEffect(element) {
  window.addEventListener("scroll", () => {
    const rect = element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const screenCenter = window.innerHeight / 2;
    const tilt = (centerY - screenCenter) / 30;

    element.style.transform = `rotateX(${tilt}deg) rotateY(${tilt}deg)`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const heroTilt = document.getElementById("hero-photo");
  const impactTilt = document.getElementById("impact-photo");

  if (heroTilt) applyTiltEffect(heroTilt);
  if (impactTilt) applyTiltEffect(impactTilt);

  // Contact form submission with success message
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjvnjagz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        status.textContent = "✅ Message sent! I'll be in touch soon.";
        form.reset();
      } else {
        status.textContent = "❌ Something went wrong. Try again later.";
      }
    } catch (err) {
      status.textContent = "❌ Network error. Please try again.";
    }
  });
});
