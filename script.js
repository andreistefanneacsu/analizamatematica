// 🌙🌞 Theme toggle logic
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

function setLightMode() {
  document.body.classList.remove('dark');
  modeIcon.innerHTML = `
    <circle cx="12" cy="12" r="5" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </g>
  `;
  localStorage.setItem('theme', 'light');
}

function setDarkMode() {
  document.body.classList.add('dark');
  modeIcon.innerHTML = `
    <path fill="currentColor" d="M21 12.79A9 9 0 0112.21 3a7 7 0 000 14 9 9 0 008.79-4.21z"/>
  `;
  localStorage.setItem('theme', 'dark');
}

modeToggle?.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    setLightMode();
  } else {
    setDarkMode();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }
});
