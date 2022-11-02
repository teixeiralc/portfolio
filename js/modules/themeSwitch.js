export default function ThemeSwitch() {
  const themeCheckbox = document.getElementById('theme_checkbox');

  // Toggle light theme
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

  // Load theme storaged in LocalStorage

  const loadTheme = () => {
    const lightMode = localStorage.getItem('light');
    if (lightMode) {
      toggleLightMode();
      themeCheckbox.checked = true;
    }
  };
  loadTheme();
}
