const hamburger = document.querySelector('.hamburger img');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const main = document.querySelector('main');
const links = document.querySelectorAll('.links');
const modeIcon = document.querySelector('.modeIcon');
const bio = document.querySelector('.hero-text');
const messageIcon = document.querySelector('.hero-links-tag');
const sectionTwo = document.querySelector('.section2');
const jobs = document.querySelector('.jobs');
const desc = document.querySelector('.desc p');
const actions = document.querySelectorAll('.actions');
const framework = document.querySelectorAll('.framework');
const live = document.querySelectorAll('.live');
const githubLogo = document.querySelectorAll('.github-button');
const education = document.querySelector('.education');


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
    messageIcon.classList.add('active');
    sectionTwo.classList.add('active');
    jobs.classList.add('active');
    desc.classList.add('active');
    education.classList.add('active');
    for (let i = 0; i < actions.length; i++) {
      actions[i].classList.add('active');
    }
    for (let i = 0; i < framework.length; i++) {
      framework[i].classList.add('active');
    }
    for (let i = 0; i < live.length; i++) {
      live[i].classList.add('active');
    }
    for (let i = 0; i < githubLogo.length; i++) {
      githubLogo[i].classList.add('active');
    }
    modeIcon.src = './images/light-mode.svg';
  } else {
    main.classList.remove('active');
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
    bio.classList.remove('active');
    messageIcon.classList.remove('active');
    sectionTwo.classList.remove('active');
    jobs.classList.remove('active');
    desc.classList.remove('active');
    education.classList.remove('active');
    for (let i = 0; i < actions.length; i++) {
      actions[i].classList.remove('active');
    }
    for (let i = 0; i < framework.length; i++) {
      framework[i].classList.remove('active');
    }
    for (let i = 0; i < live.length; i++) {
      live[i].classList.remove('active');
    }
    for (let i = 0; i < githubLogo.length; i++) {
      githubLogo[i].classList.remove('active');
    }
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