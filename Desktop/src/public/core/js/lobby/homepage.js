(function () {

})();

$(document).ready(() => {
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
            delay: 6000,
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

    // POPULAR GAME CATEGORY
    // list-unstyled popular-game
    function changeImageAndTextPopularList(type) {
        switch (type) {
            case "fish":
                $("._1_jiWOfz_BcBRtks1CLaeW img").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/75e5ceb37ef22d468a81c28dd69e56de.jpg").hide().fadeIn(100);
                $("._3LoZp49K5CfZeIIBXXzJl3 .title").html("Bắn Cá");
                $("._3LoZp49K5CfZeIIBXXzJl3 .desc").html("Nền tảng câu cá hàng đầu thế giới có nhiều cách chơi và quà mỗi ngày");
                $("._3LoZp49K5CfZeIIBXXzJl3 .playBtn").attr("ng-href", "/Lobby/Fish").attr("href", "/Lobby/Fish");
                break;
            case "slot":
                $("._1_jiWOfz_BcBRtks1CLaeW img").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/1b14965bbe1c95a76a03e53633267edf.jpg").hide().fadeIn(100);
                $("._3LoZp49K5CfZeIIBXXzJl3 .title").html("Nổ Hũ");
                $("._3LoZp49K5CfZeIIBXXzJl3 .desc").html("Các NỔ HŨ rất phong phú và đa dạng về nhiều mặt, từ thể loại kinh điển cho đến nhiều thứ khác.");
                $("._3LoZp49K5CfZeIIBXXzJl3 .playBtn").attr("ng-href", "/Lobby/Game").attr("href", "/Lobby/Game");
                break;
            case "casino":
                $("._1_jiWOfz_BcBRtks1CLaeW img").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/98f062632310605efd6d06af9e5a045f.jpg").hide().fadeIn(100);
                $("._3LoZp49K5CfZeIIBXXzJl3 .title").html("Casino");
                $("._3LoZp49K5CfZeIIBXXzJl3 .desc").html("Chúng tôi sẽ mang lại cho bạn Trải nghiệm thực tế trong sòng bạc");
                $("._3LoZp49K5CfZeIIBXXzJl3 .playBtn").attr("ng-href", "/Lobby/Live").attr("href", "/Lobby/Live");
                break;
        }
    }

    $(".popular-game").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".popular-game li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeImageAndTextPopularList($(this).attr("data-popular"));
    });

    // jackpot countup
    const countUpJackp = new countUp.CountUp('jackpot-countup', 2170098025, {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ",",
        duration: 10,
    });
    countUpJackp.start();

    // Slot Game Release
    function changeTabGameRelease(type) {
        switch (type) {
            case "propose":
                $("._3ppcwOkSyQWl-WAP_h_oej ul#propose").show();
                $("._3ppcwOkSyQWl-WAP_h_oej ul#hot").hide();
                break;
            case "hot":
                $("._3ppcwOkSyQWl-WAP_h_oej ul#propose").hide();
                $("._3ppcwOkSyQWl-WAP_h_oej ul#hot").show();
                break;
        }
    }
    $(".slot-game").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".slot-game li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabGameRelease($(this).attr("data-release"));
    });

});
