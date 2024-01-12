const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    console.log("undido email")
     const isAsideClosed = aside.classList.contains('inactive');
    
    if (!desktopMenu.classList.contains('inactive') && !isAsideClosed ) {
     
        aside.classList.add('inactive');
     
    } else {
         desktopMenu.classList.toggle('inactive');
        
}

       
    
    
}


function toggleMobilMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    
}

function toggleCarritoAside() {
     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')) {
     desktopMenu.classList.add('inactive')
 }


    aside.classList.toggle('inactive');
    
}

