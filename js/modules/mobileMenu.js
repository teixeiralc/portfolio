import outsideClick from './outside-click.js';

export default function mobileMenu() {
  const hamburgerBtn = document.querySelector('[data-menu="hamburger"]');
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav_list');
  const userEvents = ['touchstart', 'click'];
  const htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
  const openText = htmlLang.startsWith('pt') ? 'Abrir Menu' : 'Open Menu';
  const closeText = htmlLang.startsWith('pt') ? 'Fechar Menu' : 'Close Menu';

  const closeMenu = () => {
    navList.classList.remove('active');
    hamburger.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.setAttribute('aria-label', openText);
  };

  const toggleActive = (e) => {
    if (e.type === 'touchstart') e.preventDefault();

    const isActive = navList.classList.toggle('active');
    hamburger.classList.toggle('active', isActive);

    if (isActive) {
      outsideClick(navList, userEvents, closeMenu);
    }

    e.currentTarget.setAttribute('aria-expanded', String(isActive));
    e.currentTarget.setAttribute('aria-label', isActive ? closeText : openText);
  };

  userEvents.forEach((userEvent) => {
    hamburgerBtn.addEventListener(userEvent, toggleActive);
  });
}
