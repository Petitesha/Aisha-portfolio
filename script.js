const hamburger = document.querySelector('.hamburger img');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const main = document.querySelector('main');
const links = document.querySelectorAll('.links');
const modeIcon = document.querySelector('.modeIcon');
const bio = document.querySelector('.hero-text');

let mode = 'dark';

const toggleMode = (evt) => {
  if (mode === 'dark') {
    evt.target.src = './images/light-mode.svg';
    localStorage.setItem('state', 'light');
    mode = 'light';
  } else {
    evt.target.src = './images/dark-mode.svg';
    localStorage.setItem('state', 'dark');
    mode = 'dark';
  }
  changeMode(mode);
};

const changeMode = (appearance) => {
  // main.classList.toggle('active');
  if (appearance === 'light') {
    main.classList.add('active');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add('active');
    }
    bio.classList.add('active');
    modeIcon.src = './images/light-mode.svg';
  } else {
    main.classList.remove('active');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    bio.classList.remove('active');
    modeIcon.src = './images/dark-mode.svg';
  }
};

const getModeFromLocalStorage = () => {
  mode = localStorage.getItem('state');
  console.log(mode);
  changeMode(mode);
};

getModeFromLocalStorage();

hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  close.style.display = 'block';
  sidebar.style.display = 'block';
});

close.addEventListener('click', () => {
  close.style.display = 'none';
  hamburger.style.display = 'block';
  sidebar.style.display = 'none';
});