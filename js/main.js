const menuEmail = document.querySelector('.navbar-email');
const desktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

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