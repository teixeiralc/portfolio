export default function languageSwitch() {
  const languageSelect = document.querySelector('[data-language]');
  const URLs = {
    ptBR: '/portfolio/',
    enUK: `/portfolio/en`,
  };

  if (window.location.pathname === '/projetos.html') {
    URLs.ptBR = '/portfolio/projetos.html';
    URLs.enUK = '/portfolio/projetos-en.html';
  }

  const redirect = () => {
    // On change, will redirect the user to the desired language page
    const selectedValue = languageSelect.value;

    window.location.href = URLs[selectedValue];
  };

  languageSelect.addEventListener('change', redirect);
}
