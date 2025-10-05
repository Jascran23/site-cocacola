const btnIconMobile = document.querySelector('.icon-menu-list');
const menuList = document.getElementById('navbar-mobile');
const navLinks = document.querySelectorAll('.list');

btnIconMobile.addEventListener(('click'), ()=> {
    if(menuList.style.display == 'none'){
        menuList.style.display = 'block';
        
    navLinks.forEach((link, index) => {  
        link.style.animation = `effectTranslate 0.5s ease-in forwards ${
        index / 7 + 0.1
        }s`;
    });

    navLinks.style.backgroundColor = 'red';
     
    }
    else {
        menuList.style.display = 'none'; 
        
        navLinks.forEach((link, index) => {         
                link.style = 'none';
            });
        }

})

function esconderMenu() {
    menuList.style.display = 'none';
}

function verificarJanela(){
    const larguraMinima = 585;

    if (window.innerWidth >= larguraMinima){
        esconderMenu();
    }
}

window.addEventListener('resize', verificarJanela);