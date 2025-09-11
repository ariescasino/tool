"use strict";

let passwdSecIsUpdated = false;

$(document).ready(() => {
    $("#security-btn-select").show();
    $("#security-changepwd-body").hide();
    $("#account-security-changepwd-body").hide();

    $("#form-changepwd").on('submit', function (event) { onSubmitChangePwd(event) });
    $("#form-changepwd-account").on('submit', function (event) { onSubmitChangePwdSec(event) });

    // check security passwd if have
    checkSecurityPasswd();
});

function initFormChangePwd(status) {
    if (status) {
        $("#security-btn-select").hide();
        $("#security-changepwd-body").show();
    } else {
        $("#security-btn-select").show();
        $("#security-changepwd-body").hide();
    }
    $("#account-security-changepwd-body").hide();
}

function initFormChangePwdSecurity(status) {
    if (status) {
        $("#security-btn-select").hide();
        $("#account-security-changepwd-body").show();
    } else {
        $("#security-btn-select").show();
        $("#account-security-changepwd-body").hide();
    }
    $("#security-changepwd-body").hide();
}

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
                $("#currentPasswdSec").hide();
                initAuthNotifyModal(true, `Cập nhật mật khẩu bảo mật!`, `Bạn chưa cập nhật mật khẩu bảo mật!<br>Hãy cập nhật ngay để bảo vệ tài khoản của bạn!`);
                return;
            } else {
                passwdSecIsUpdated = true;
                return;
            }
        } else {
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            return;
        }
    }).catch((err) => {
        console.log(err);
        initAuthNotifyModal(true, `Sự cố!`, `${err.statusText}`);
        return;
    });
}

function onSubmitChangePwd(event) {
    /// stop all action form
    event.preventDefault();

    const dailyOldPassword = $("#oldpwd").val();
    const dailyPassword = $("#newpwd").val();
    const dailyPasswordConfirm = $("#newpwdcf").val();

    if (!dailyOldPassword ||
        !dailyPassword ||
        !dailyPasswordConfirm) {
        initAuthNotifyModal(true, `Gợi ý`, `Vui lòng điền đầy đủ thông tin.`);
        return;
    }

    if (dailyPassword !== dailyPasswordConfirm) {
        initAuthNotifyModal(true, `Gợi ý`, `2 mật khẩu không khớp.`);
        return;
    }

    $.ajax({
        "url": `${mainApi}/api/auth/change-password`,
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
        if (response.status) {
            initAuthNotifyModal(true, `Gợi ý`, `Đổi mật khẩu thành công!`);
            initFormChangePwd(false);
            return;
        } else {
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            return;
        }
    }).catch((err) => {
        console.log(err);
        initAuthNotifyModal(true, `Gợi ý`, `${err.statusText}`);
        return;
    });
}

function onSubmitChangePwdSec(event) {
    /// stop all action form
    event.preventDefault();

    const dailyOldPassword = $("#oldpwd-account").val();
    const dailyPassword = $("#newpwd-account").val();
    const dailyPasswordConfirm = $("#newpwdcf-account").val();

    if (passwdSecIsUpdated) {
        if (!dailyOldPassword ||
            !dailyPassword ||
            !dailyPasswordConfirm) {
            initAuthNotifyModal(true, `Gợi ý`, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }
    } else {
        if (!dailyPassword ||
            !dailyPasswordConfirm) {
            initAuthNotifyModal(true, `Gợi ý`, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }
    }


    if (dailyPassword !== dailyPasswordConfirm) {
        initAuthNotifyModal(true, `Gợi ý`, `2 mật khẩu không khớp.`);
        return;
    }

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
        if (response.status) {
            initAuthNotifyModal(true, `Gợi ý`, `Đổi mật khẩu bảo mật thành công!`);
            initFormChangePwdSecurity(false);
            return;
        } else {
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            return;
        }
    }).catch((err) => {
        console.log(err);
        initAuthNotifyModal(true, `Gợi ý`, `${err.statusText}`);
        return;
    });
}