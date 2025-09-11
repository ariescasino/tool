"use strict";

let passwdSecIsUpdated = false;

$(document).ready(function () {
    $("#btn-submit-changepwd").on("click", function () {
        submitChangePassword($(this));
    });

    $("#btn-cancel-changepwd").on("click", function () {
        cancelChangePassword($(this));
    });

    // check security passwd if have
    checkSecurityPasswd();
});

function checkSecurityPasswd() {
    $.ajax({
        "url": `${mainApi}/api/auth/check-security-passwd`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json"
        }
    }).then((response) => {
        if (response.status) {
            if (!response.isUpdated) {
                $("#oldPasswordBody").hide();
                initAuthNotifyModal(true, `Bạn chưa cập nhật mật khẩu bảo mật!<br>Hãy cập nhật ngay để bảo vệ tài khoản của bạn!`);
                return;
            } else {
                passwdSecIsUpdated = true;
                return;
            }
        } else {
            initAuthNotifyModal(true, `${response.msg}`);
            return;
        }
    }).catch((err) => {
        console.log(err);
        initAuthNotifyModal(true, `${err.statusText}`);
        return;
    });
}

function submitChangePassword(element) {
    const dailyOldPassword = $("#form-changpwd input#oldpassword").val();
    const dailyPassword = $("#form-changpwd input#newpassword").val();
    const dailyPasswordConfirm = $("#form-changpwd input#confirmpassword").val();

    if (passwdSecIsUpdated) {
        if (!dailyOldPassword ||
            !dailyPassword ||
            !dailyPasswordConfirm) {
            initAuthNotifyModal(true, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }
    } else {
        if (!dailyPassword ||
            !dailyPasswordConfirm) {
            initAuthNotifyModal(true, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }
    }

    if (dailyPassword !== dailyPasswordConfirm) {
        initAuthNotifyModal(true, `2 mật khẩu không khớp.`);
        return;
    }

    element.prop("disabled", true);
    element.html(`ĐANG THỰC HIỆN...`);

    setTimeout(() => {
        $.ajax({
            "url": `${mainApi}/api/auth/change-password-security`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "data": {
                oldPassword: dailyOldPassword,
                newPassword: dailyPassword,
                newPasswordConfirm: dailyPasswordConfirm
            }
        }).then((response) => {
            element.prop("disabled", false);
            element.html(`THAY ĐỔI`);
            if (response.status) {
                initAuthNotifyModal(true, `Đổi mật khẩu bảo mật thành công!`);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                return;
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
                return;
            }
        }).catch((err) => {
            console.log(err);
            initAuthNotifyModal(true, `${err.message}`);
            return;
        });
    }, 1500);
}


function cancelChangePassword(element) {
    $("#form-changpwd input#oldpassword").val(``);
    $("#form-changpwd input#newpassword").val(``);
    $("#form-changpwd input#confirmpassword").val(``);
}