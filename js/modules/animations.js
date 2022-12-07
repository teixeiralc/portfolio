export default function animations() {
  const title = new SplitType('.main_info .title');
  const hello = new SplitType('.main_info #hello');
  const subtitle = new SplitType('.main_info #subtitle');

  const projects = document.querySelector('.call_to_project');

  if (title && hello && subtitle && projects) {
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.1,
    });

    gsap.to('.word', {
      y: 0,
      stagger: 0.05,
      delay: 0.3,
      duration: 0.1,
    });
  }
}
