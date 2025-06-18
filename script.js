// Shift Effect on Scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".shift").forEach(img => {
    const rect = img.getBoundingClientRect();
    const shift = (rect.top - window.innerHeight / 2) / 30;
    img.style.transform = `translateY(${shift}px)`;
  });
});

// Gallery Carousel
let galleryIndex = 0;
function moveGallery(direction) {
  const track = document.getElementById("gallery-track");
  const items = document.querySelectorAll(".gallery-item");
  const visibleCount = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = items.length - visibleCount;

  galleryIndex += direction;
  if (galleryIndex > maxIndex) galleryIndex = 0;
  if (galleryIndex < 0) galleryIndex = maxIndex;

  const itemWidth = items[0].offsetWidth + 20;
  track.style.transform = `translateX(-${galleryIndex * itemWidth}px)`;
}

// Contact Form Submission
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
