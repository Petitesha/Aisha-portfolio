const hamburger = document.querySelector('.hamburger img');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const main = document.querySelector('main');
const links = document.querySelectorAll('.links')
const lightmode = document.querySelector('.light-mode');
const darkmode = document.querySelector('.dark-mode img');


lightmode.addEventListener('click', () => {

    lightmode.style.display = 'none';
    darkmode.style.display = 'block';
    for (let i = 0; i < links.length; i++) {
        links[i].classList.toggle('active');
      }
})
darkmode.addEventListener('click', () => {
    darkmode.style.display = 'none';
   lightmode.style.display = 'block';
   for (let i = 0; i < links.length; i++) {
    links[i].classList.toggle('active');
  }
})

hamburger.addEventListener('click', () => { 
   hamburger.style.display = 'none';
        close.style.display = 'block';
      sidebar.style.display = 'block';
    })

    close.addEventListener('click', () => { 
        close.style.display = 'none';
         hamburger.style.display = 'block';
         sidebar.style.display = 'none';
 })