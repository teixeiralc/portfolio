// import anime from './anime.min.js';

// export default function animations() {
//   const textWrapper = document.querySelector('.main_info h1');
//   const emphasisTitle = document.querySelector('.main_info .emphasis');
//   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class="letter">$&</span>');
//   emphasisTitle.innerHTML = emphasisTitle.textContent.replace(
//     /\S/g,
//     '<span class="letter emphasis ff-2-title">$&</span>'
//   );

//   gsap.timeline().add({
//     targets: '.main_info .letters',
//     translateY: [200, 0],
//     easing: 'easeOutExpo',
//     opacity: 1,
//     duration: 1500,
//     delay: (el, i) => 400 + 70 * i,
//   });
// }
