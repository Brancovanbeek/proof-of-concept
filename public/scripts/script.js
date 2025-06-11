const openMenu = document.getElementById('toggle-menu-open');
const closeMenu = document.getElementById('toggle-menu-close');

    openMenu.addEventListener('click', function(event){
        event.preventDefault();

        const menu = document.querySelector('.header-nav');

        menu.classList.toggle('open');

    });