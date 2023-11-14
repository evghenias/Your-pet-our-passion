
const mobileNavButtonShopHeader = document.querySelector('.mobile-nav-button-shop-header');
const mobileNavIconShopHeader = document.querySelector('.mobile-nav-button__icon-shop-header');
const mobileNavShopHeader = document.querySelector('.mobile-nav-shop-header');

mobileNavButtonShopHeader.addEventListener('click', function () {
    mobileNavIconShopHeader.classList.toggle('active');
    mobileNavShopHeader.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})