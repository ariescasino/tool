$(document).ready(function () {
    // SLIDE SHOW
    var swiperBanner = new Swiper(".mySwiperBanner", {
        spaceBetween: 30,
        effect: "cude",
        speed: 1000,
        slidersPerView: 1,
        loop: true,
        grabCursor: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        centeredSlidesBounds: true,
        centeredSlides: true,
        initialSlide: 1,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            //type: 'progressbar',
            clickable: true,
            renderCustom: function (swiper, current, total) {
                var names = [];
                $(".swiper-wrapper .swiper-slide").each(function (i) {
                    names.push($(this).data("name"));
                });
                var text = "<ul>";
                for (let i = 1; i <= total; i++) {
                    if (current == i) {
                        text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
                    } else {
                        text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
                    }
                }
                text += "</ul>";
                return text;
            }
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function () {
                $(".banner_notice").show();
            },
        },
    });
});
