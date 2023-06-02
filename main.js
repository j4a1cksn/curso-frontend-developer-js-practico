const destok = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');
const amburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const procutDetalles = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toogleDestok)
amburger.addEventListener('click', tooglemobileMenu)
carrito.addEventListener('click', toogleCarrito)

function toogleDestok() {
    destok.classList.toggle('active');
}

function tooglemobileMenu() {
    procutDetalles.classList.add('active');
    mobileMenu.classList.toggle('active');
}

function toogleCarrito() {
    mobileMenu.classList.add('active');
    procutDetalles.classList.toggle('active');
}

const productList = [];
productList.push({
    name: 'bike',
    precio: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'pantalla',
    precio: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'computador',
    precio: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});


function renderProducts(arr) {
    for (produt of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', produt.image);
    
        const producInfo = document.createElement('div');
        producInfo.classList.add('product-info');
        
        const producInfoDiv = document.createElement('div');
        
        const producPrice = document.createElement('p');
        producPrice.innerText = '$' + produt.precio;
    
        const producInfoName = document.createElement('p');
        producInfoName.innerText = produt.name;
    
        producInfoDiv.appendChild(producPrice);
        producInfoDiv.appendChild(producInfoName);
    
        const producInfoFigure = document.createElement('figure');
        const producImgCard = document.createElement('img');
        producImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        producInfoFigure.appendChild(producImgCard);
    
        producInfo.appendChild(producInfoDiv);
        producInfo.appendChild(producInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(producInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);