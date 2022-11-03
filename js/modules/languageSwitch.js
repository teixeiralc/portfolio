export default function languageSwitch() {
  const languageSelect = document.querySelector('[data-language]');
  const URLs = {
    ptBR: 'http://127.0.0.1:5500/index.html',
    enUK: 'http://127.0.0.1:5500/index-en.html',
  };

  const redirect = () => {
    // On change, will redirect the user to the desired language page
    const selectedValue = languageSelect.value;

    window.location.href = URLs[selectedValue];
  };

  languageSelect.addEventListener('change', redirect);
}
