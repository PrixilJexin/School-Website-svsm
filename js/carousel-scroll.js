document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.review-carousel');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const scrollAmount = 320; // width of one tile + gap

  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });
});
