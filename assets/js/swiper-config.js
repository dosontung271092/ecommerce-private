// Main menu
var swiper = new Swiper(".slider__main", {
    grabCursor: true,
    pagination: {
        el: ".slider__main .swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    autoplay: true,
});

// Latest product
var swiper = new Swiper(".product__latest", {
    slidesPerView: 5,
    spaceBetween: 5,
    grabCursor: true,
    navigation: {
        nextEl: ".product-latest-header__btn--prev",
        prevEl: ".product-latest-header__btn--next",
    },
});