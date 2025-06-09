// latest-updates.js

document.addEventListener("DOMContentLoaded", () => {
  const luCircleBtn = document.getElementById('lu-circleButton');
  const luPanel = document.getElementById('lu-updatesPanel');
  const luCloseBtn = document.getElementById('lu-closeBtn');
  const luItems = document.querySelectorAll('.lu-carousel-item');

  let luCurrent = 0;
  let luInterval = null;

  // Reset and show the carousel
  function luStartCarousel() {
    luItems.forEach(item => item.classList.remove('active'));
    luItems[luCurrent].classList.add('active');

    // Clear previous interval if it exists
    if (luInterval) clearInterval(luInterval);

    luInterval = setInterval(() => {
      luItems[luCurrent].classList.remove('active');
      luCurrent = (luCurrent + 1) % luItems.length;
      luItems[luCurrent].classList.add('active');
    }, 3000);
  }

  // GSAP animations
  function openPanel() {
    luCircleBtn.style.pointerEvents = 'none'; // disable multiple clicks

    gsap.to(luCircleBtn, {
      duration: 0.4,
      scale: 0.8,
      ease: "power1.inOut",
      onComplete: () => {
        luCircleBtn.style.display = 'none';
        luPanel.style.display = 'flex';

        gsap.fromTo(luPanel, {
          scale: 0.5,
          opacity: 0,
          y: 100
        }, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            luCircleBtn.style.pointerEvents = 'auto';
            luStartCarousel();
          }
        });
      }
    });
  }

  function closePanel() {
    gsap.to(luPanel, {
      duration: 0.4,
      scale: 0.8,
      opacity: 0,
      y: 50,
      ease: "power2.in",
      onComplete: () => {
        luPanel.style.display = 'none';
        luCircleBtn.style.display = 'flex';

        gsap.fromTo(luCircleBtn, {
          scale: 0.8,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        });

        // Stop the carousel when closed
        if (luInterval) clearInterval(luInterval);
      }
    });
  }

  luCircleBtn.addEventListener('click', openPanel);
  luCloseBtn.addEventListener('click', closePanel);
});
