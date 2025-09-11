"use strict";

let UserBankList = [];

$(document).ready(async () => {
    getListBankWithdraw();
    reloadBalance();
    await reloadBalance();
    await getListUserBank();
    $("#form-withdraw").on("submit", function (event) { onSubmitWithdraw(event) });
    $("#form-add-bank").on("submit", function (event) { onSubmitAddBank(event) });
    $('#bankName').keyup(function () { onChangedBankNameTransaction($(this)) });
    $("#amountWithdraw").keyup(function () { onChangedAmountTransaction($(this)) });

    $("#btn-cancel-withdraw").on("click", function () {
        cancelWithdraw($(this));
    });
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
            initAuthNotifyModal(true, `${response.msg}`);
        }
    });
}

function onChangedBankNameTransaction(input) {
    input.val(nonAccentVietnamese(input.val()).toUpperCase());
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
            initAuthNotifyModal(true, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }

        amountDeposit = Number(amountDeposit);

        if (amountDeposit < 200000) {
            initAuthNotifyModal(true, `Số tiền rút tối thiểu là 200.000 VND!`);
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
                reloadBalance();
                initAuthNotifyModal(true, `${response.msg}`);
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, `Đã có lỗi xảy ra! vui lòng thử lại!`);
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
                $("#user-header-balance").html(numberWithCommas(userData.coin))
                $("#amountWithdraw").val(numberWithCommas(userData.coin));
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
        resolve();
    });
}

function cancelWithdraw(element) {
    $('#amountWithdraw').val(`0`);
    $('#bankName').val(``);
    $('#bankNumber').val(``);
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
                    $(".userWithdrawForm").show();
                    $(".userAddBankBody").hide();


                    for (const item of UserBankList) {
                        $('#bankProvide').append(`
                            <option value="${item.bankProvide}">${item.bankProvide} / ${item.bankNumber}</option>
                        `);
                    }
                    const bankUser = UserBankList[0];
                    const bankName = $('#bankName').val(bankUser.bankName.toUpperCase());
                    const bankNumber = $('#bankNumber').val(bankUser.bankNumber);
                } else {
                    $(".userWithdrawForm").hide();
                    $(".userAddBankBody").show();
                }
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
        resolve();
    });
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
            initAuthNotifyModal(true, `Vui lòng điền đầy đủ thông tin.`);
            return;
        }

        if (bankNumber.length < 7) {
            initAuthNotifyModal(true, `Số tài khoản không hợp lệ!`);
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
                initAuthNotifyModal(true, `${response.msg}`);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, `Đã có lỗi xảy ra! vui lòng thử lại!`);
    }
}