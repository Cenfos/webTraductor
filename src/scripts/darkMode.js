// src/scripts/darkMode.js
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.toggle-dark-mode');
    if (button) {
      button.addEventListener('click', toggleDarkMode);
    }
  
    // Cargar la preferencia del modo oscuro
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  });
  