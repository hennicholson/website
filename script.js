const welcomeAnimation = document.querySelector('#welcome-animation');
welcomeAnimation.addEventListener('animationend', () => {
  document.querySelector('#animation-container').style.display = 'none';
  document.querySelector('#main-container').style.display = 'flex';
});

const directoryButton = document.querySelector('#directory-button');
directoryButton.addEventListener('click', () => {
  const directoryContainer = document.querySelector('#directory-container');
  directoryContainer.style.display = 'block';
  directoryContainer.scrollIntoView({behavior: 'smooth'});
  
  // hide directory button and lock screen
  directoryButton.style.display = 'none';
  document.querySelector('body').style.overflow = 'hidden';
});

// Toggle menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});