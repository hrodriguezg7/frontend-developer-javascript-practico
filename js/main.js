const API = 'https://api.escuelajs.co/api/v1';
function fetchData(url) { return fetch(url);}
let shoppingCart = {};

const menuEmail = document.querySelector('.navbar-email');
const desktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#detallesProduct');
const productDetailCloseIcon = document.querySelector('.detallesProduct-close');
let btnAddShopping = document.querySelector('.add-to-cart-button');
let imgProduct = document.getElementById('description-product-img');


menuEmail.addEventListener('click', toggleMenuEmail);
menuHamIcon.addEventListener('click', toggleMenuMobil);
menuCarritoIcon.addEventListener('click', toggleListCarrito);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
btnAddShopping.addEventListener('click', e => getItemsAside(e)); //comprar item desde aside

function toggleMenuEmail(){
    const isListCarritoClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isListCarritoClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenuEmail.classList.toggle('inactive');
}

function toggleMenuMobil(){
    const isListCarritoClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isListCarritoClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleListCarrito(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');
    const isEmailMenuClosed = desktopMenuEmail.classList.contains('inactive');
    if (!isMobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isEmailMenuClosed){
        desktopMenuEmail.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

// VER PRODUCTOS DE API
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 20; i++) {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.setAttribute('id', productos[i].id);

            const imgCard = document.createElement('img'); //CREANDO ETIQUETA IMG
            imgCard.setAttribute('src', productos[i].images[0]); //AGREGANDO EL SOURCE

            const productInfo = document.createElement('div'); //CREANDO ETIQUETA DIV
            productInfo.classList.add('product-info'); //AGREGAR UNA CLASE AL DIV

            productCard.append(imgCard, productInfo); // INSERTANDO EN DIV PADRE LOS ELEMENTOS QUE LLEVARA DENTRO DE EL

            const divText = document.createElement('div');
            productInfo.append(divText);

            const precio = document.createElement('p');
            precio.textContent = productos[i].price; //AGREGANDO CONTENIDO DENTRO DE LA ETIQUETA

            const nombre = document.createElement('p');
            nombre.textContent = productos[i].title;  //AGREGANDO CONTENIDO DENTRO DE LA ETIQUETA

            divText.append(precio, nombre);

            const figure = document.createElement('figure');
            const icon = document.createElement('img');
            icon.setAttribute('src', './icons/bt_add_to_cart.svg');
            icon.setAttribute('value', productos[i].id);

            // HACER CLICK EN UNA IMG DE CARDS
            imgCard.addEventListener('click', e => {openProductDetailAside(e, productInfo, productCard, productos);});

            figure.append(icon);
            productInfo.append(figure);

            fragment.append(productCard);
            icon.addEventListener('click', e => agregarCompra(e));
        }

        cardsContainer.append(fragment); //AGREGANDO TODOS LOS CARDS DENTRO DE UN CONTENEDOR

    })
    .catch(error => console.error(error)) // EN CASO DE ALGUN ERROR
    .finally(() => console.log('Finalizado')) //AL FINALIZAR SIN IMPORTAR SI HAY O NO ERROR


function openProductDetailAside(e, productInfo, productCard, productos){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    
    // COPIAR IMG DE CARD EN ASIDE
    imgProduct.setAttribute('src', e.target.src);

    // COPIAR LOS ELEMENTOS DE UN CARD AL ASIDE
    productDetailContainer.children[2].children[0].textContent = productInfo.children[0].children[0].textContent;
    productDetailContainer.children[2].children[1].textContent = productInfo.children[0].children[1].textContent;
    productDetailContainer.children[2].children[2].textContent = productos[productCard.getAttribute('id')].description;//traer la descripcion del producto
    productDetailContainer.children[2].children[3].setAttribute('value', productos[productCard.getAttribute('id')].id);//colocar id en el boton de compra del aside

}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
