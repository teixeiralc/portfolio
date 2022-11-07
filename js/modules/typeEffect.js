export default function typeEffect() {
  // List of sentences
  const content = ['JavaScript', 'CSS', 'Figma', 'UI Design'];

  // Current sentence being processed
  let part = 0;

  // Character number of the current sentence being processed
  let partIndex = 0;

  // Holds the handle returned from setInterval
  let intertvalVal;

  // Element that holds the text
  const element = document.querySelector('.type_effect_text');

  // Cursor element
  const cursor = document.querySelector('.cursor');

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    const text = content[part].substring(0, partIndex + 1);
    element.innerHTML = text;
    partIndex++;

    // Implements deleting effect
    function Delete() {
      // Get substring with 1 characater deleted
      const text = content[part].substring(0, partIndex - 1);
      element.innerHTML = text;
      partIndex--;

      // If sentence has been deleted then start to display the next sentence
      if (text === '') {
        clearInterval(intertvalVal);

        // If current sentence was last then display the first one, else move to the next
        if (part === content.length - 1) part = 0;
        else part++;

        partIndex = 0;

        // Start to display the next sentence after some time
        setTimeout(() => {
          cursor.style.display = 'inline-block';
          intertvalVal = setInterval(Type, 100);
        }, 200);
      }
    }

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === content[part]) {
      // Hide the cursor
      cursor.style.display = 'none';

      clearInterval(intertvalVal);
      setTimeout(() => {
        intertvalVal = setInterval(Delete, 100);
      }, 1000);
    }
  }

  // Start the typing effect on load
  intertvalVal = setInterval(Type, 100);
}
