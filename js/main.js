const menuEmail = document.querySelector('.navbar-email');
const desktopMenuEmail = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleMenuEmail);


function toggleMenuEmail(){
    desktopMenuEmail.classList.toggle('inactive');
}

