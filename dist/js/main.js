const menuButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const navItems = document.querySelectorAll('.nav-item');
const container = document.querySelector('.container');
const menuNav = document.querySelector('.menu-nav');
//set initial menu state
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);



function toggleMenu(){
    if(!showMenu){
        container.classList.add('back');
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        // set menu state
        showMenu = true;
        setTimeout

    }else{
        container.classList.remove('back')
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        
        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu = false;
    }
} 
