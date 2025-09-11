"use strict";

$(document).ready(() => {
    $(".auth-method").on('click', 'li a', function () {
        $(".auth-method li a").removeClass("current");
        $(this).addClass("current");
        changeTabMethod($(this).attr("data-method-type"));
    });
    $("app-login").show();
    $("app-register").hide();

    // add phone and email to form register
    $('#registerForm input#email').val(`guest000${RandomUserName(8).toLowerCase()}@gmail.com`);
    // $('#registerForm input#phone').val(randomPhone());

    // login btn
    $(".btn-submit-login").on("click", function () { loginPOST($(this)) });
    // register btn
    $(".btn-submit-register").on("click", function () { registerPOST($(this)) });
});

function hideAllMethod() {
    $("app-login").hide();
    $("app-register").hide();
}

function changeTabMethod(type) {
    hideAllMethod();

    if (type == "register") {
        $("app-register").show();
    } else if (type == "login") {
        $("app-login").show();
    }
}

function loginPOST(element) {
    try {
        const username = $('#loginForm input#username').val();
        const password = $('#loginForm input#password').val();

        if (!username || !password) {
            initAuthNotifyModal(true, "Vui lòng đầy đủ thông tin");
            return;
        }
        element.prop("disabled", true);
        $.ajax({
            "url": "/auth/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "username": username,
                "password": password
            }),
        }).done(function (response) {
            element.prop("disabled", false);
            if (response.status) {
                setTimeout(() => {
                    window.location = "/";
                }, 200);
            } else {
                initAuthNotifyModal(true, response.msg);
            }
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, "Có lỗi xảy ra, vui lòng thử lại!");
    }
}

function registerPOST(element) {
    try {
        if (!$('#registerForm input#username').val() ||
            !$('#registerForm input#password').val() ||
            !$('#registerForm input#password_cf').val() ||
            !$('#registerForm input#name').val() ||
            !$('#registerForm input#phone').val() ||
            !$('#registerForm input#email').val()) {
            initAuthNotifyModal(true, "Vui lòng đầy đủ thông tin");
            return;
        }

        const testUsername = new RegExp('^[a-zA-Z0-9]+$');
        const testName = new RegExp("^[a-zA-Z \s\.\!\?\"\-]+$");
        const testEmail = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");

        // validate input type  
        if (!testUsername.test($('#registerForm input#username').val())) {
            initAuthNotifyModal(true, "Tên tài khoản không hợp lệ!");
            return;
        }
        if (!testName.test($('#registerForm input#name').val())) {
            initAuthNotifyModal(true, "Họ và tên không hợp lệ!");
            return;
        }
        if (!testEmail.test($('#registerForm input#email').val())) {
            initAuthNotifyModal(true, "Email không hợp lệ");
            return;
        }

        // validate string length
        if ($('#registerForm input#username').val().length < 5 || $('#registerForm input#username').val().length > 20) {
            initAuthNotifyModal(true, "Tên tài khoản không được nhỏ hơn 5 và lớn hơn 20 ký tự!");
            return;
        }
        if ($('#registerForm input#name').val().length <= 5 || $('#registerForm input#name').val().length > 50) {
            initAuthNotifyModal(true, "Họ và tên không được nhỏ hơn 5 và lớn hơn 50 ký tự!");
            return;
        }
        if ($('#registerForm input#email').val().length < 5 || $('#registerForm input#email').val().length > 50) {
            initAuthNotifyModal(true, "Email không hợp lệ");
            return;
        }
        if ($('#registerForm input#phone').val().length < 9 || $('#registerForm input#phone').val().length > 15) {
            initAuthNotifyModal(true, "Số điện thoại không hợp lệ!");
            return;
        }
        if ($('#registerForm input#password').val().length < 5 || $('#registerForm input#password').val().length > 30) {
            initAuthNotifyModal(true, "Mật khẩu không được nhỏ hơn 8 và lớn hơn 20 ký tự");
            return;
        }
        if ($('#registerForm input#password').val() !== $('#registerForm input#password_cf').val()) {
            initAuthNotifyModal(true, "2 mật khẩu không trùng khớp!");
            return;
        }

        element.prop("disabled", true);
        $.ajax({
            "url": "/auth/register",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "name": $('#registerForm input#name').val(),
                "username": $('#registerForm input#username').val(),
                "refcode": (!$('#registerForm input#refcode').val()) ? null : $('#registerForm input#refcode').val(),
                "email": $('#registerForm input#email').val(),
                "phone": $('#registerForm input#phone').val(),
                "password": $('#registerForm input#password').val()
            }),
        }).done(function (response) {
            element.prop("disabled", false);
            if (response.status) {
                setTimeout(() => {
                    window.location = "/";
                }, 200);
            } else {
                initAuthNotifyModal(true, response.msg);
            }
        });

    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, "Có lỗi xảy ra, vui lòng thử lại!");
    }
}
