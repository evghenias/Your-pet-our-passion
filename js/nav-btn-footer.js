const mobileNavButtonFooter = document.querySelector('.mobile-nav-button-footer');
const mobileNavIconFooter = document.querySelector('.mobile-nav-button__icon-footer');
const mobileNavFooter = document.querySelector('.mobile-nav-footer');

mobileNavButtonFooter.addEventListener('click', function () {
    mobileNavIconFooter.classList.toggle('active');
    mobileNavFooter.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
})