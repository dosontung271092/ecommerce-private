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

// Product row
var swiper = new Swiper(".product__latest", {
    slidesPerView: 5,
    spaceBetween: 5,
    grabCursor: true,
    navigation: {
        nextEl: ".product-row-header__btn--prev",
        prevEl: ".product-row-header__btn--next",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        "@0.65": {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        "@1.65": {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        "@2.00": {
            slidesPerView: 5,
            spaceBetween: 5,
        },
    }
});

// Post row
var swiper = new Swiper(".post__latest", {
    slidesPerView: 5,
    spaceBetween: 5,
    grabCursor: true,
    navigation: {
        nextEl: ".post-row-header__btn--prev",
        prevEl: ".post-row-header__btn--next",
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        "@0.65": {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        "@1.65": {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        "@2.00": {
            slidesPerView: 5,
            spaceBetween: 25,
        },
    }
});