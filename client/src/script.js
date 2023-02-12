const carousel = document.querySelector('.carousel');
const stories = document.querySelector('.stories');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const storyWidth = carousel.offsetWidth * 0.6;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  stories.style.transform = `translateX(${-storyWidth * currentIndex}px)`;
  prevBtn.style.display = 'block';
  if (currentIndex === stories.children.length - 1) {
    nextBtn.style.display = 'none';
  }
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  stories.style.transform = `translateX(${-storyWidth * currentIndex}px)`;
  nextBtn.style.display = 'block';
  if (currentIndex === 0) {
    prevBtn.style.display = 'none';
  }
});

prevBtn.style.display = 'none';

