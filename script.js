let galleryIndex = 0;

function moveGallery(direction) {
  const track = document.getElementById("gallery-track");
  const items = document.querySelectorAll(".gallery-item");
  const visibleCount = window.innerWidth <= 768 ? 1 : 3;
  const maxIndex = items.length - visibleCount;

  galleryIndex += direction;

  // Loop the gallery
  if (galleryIndex > maxIndex) galleryIndex = 0;
  if (galleryIndex < 0) galleryIndex = maxIndex;

  const itemWidth = items[0].offsetWidth + 20; // Include gap
  track.style.transform = `translateX(-${galleryIndex * itemWidth}px)`;
}

// Subtle shift effect for hero image on scroll, with clamped range
window.addEventListener("scroll", () => {
  document.querySelectorAll(".shift").forEach(img => {
    const rect = img.getBoundingClientRect();
    const rawShift = (rect.top - window.innerHeight / 2) / 30;
    const shift = Math.max(-40, Math.min(40, rawShift)); // clamp to ±40px
    img.style.transform = `translateY(${shift}px)`;
  });
});
