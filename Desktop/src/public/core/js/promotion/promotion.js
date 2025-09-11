"use strict";

$(document).ready(() => {
    getPromotionData();
    // close btn 
    $(".close").on("click", function () { initPromotionModal(false); });
});


const getPromotionData = () => {
    $.ajax({
        "url": `${mainApi}/api/promotion`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        }
    }).done(function (response) {
        if (response.status) {
            response.data.forEach(promotion => {
                $(".promo-container").append(`
                    <div class="ng-scope promo-item" style="margin-left: 0px !important; padding: 10px; cursor: pointer; width: 50% !important; height: 240px !important" onclick="getPromotionInfo('${promotion.id}')">
                        <img data-src="${promotion.thumbnail}" alt="${promotion.title}" src="${promotion.thumbnail}">
                    </div>
                `);
            });
        } else {
            initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
        }
    });
}

const getPromotionInfo = (id) => {
    $.ajax({
        url: `${mainApi}/api/promotion/promotion-info/${id}`,
        headers: {},
        type: "GET",
        dataType: "json",
        success: (result) => {
            if (result.status) {
                //checkPromotionRegister(id);
                $('.content').html(result.data.content);
                $('.title').html(result.data.title);
                $('.thumbnail').attr("src", result.data.thumbnail);
                //$("#btn-register-promotion").attr("onclick", `registerPromotion('${result.data.id}', "register")`);
                initPromotionModal(true);
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
            }
        },
    });
}

const checkPromotionRegister = (id) => {
    $.ajax({
        url: `${mainApi}/api/promotion/promotion-check-register/${id}`,
        type: "GET",
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
        success: (result) => {
            if (result.status) {
                // true là đã đăng ký
                $("#btn-register-promotion").attr("onclick", `registerPromotion('${result.promotion}', "cancel")`);
                $("#btn-register-promotion").html(`Hủy đăng ký`);
            } else {
                //alert(result.msg);
                $("#btn-register-promotion").attr("onclick", `registerPromotion('${result.promotion}', "register")`);
                $("#btn-register-promotion").html(`Đăng ký tham gia`);
            }
        },
    });
}

const registerPromotion = (id, type) => {
    if (!isLogin) return Swal.fire({
        icon: 'error',
        title: 'Thất bại!',
        text: 'Vui lòng đăng nhập trước!',
        showCancelButton: false,
        confirmButtonText: 'Đóng'
    });

    $.ajax({
        "url": `${mainApi}api/promotion/promotion-register/` + id,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
        "data": JSON.stringify({
            "type": type
        }),
    }).done(function (response) {
        checkPromotionRegister(id);
        if (response.status) {
            Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: 'Yêu cầu thành công!',
                showCancelButton: false,
                confirmButtonText: 'Đóng'
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Thất bại!',
                text: response.msg,
                showCancelButton: false,
                confirmButtonText: 'Đóng'
            });
        }
    });

}

function initPromotionModal(status) {
    if (status) {
        showBackdropModal(true);
        $("._2Q5_8e9t7nS0te23FQXjLw").css("top", "-100px");
        $("._2Q5_8e9t7nS0te23FQXjLw").show();
        $("._2Q5_8e9t7nS0te23FQXjLw").animate({ top: '0' }, 100, () => { });
    } else {
        $("._2Q5_8e9t7nS0te23FQXjLw").animate({ top: '-700px' }, 200, function () {
            $(this).fadeOut();
            showBackdropModal(false);
        });
    }
}