const menuEmail = document.querySelector('.navbar-email');
const desktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleMenuEmail);
menuHamIcon.addEventListener('click', toggleMenuMobil);
menuCarritoIcon.addEventListener('click', toggleListCarrito);

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
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: "Computer",
    img: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 750,
})
productList.push({
    name: "Headphones",
    img: "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 150,
})
productList.push({
    name: "Phone",
    img: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 500,
})
productList.push({
    name: "Watch",
    img: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg",
    price: 150,
})
productList.push({
    name: "Production Kit",
    img: "https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg",
    price: 850,
})
productList.push({
    name: "Setup",
    img: "https://images.pexels.com/photos/4930018/pexels-photo-4930018.jpeg",
    price: 1380,
})
productList.push({
    name: "Microphone",
    img: "https://images.pexels.com/photos/3962990/pexels-photo-3962990.jpeg",
    price: 180,
})
productList.push({
    name: "Citizen Watch",
    img: "https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 450,
})
productList.push({
    name: "Cap",
    img: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg",
    price: 99,
})
productList.push({
    name: "Tablet",
    img: "https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 390,
})
productList.push({
    name: "Agenda",
    img: "https://images.pexels.com/photos/163187/coffee-tablet-headphones-work-163187.jpeg",
    price: 30,
})
productList.push({
    name: "Notes book",
    img: "https://images.pexels.com/photos/5712452/pexels-photo-5712452.jpeg",
    price: 25,
})
productList.push({
    name: "Book kit",
    img: "https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg",
    price: 120,
})
productList.push({
    name: "Glasses",
    img: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 110,
})
productList.push({
    name: "Wallet",
    img: "https://images.pexels.com/photos/12495665/pexels-photo-12495665.jpeg",
    price: 85,
})

function detallesDivProductos(arrayProduct){
    for (product of arrayProduct){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

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

detallesDivProductos(productList);


/* Utlizando la API de platzi
let container = document.querySelector('.cards-container');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
    return fetch(url);
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        const fragment = document.createDocumentFragment();
        let card = '';
        for (let i = 0; i < 150; i++) {
            card += `<div class="product-card">
            <img src="${productos[i].images[0]}" alt="">
                <div class="product-info">
                        <div>
                            <p>$ ${productos[i].price}</p>
                            <p>${productos[i].title}</p>
                        </div>
                    <figure>
                        <img src="../icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
        }
        fragment.append(card);
        container.innerHTML = fragment.textContent
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizado'))

    */