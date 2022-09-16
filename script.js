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
const experience = document.querySelector('.desc');
const actions = document.querySelectorAll('.actions');
const framework = document.querySelectorAll('.framework');
const live = document.querySelectorAll('.live');
const githubLogo = document.querySelectorAll('.github-button');
const education = document.querySelector('.education');

const experiences = [
 {
 id: 1,
 title: 'She code Developer',
 subtitle: 'Learning and building projects',
 time: 'June 2022 - Present',
 place: 'Virtual training',
 duties: [
 'Learning the basics of Html,Css and JavaScript',
 'Building of projects with the knowledge learnt',
 'Techical Presentation on projects done',
 ],
 },
 {
 id: 2,
 title: 'Easy rent Developer',
 subtitle: 'Building a Project',
 time: 'May 2022 - June 2022',
 place: 'Abeokuta/Ogun State',
 duties: [
 'Implementing the property details page',
 'Building of the hero-section of the landing page',
 'Dynamically rendering components',
 ],
 },
 {
 id: 3,
 title: 'Grazac Academy Intern',
 subtitle: 'Learning and building projects',
 time: 'January 2022 - April 2022',
 place: 'Abeokuta/Ogun State',
 duties: [
 'Learnt Basics of JavaScript and React',
 'Building a one-page website',
 'Implementing JavaScript on the projects done',
 ],
 },
];

let mode = 'dark';

const changeExperience = (evt, id = 1) => {
 console.log(evt);
 const exp = experiences.find((item) => item.id === id);
 const { title, subtitle, time, place, duties } = exp;
 let duty = '';
 experience.innerHTML = '';
 duties.forEach((item) => {
 duty += `<h4> - ${item} </h4>`;
 });

 const markup = `
 <h3>${title}</h3>
 <div class="year">
 <h4>${subtitle}</h4>
 <h4 class="present">${time}</h4>
 </div>
 <p>${place}</p>
 ${duty}
 `;

 experience.innerHTML = markup;

 if (evt) {
 const curr = document.querySelector('.curr');
 console.log(mode);
 if (mode === 'light') {
 curr.classList.remove('curr');
 curr.classList.remove('active');
 evt.target.classList.add('curr');
 evt.target.classList.add('active');
 } else {
 curr.classList.remove('curr');
 evt.target.classList.add('curr');
 }
 }
};

changeExperience();

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
 const desc = document.querySelector('.desc p');
 const curr = document.querySelector('.curr');
 // main.classList.toggle('active');
 if (appearance === 'light') {
 curr.classList.add('active');
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
 curr.classList.remove('active');

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
 const firsexp = jobs.firstElementChild;
 if (mode === 'light') {
 firsexp.classList.add('active');
 } else {
 firsexp.classList.remove('active');
 }
 changeMode(mode);
};

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

getModeFromLocalStorage();
