const mobileMenu = document.querySelector('.mobile-menu__block');
const burgerOpen = document.querySelector('.header__burger-button');
const burgerClose = mobileMenu.querySelector('.burger-button--close');

burgerOpen.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--closed');
  document.body.style.overflow = 'hidden'
});

burgerClose.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu--closed');
  document.body.style.overflow = 'scroll'
});