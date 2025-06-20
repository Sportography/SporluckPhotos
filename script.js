// Tilt image shift on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".shift img").forEach((img) => {
    const rect = img.getBoundingClientRect();
    const offset = (rect.top - window.innerHeight / 2) / 20;
    img.style.transform = `translateY(${offset}px)`;
  });
});

// Hamburger menu toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
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

// Transform-based infinite carousel logic
const track = document.getElementById("gallery-track");
const items = track.querySelectorAll(".gallery-item");
const itemWidth = items[0].offsetWidth + 20;
let currentIndex = 3; // Start after the cloned beginning

track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

function moveGallery(direction) {
  const totalItems = track.children.length;
  currentIndex += direction;
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  track.removeEventListener("transitionend", handleReset);
  track.addEventListener("transitionend", handleReset);
}

function handleReset() {
  const totalSlides = track.children.length;
  const realSlides = totalSlides - 6; // 3 prepended, 3 appended

  if (currentIndex >= realSlides + 3) {
    currentIndex = 3;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  } else if (currentIndex < 3) {
    currentIndex = realSlides + 2;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  track.removeEventListener("transitionend", handleReset);
}

document.getElementById("codeAccessForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const code = document.getElementById("accessCode").value.trim().toLowerCase();

  // Mapping codes to folder IDs or URLs
  const galleryCodes = {
    jeena25: "jeena25.html",
    alexg: "alexg.html",
    test123: "testGallery.html",
    gdhelpme: "driveHelper.html" 
    // Add more codes here
  };

  if (galleryCodes[code]) {
    window.location.href = galleryCodes[code];
  } else {
    document.getElementById("code-error").textContent = "❌ No gallery found for that code.";
  }
});
