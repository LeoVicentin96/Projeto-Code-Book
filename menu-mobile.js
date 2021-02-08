const menu = document.querySelector('.componentes')
const btnMenu = document.querySelector('.menu__hamburger');
const btnMenuClose = document.querySelector('.menu__hamburguer-fechar')



btnMenu.addEventListener('click', function(){
    menu.classList.add('menu__open');
    
    
})

btnMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu__open')
    
})
    
    
menu.addEventListener('click', function(){
    menu.classList.remove('menu__open')
})