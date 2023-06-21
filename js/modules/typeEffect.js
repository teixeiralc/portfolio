export default function typeEffect() {
  const content = ['JavaScript', 'React', 'TypeScript', 'Ui Design', 'Figma'];

  let part = 0;
  let partIndex = 0;
  let intertvalVal;

  const element = document.querySelector('.type_effect_text');

  const cursor = document.querySelector('.cursor');

  if (element) {

    // eslint-disable-next-line no-inner-declarations
    function Type() {
      const text = content[part].substring(0, partIndex + 1);
      element.innerHTML = text;
      partIndex++;
  
      function Delete() {
        // eslint-disable-next-line no-shadow
        const text = content[part].substring(0, partIndex - 1);
        element.innerHTML = text;
        partIndex--;
  
        if (text === '') {
          clearInterval(intertvalVal);
  
          if (part === content.length - 1) part = 0;
          else part++;
  
          partIndex = 0;
  
          setTimeout(() => {
            cursor.style.display = 'inline-block';
            intertvalVal = setInterval(Type, 100);
          }, 200);
        }
      }
  
      if (text === content[part]) {
        cursor.style.display = 'none';
  
        clearInterval(intertvalVal);
        setTimeout(() => {
          intertvalVal = setInterval(Delete, 100);
        }, 1000);
      }
    }
  
    intertvalVal = setInterval(Type, 100);
  }
}
