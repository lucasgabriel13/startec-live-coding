const toggleTheme = document.getElementById('toggle-theme');
const circleToggleTheme = document.querySelector('#toggle-theme .circle');
const html = document.querySelector('html');

function onLoadDocument() {
  const theme = localStorage.getItem('@startec-portfolio:theme');

  if (theme === 'dark') {
    html.classList.add('dark');
    circleToggleTheme.classList.add('active');
  } else {
    html.classList.remove('dark');
    circleToggleTheme.classList.remove('active');
  }
}

toggleTheme.addEventListener('click', function () {
  circleToggleTheme.classList.toggle('active');

  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    localStorage.setItem('@startec-portfolio:theme', 'dark');
  } else {
    localStorage.removeItem('@startec-portfolio:theme');
  }

});

const scrollReveal = ScrollReveal({
  distance: '50px',
  origin: 'top',
  duration: 700,
});

scrollReveal.reveal('header');
scrollReveal.reveal('.main-content');
scrollReveal.reveal('#about');