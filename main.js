const toggleTheme = document.getElementById('toggle-theme');
const circleToggleTheme = document.querySelector('#toggle-theme .circle');
const html = document.querySelector('html');

toggleTheme.addEventListener('click', function () {
  circleToggleTheme.classList.toggle('active');
  html.classList.toggle('dark');
});