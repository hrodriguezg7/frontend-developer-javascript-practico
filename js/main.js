const menuEmail = document.querySelector('.navbar-email');
const desktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleMenuEmail);
menuHamIcon.addEventListener('click', toggleMenuMobil);
menuCarritoIcon.addEventListener('click', toggleListCarrito);

function toggleMenuEmail(){
    const isListCarritoClosed = aside.classList.contains('inactive');

    if (!isListCarritoClosed){
        aside.classList.add('inactive');
    }
    desktopMenuEmail.classList.toggle('inactive');
}

function toggleMenuMobil(){
    const isListCarritoClosed = aside.classList.contains('inactive');

    if (!isListCarritoClosed){
        aside.classList.add('inactive');
    }
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
    aside.classList.toggle('inactive');
}

const productlist = [];
productlist.push({
    name: 'Bicleta Carreras',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress',
});
productlist.push({
    name: 'Bike',
    price: 130,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress',
});
productlist.push({
    name: 'Patineta',
    price: 420,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress',
});
productlist.push({
    name: 'Bicleta Montain',
    price: 520,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress',
});
productlist.push({
    name: 'Patines',
    price: 300,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress',
});
productlist.push({
    name: 'Rodilleras',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress',
});

function detallesDivProductos(arrayProduct){
    for (product of arrayProduct){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

}

detallesDivProductos(productlist);

