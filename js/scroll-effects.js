document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

  const heroBg = document.querySelector('.hero-bg');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 10) {
      heroBg.classList.add('bg-blur');
    } else {
      heroBg.classList.remove('bg-blur');
    }
  });

  gsap.from(".hero-vincent-content h1", {
    opacity: 0,
    y: 80,
    scale: 0.95,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.2
  });

  gsap.from(".hero-vincent-content p", {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.6
  });

  gsap.to(".hero-vincent-content", {
    y: 100,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-vincent",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // === Latest Updates Carousel Dot Navigation ===
  const carouselItems = document.querySelectorAll(".lu-carousel-item");
  const dotsContainer = document.getElementById("lu-dots");

  if (dotsContainer && carouselItems.length > 0) {
    // Clear any existing dots (if needed)
    dotsContainer.innerHTML = "";

    // Create dots dynamically based on carousel items
    carouselItems.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("lu-dot");
      if (index === 0) dot.classList.add("active");
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".lu-dot");

    // Dot click event: show corresponding slide
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        const index = parseInt(dot.dataset.index);

        // Remove active classes from slides and dots
        carouselItems.forEach(item => item.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));

        // Activate the clicked slide and dot
        carouselItems[index].classList.add("active");
        dot.classList.add("active");
      });
    });
  }
});
