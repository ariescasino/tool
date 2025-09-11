$(document).ready(function () {
    var swiperItem = new Swiper(".swiper", {
        direction: 'horizontal',
        effect: "cude",
        speed: 400,
        slidesPerView: 5,
        grabCursor: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        centeredSlidesBounds: true,
        centeredSlides: true,
        initialSlide: 1,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});
