$(document).ready(function () {
    
    // SLIDE SHOW2
    var swiperItem = new Swiper(".lobbyItems", {
        slidesPerView: 2,
        spaceBetween: 100,
        effect: "cude",
        speed: 1000,
        loop: true,
        grabCursor: false,
        loopFillGroupWithBlank: false,
        centeredSlides: true,
        centeredSlidesBounds: true,
        centeredSlides: true,
        initialSlide: 1,
        autoplay: {
            delay: 1000,
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
