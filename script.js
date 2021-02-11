function MobileNavView(){
    updateIcon();
    displayMenu();
}


function updateIcon(){
    const hamburgerImg = document.querySelector(".header__hamburger__img");
     if(hamburgerImg.getAttribute('src') === 'images/icon-hamburger.svg'){
        hamburgerImg.src = 'images/icon-close.svg'
     }else{
        hamburgerImg.src = 'images/icon-hamburger.svg'
     }
}

function displayMenu(){
    const navHeader = document.querySelector(".header__nav");
    navHeader.classList.toggle("header__nav__display");
}