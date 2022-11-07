export default function languageSwitch() {
  const languageSelect = document.querySelector('[data-language]');
  const URLs = {
    ptBR: 'https://teixeiralc.github.io/portfolio/',
    enUK: 'https://teixeiralc.github.io/portfolio/en',
  };

  const redirect = () => {
    // On change, will redirect the user to the desired language page
    const selectedValue = languageSelect.value;

    window.location.href = URLs[selectedValue];
  };

  languageSelect.addEventListener('change', redirect);
}
