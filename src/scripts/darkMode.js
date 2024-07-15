// src/scripts/darkMode.js

document.addEventListener('DOMContentLoaded', () => {
  const darkModeButton = document.querySelector('.toggle-dark-mode');
  
  if (darkModeButton) {
    darkModeButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
    });
  }

  // Cargar la preferencia del modo oscuro
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
