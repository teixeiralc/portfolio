export default function languageSwitch() {
  const languageSelect = document.getElementById('language');

  const replaceContent = (newText) => {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    document.body.innerHTML = newHtml.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
  };

  const fetchPage = async (url) => {
    const res = await fetch(url);
    const pageText = await res.text();
    replaceContent(pageText);
  };

  const changeLanguage = () => {
    const selectValue = languageSelect.value;
    if (selectValue === 'en-UK') {
      fetchPage('http://127.0.0.1:5500/index-en.html');
      window.history.pushState(null, null, 'http://127.0.0.1:5500/index-en.html');
    } else {
      fetchPage('http://127.0.0.1:5500/index.html');
      window.history.pushState(null, null, 'http://127.0.0.1:5500/index.html');
    }
  };

  languageSelect.addEventListener('change', changeLanguage);
  window.addEventListener('popstate', () => fetchPage(window.location.href));
}

// export default function languageSwitch() {
//   const languageSelect = document.getElementById('language');

//   const replaceContent = (newText) => {
//     const newHtml = document.createElement('div');
//     newHtml.innerHTML = newText;

//     const oldNav = document.querySelector('#navbar');
//     const newNav = newHtml.querySelector('#navbar');

//     const oldHome = document.querySelector('#home');
//     const newHome = newHtml.querySelector('#home');

//     const oldEducation = document.querySelector('#education');
//     const newEducation = newHtml.querySelector('#education');

//     oldNav.innerHTML = newNav.innerHTML;
//     oldHome.innerHTML = newHome.innerHTML;
//     oldEducation.innerHTML = newEducation.innerHTML;

//     document.title = newHtml.querySelector('title').innerText;
//   };

//   const fetchPage = async (url) => {
//     const res = await fetch(url);
//     const pageText = await res.text();
//     replaceContent(pageText);
//   };

//   const changeLanguage = () => {
//     const selectValue = languageSelect.value;
//     if (selectValue === 'en-UK') {
//       fetchPage('http://127.0.0.1:5500/index-en.html');
//       window.history.pushState(null, null, 'http://127.0.0.1:5500/index-en.html');
//     } else {
//       fetchPage('http://127.0.0.1:5500/index.html');
//       window.history.pushState(null, null, 'http://127.0.0.1:5500/index.html');
//     }
//   };

//   languageSelect.addEventListener('change', changeLanguage);
//   window.addEventListener('popstate', () => fetchPage(window.location.href));
// }
