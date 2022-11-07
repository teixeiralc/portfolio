import mobileMenu from './modules/mobileMenu.js';
import themeSwitch from './modules/themeSwitch.js';
import languageSwitch from './modules/languageSwitch.js';
import typeEffect from './modules/typeEffect.js';
import animations from './modules/animations.js';
import AnimationOnScroll from './modules/anime_on_scroll.js';

mobileMenu();
themeSwitch();
languageSwitch();
typeEffect();
animations();

const animeOnScroll = new AnimationOnScroll('[data-scroll]');
animeOnScroll.init();
