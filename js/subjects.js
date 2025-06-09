document.addEventListener('DOMContentLoaded', () => {
  // Accordion functionality
  const accordions = document.querySelectorAll('.accordion-toggle');

  accordions.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      const content = document.getElementById(button.getAttribute('aria-controls'));
      if (!expanded) {
        content.hidden = false;
        gsap.fromTo(content, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => content.hidden = true
        });
      }
    });
  });

  // GSAP scroll fade-in for the entire section
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.all-classes-title', {
    opacity: 0,
    y: -40,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.all-classes-subtitle', {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
  });

  gsap.utils.toArray('.accordion-item').forEach(item => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.2,
    });
  });

  // GSAP animation for stream cards inside Higher Secondary
  gsap.utils.toArray('.stream-card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
    });
  });
});
