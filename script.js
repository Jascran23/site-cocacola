const btnIconMobile = document.querySelector('.icon-menu-list');
const menuList = document.getElementById('navbar-mobile');
const navLinks = document.querySelectorAll('.list');

btnIconMobile.addEventListener(('click'), ()=> {
    if(menuList.style.display == 'none'){
        menuList.style.display = 'block';
        
    navLinks.forEach((link, index) => {  
        link.style.animation = `effectTranslate 0.5s ease-in forwards ${
        index / 18 + 0.05
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
    const larguraMinima = 768;

    if (window.innerWidth >= larguraMinima){
        esconderMenu();
    }
}

window.addEventListener('resize', verificarJanela);

// ANIMAÇÃO DO CARROSSEL
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 6000);

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}
//FIM DA ANIMAÇÃO DO CARROSSEL ========