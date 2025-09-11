"use strict";

let UserBankList = [];

$(document).ready(async () => {
    $(".zopmijz8rytdZWDDDhpNu").hide();
    $(".bankUserAddForm").hide();
    $(".withdrawForm").hide();

    getListBankWithdraw();
    await reloadBalance();
    await getListUserBank();
    $("#form-withdraw").on("submit", function (event) { onSubmitWithdraw(event) });
    $("#userAddBankForm").on("submit", function (event) { onSubmitAddBank(event) });
    $("#amountWithdraw").keyup(function () { onChangedAmountTransaction($(this)) });
});

const getListBankWithdraw = () => {
    $.ajax({
        "url": `${mainApi}/api/payment/getListBankWithdraw`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            const ListBankDeposit = response.data;
            for (const item of ListBankDeposit) {
                $('#bankProvideUserAdd').append(`
                    <option value="${item.code}">${item.code}/${item.name}</option>
                `);
            }
        } else {
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
        }
    });
}

function onChangedAmountTransaction(input) {
    input.val(numberWithCommas(getOnlyNumberInString(input.val())));
}

function onSubmitWithdraw(event) {
    /// stop all action form
    event.preventDefault();

    try {
        let amountDeposit = getOnlyNumberInString($('#amountWithdraw').val());
        const bankName = $('#bankName').val();
        const bankNumber = $('#bankNumber').val();
        const bankProvide = $('#bankProvide').val();
        const passwd = $('#passwd').val();

        if (!bankName ||
            !bankNumber ||
            !bankProvide ||
            !passwd
        ) {
            initAuthNotifyModal(true, `Gợi ý`, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }

        amountDeposit = Number(amountDeposit);

        if (amountDeposit < 200000) {
            initAuthNotifyModal(true, `Gợi ý`, `Số tiền rút tối thiểu là 200.000 VND!`);
            return;
        }

        $.ajax({
            "url": `${mainApi}/api/payment/createRequestWithdraw`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                bankName,
                bankNumber,
                bankProvide,
                amount: amountDeposit,
                passwd
            }),
        }).done(function (response) {
            if (response.status) {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            } else {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            }
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, `Gợi ý`, `Đã có lỗi xảy ra! vui lòng thử lại!`);
    }

}

function onSubmitAddBank(event) {
    /// stop all action form
    event.preventDefault();

    try {
        const bankName = $('#bankNameUserAdd').val();
        const bankNumber = $('#bankNumberUserAdd').val();
        const bankProvide = $('#bankProvideUserAdd').val();

        if (!bankName ||
            !bankNumber ||
            !bankProvide
        ) {
            initAuthNotifyModal(true, `Gợi ý`, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }

        if (bankNumber.length < 7) {
            initAuthNotifyModal(true, `Gợi ý`, `Số tài khoản không hợp lệ!`);
            return;
        }

        $.ajax({
            "url": `${mainApi}/api/payment/userAddBank`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                bankProvide,
                bankName,
                bankNumber,
                bankBranch: "HA NOI"
            }),
        }).done(function (response) {
            if (response.status) {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            }
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, `Gợi ý`, `Đã có lỗi xảy ra! vui lòng thử lại!`);
    }
}

async function getListUserBank() {
    // getListUserBank
    return new Promise((resolve, reject) => {
        $.ajax({
            "url": `${mainApi}/api/payment/getListUserBank`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                UserBankList = response.data;
                if (UserBankList.length > 0) {
                    $(".zopmijz8rytdZWDDDhpNu").hide();
                    $(".bankUserAddForm").hide();
                    $(".withdrawForm").show();


                    for (const item of UserBankList) {
                        $('#bankProvide').append(`
                            <option value="${item.bankProvide}">${item.bankProvide} / ${item.bankNumber}</option>
                        `);
                    }
                    const bankUser = UserBankList[0];
                    const bankName = $('#bankName').val(bankUser.bankName.toUpperCase());
                    const bankNumber = $('#bankNumber').val(bankUser.bankNumber);
                } else {
                    $(".zopmijz8rytdZWDDDhpNu").show();
                    $(".bankUserAddForm").show();
                    $(".withdrawForm").hide();
                }
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
            }
        });
        resolve();
        checkUserBank();
    });
}

function checkUserBank() {
    if (UserBankList.length > 0) {
        $(".zopmijz8rytdZWDDDhpNu").hide();
        $(".bankUserAddForm").hide();
        $(".withdrawForm").show();
    } else {
        $(".zopmijz8rytdZWDDDhpNu").show();
        $(".bankUserAddForm").show();
        $(".withdrawForm").hide();
    }
}

function reloadBalance() {
    return new Promise((resolve, reject) => {
        $.ajax({
            "url": `${mainApi}/api/auth/me`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                const userData = response.user;
                $("#bankNameUserAdd").val(userData.name.toUpperCase());
                $("#amountWithdraw").val(numberWithCommas(userData.coin));
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
            }
        });
        resolve();
    });
}