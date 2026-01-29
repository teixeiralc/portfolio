export default function ThemeSwitch() {
  const themeCheckbox = document.getElementById('theme_checkbox');

  const toggleLightMode = () => {
    document.documentElement.classList.toggle('light');
  };

  themeCheckbox.addEventListener('change', () => {
    toggleLightMode();

    localStorage.removeItem('light');
    if (document.documentElement.classList.contains('light')) {
      localStorage.setItem('light', 1);
    }
  });

  const loadTheme = () => {
    const lightMode = localStorage.getItem('light');
    if (lightMode) {
      toggleLightMode();
      themeCheckbox.checked = true;
    }
  };
  loadTheme();
}
