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

// =============== INSERIR CATALOGO DE PRODUTOS =================
    // INSERIR IMAGENS DOS PRODUTOS

    const CatalogProducts = [
    { // MORANGO
        img: "./img/bottle.png",  //Imagem do Produto
        nome: "Coca cola",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make", //Descrição do Produto
    },
    { // ABACAXI
        img: "./img/bottle-clean.png",  //Imagem do Produto
        nome: "Coca cola",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // CAJÁ
        img: "./img/cokeoriginal.png",  //Imagem do Produto
        nome: "Coca cola",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // FRUTAS VERMELHAS
        img: "./img/pecoke.png",  //Imagem do Produto
        nome: "Coca cola",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // KIWI
        img: "./img/zerocoke.png",  //Imagem do Produto
        nome: "Coca cola",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    { // MARACUJÁ
        img: "./img/3dcoke.png",  //Imagem do Produto
        nome: "Coca cola",    //Nome do Produto
        descricao: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make" //Descrição do Produto
    },
    ];

    const localCatalog = document.getElementById("catalog-slide");

    // PEGANDO OS BOTÕES DAS CATEGORIAS
    

    // INSERINDO OS PRODUTOS
    function inserirProdutos() 
    {
    
    
      CatalogProducts.forEach((produto, index) => 
        {
            const cards = document.createElement("div") ;
            cards.classList.add("item");
            cards.setAttribute("style", `background-image: url(${produto.img})`);     

            if(index == 0)
            {
                cards.classList.add("show");
            }

            const templateProdutos = `
                <div class="content">
                    <div class="name">${produto.nome}</div>
                    <div class="des">${produto.descricao}</div>
                    <button>See More</button>
                </div>

                <div class="container-image" style="background-image: url(${produto.img});">
                
                </div>            
            `;

            cards.innerHTML = templateProdutos;

            localCatalog.appendChild(cards);
      
        })
    }
     
    inserirProdutos();

    
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".catalog-slide .item");

  document.querySelector(".catalog-slide").appendChild(items[0]);

  items[1].classList.add("show");
  items[0].classList.remove("show");
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".catalog-slide").prepend(items[items.length - 1]); // here the length of items = 6

  items[0].classList.remove("show");
  items[5].classList.add("show");
  console.log(items[5].textContent + "2");
  console.log(items[0].textContent + "0");
});
// FIM ANIMAÇÃO DO SLIDER DE PRODUTOS
// =============== INSERIR CATALOGO DE PRODUTOS =================