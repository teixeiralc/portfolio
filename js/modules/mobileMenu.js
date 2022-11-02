import outsideClick from './outside-click.js';

export default function mobileMenu() {
  const hamburgerBtn = document.querySelector('[data-menu="hamburger"]');
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav_list');
  const userEvents = ['touchstart', 'click'];

  const toggleActive = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    navList.classList.add('active');
    hamburger.classList.add('active');
    outsideClick(navList, userEvents, () => {
      navList.classList.remove('active');
      hamburger.classList.remove('active');
    });

    const active = navList.classList.contains('active');
    e.currentTarget.setAttribute('aria-expanded', active);

    if (active) e.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    else hamburgerBtn.setAttribute('aria-label', 'Abrir Menu');
  };

  userEvents.forEach((userEvent) => {
    hamburgerBtn.addEventListener(userEvent, toggleActive);
  });
}
