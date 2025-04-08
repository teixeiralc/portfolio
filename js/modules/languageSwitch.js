export default function languageSwitch() {
  const languageSelect = document.querySelector('[data-language]');
  const URLs = {
    pt: '/',
    en: `/en`,
  };

  const redirect = () => {
    const selectedValue = languageSelect.value;

    window.location.href = URLs[selectedValue];
  };

  languageSelect.addEventListener('change', redirect);
}
