const hamburger = document.querySelector('.hamburger img');
const close = document.querySelector('.close');
const sidebar = document.querySelector('.sidebar');


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