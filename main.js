const toggleTheme = document.getElementById('toggle-theme');
const circleToggleTheme = document.querySelector('#toggle-theme .circle');
const html = document.querySelector('html');

toggleTheme.addEventListener('click', function () {
  circleToggleTheme.classList.toggle('active');
  html.classList.toggle('dark');
});



ScrollReveal().reveal('header', {
  duration: 1000,
  distance: '-50px',
});

ScrollReveal().reveal('main', {
  duration: 1300,
  distance: '1000px',
  origin: 'left'
});