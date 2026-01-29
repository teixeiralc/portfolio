import debounce from './debounce.js';

export default class AnimationOnScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHeightHalf = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 25);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowHeightHalf),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('animate');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
