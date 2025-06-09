// timeline.js

document.addEventListener('DOMContentLoaded', function () {
  const timeline = document.getElementById('timeline-list');
  const items = timeline.querySelectorAll('li');
  const progressBar = document.getElementById('progress-bar');

  function updateTimelineOnScroll() {
    const timelineRect = timeline.getBoundingClientRect();
    const totalHeight = timeline.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollStart = window.scrollY + timelineRect.top - windowHeight;
    const scrollEnd = window.scrollY + timelineRect.bottom;
    const scrollPosition = window.scrollY + windowHeight;

    const scrolled = Math.min(Math.max((scrollPosition - scrollStart) / (scrollEnd - scrollStart), 0), 1);
    const progressHeight = scrolled * totalHeight;

    progressBar.style.height = `${progressHeight}px`;

    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const triggerPoint = windowHeight * 0.75;

      if (itemTop < triggerPoint) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateTimelineOnScroll);
  window.addEventListener('load', updateTimelineOnScroll);
});
