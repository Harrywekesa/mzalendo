const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Set initial counter
let counter = 1;

// Set slide width to move the carousel to the left by the width of one image
const slideWidth = carouselImages[0].clientWidth;

// Move the carousel to the first image (not the clone)
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// Loop through the carousel images and move the carousel to the next image every 2 seconds
setInterval(() => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}, 2000);

// Reset the counter to 1 when the last image (clone) is reached
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

// Reset the counter to the last image (clone) when the first image (clone) is reached
carouselSlide.addEventListener('transitionstart', () => {
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});