const app = {
    slideBanner() {
        var bannerMobile = new Swiper(".banner__swiper", {
            loop: true,
            navigation: {
                nextEl: ".banner__swiper .swiper-button-next",
                prevEl: ".banner__swiper .swiper-button-prev",
            },
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
        });
    },
    tabGame() {
        $('.list-game .nav-item').click(function() {
            $('.list-game .nav-item').removeClass('active');
            $(this).addClass('active');
        })
    },
    focusInput() {
        $('.input-block input').on('input', function() {
            if ($(this).val() == '') {
                $(this).prev().removeClass('focus');
            } else {
                $(this).prev().addClass('focus');
            }
        })
        $('.action-block i').click(function() {
            $(this).toggleClass('fa-eye-slash fa-eye');
            if ($(this).hasClass('fa-eye-slash')) {
                $(this).parents('.action-block').prev().children('input').attr('type', 'text');
            } else {
                $(this).parents('.action-block').prev().children('input').attr('type', 'password');
            }
        })
    },
    tabQuestion() {
        $(".box-mess").click(function() {
            $(".box-mess").removeClass("active");
            $(this).addClass("active")
            $(".content-block").addClass("hide-content-block");
            if ($(this).hasClass("box-1")) {
                $(".content-block.block-1").removeClass("hide-content-block");
            } else if ($(this).hasClass("box-2")) {
                $(".content-block.block-2").removeClass("hide-content-block");
            } else {
                $(".content-block.block-3").removeClass("hide-content-block");
            }
        });
    },
    changeMess() {
        $(".box-mess").click(function() {
            $(".box-mess").removeClass("active");
            $(this).addClass("active")
            $(".content-block").addClass("hide-content-block");
            if ($(this).hasClass("box-1")) {
                $(".content-block.block-1").removeClass("hide-content-block");
            } else {
                $(".content-block.block-2").removeClass("hide-content-block");
            }
        });
        $(".msg-block .msg-card .detail-msg").click(function() {
            $(".content-wrapper, .nav-place").addClass("hide-content-block")
            $(".content-block-detail").removeClass("hide-content-block");
        })
    }
}

$(document).ready(function() {
    app.slideBanner();
    app.tabGame();
    app.focusInput();
    app.tabQuestion();
    app.changeMess();
    $("#timeStart").datepicker({
        dateFormat: 'yy-mm-dd'
    });
    $("#timeEnd").datepicker({
        dateFormat: 'yy-mm-dd'
    });
    // $('.QR_BANK').click(function(){
    //   showPopup('Đang bảo trì','');
    // })
    $('.ZALOPAY').click(function() {
        showPopup('Đang bảo trì', '');
    })

    function toggle(source) {
        // console.log(1)
        // document.getElementById("all").checked = true;
        $(".fa-trash-can").toggleClass("active-trash");
        checkboxes = document.getElementsByName('check');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = source.checked;
        }
    }

    function checkDelete() {
        checkboxes = document.getElementsByName('check');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            if (checkboxes[i].checked == true) {
                $(".fa-trash-can").addClass("active-trash");
                return true;
            } else {
                $(".fa-trash-can").removeClass("active-trash");
            }
        }
    }

    function checkFlase() {
        $(".fa-trash-can").removeClass("active-trash");
        document.getElementById('all').checked = false;
        checkboxes = document.getElementsByName('check');
        for (var i = 0, n = checkboxes.length; i < n; i++) {
            checkboxes[i].checked = false;
        }
    }
})


$(".close-popup-2 .icon-close-2 i").click(function() {
    $(".popup-center").addClass("hide-popup-img");
});
$(".close-icon, .close-btn").click(function() {
    $(".announcement-list").addClass("hide-popup-img");
});
var swiperpopup = new Swiper(".mySwiperPopup", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});