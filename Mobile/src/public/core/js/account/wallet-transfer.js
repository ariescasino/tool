"use strict";

let arrMethod = ["cashin", "cashout"];
let currentMethod = null;
let currentProvide = null;
let currentAmount = 0;
let arrGameProvide = [];
let arrCashInAmount = [
    50000,
    100000,
    300000,
    500000,
    1000000,
    5000000,
    10000000,
    30000000,
    50000000
];
let arrCashOutAmount = [
    50,
    100,
    300,
    500,
    1000,
    5000,
    10000,
    30000,
    50000
];

$(document).ready(() => {

    // keyup input cashin amount 
    $(".input-amount-cashin").keyup(function () { onChangedAmount($(this), true) });
    // keyup input cashout amount 
    $(".input-amount-cashout").keyup(function () { onChangedAmount($(this), false) });

    // submit cashin
    $(".btn-submit-cashin").on("click", function () { submitCashIn($(this)) });
    // submit cashout
    $(".btn-submit-cashout").on("click", function () { submitCashOut($(this)) });

    // select method
    $(".list-method").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".list-method li.select").removeClass("select");
        // adding classname 'active' to current click li 
        $(this).addClass("select");
        changeMethod($(this).attr("data-method"));
    });

    // select product
    $(".wallet-transfer-product-body").on('click', 'li', function () {
        $(".wallet-transfer-product-body li.selected").removeClass("selected");
        $(this).addClass("selected");
        selectProduct($(this).attr("data-product"));
    });

    // select amount cashin
    $(".wallet-transfer-cashin-select-amount").on('click', 'li', function () {
        $(".wallet-transfer-cashin-select-amount li.selected").removeClass("selected");
        $(this).addClass("selected");
        selectAmountCashIn($(this).attr("data-amount"));
    });
    // select amount cashout
    $(".wallet-transfer-cashout-select-amount").on('click', 'li', function () {
        $(".wallet-transfer-cashout-select-amount li.selected").removeClass("selected");
        $(this).addClass("selected");
        selectAmountCashOut($(this).attr("data-amount"));
    });
});


function changeMethod(type) {
    currentMethod = type;
    switch (type) {
        case arrMethod[0]:
            initCashInElement();
            break;
        case arrMethod[1]:
            initCashOutElement();
            break;
    }
}

function initCashInElement() {
    $(".no-method-select").hide();
    $(".wallet-transfer-cashin-body").fadeIn();
    $(".wallet-transfer-cashout-body").hide();
    $(".wallet-transfer-cashin-select-amount").html(``);

    arrCashInAmount.forEach((amount) => {
        $(".wallet-transfer-cashin-select-amount").append(`
            <li class="text-center" data-amount="${amount}"> <span class="ng-binding">${numberWithCommas(amount)}</span> </li>
        `);
    });

    // reset
    currentProvide = null;
    currentAmount = 0;
    arrGameProvide = [];
    // reset form
    $(".input-amount-cashin").val(0);
    $(".input-amount-exchange-cashin").val(0);
    // get list product
    getProduceSubnames();
}

function initCashOutElement() {
    $(".no-method-select").hide();
    $(".wallet-transfer-cashout-body").fadeIn();
    $(".wallet-transfer-cashin-body").hide();
    $(".wallet-transfer-cashout-select-amount").html(``);

    arrCashOutAmount.forEach((amount) => {
        $(".wallet-transfer-cashout-select-amount").append(`
            <li class="text-center" data-amount="${amount}"> <span class="ng-binding">${numberWithCommas(amount)}</span> </li>
        `);
    });

    // reset
    currentProvide = null;
    currentAmount = 0;
    arrGameProvide = [];
    // reset form
    $(".input-amount-cashout").val(0);
    $(".input-amount-exchange-cashout").val(0);
    // get list product
    getProduceSubnames();
}


const getProduceSubnames = () => {
    $(".wallet-transfer-product-element").fadeIn();
    $(".wallet-transfer-product-body").html(``);

    $.ajax({
        "url": `${mainApi}/api/game/gameAvalible`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            const ListSubname = response.data;
            for (const item in ListSubname) {
                arrGameProvide.push(ListSubname[item].name.toUpperCase());
                $(".wallet-transfer-product-body").append(`
                    <li class="text-center ng-scope" data-product="${ListSubname[item].type}"> 
                        <span class="ng-binding" id="wallet-${item.toUpperCase()}">
                            ${ListSubname[item].name.toUpperCase()}
                        </span>
                    </li>
                `);
                // check balance
                setTimeout(() => {
                    getWallet(item.toUpperCase(), ListSubname[item].name.toUpperCase());
                }, 100);
            }
        } else {
            initAuthNotifyModal(true, `${response.msg}`);
        }
    });
}

const getWallet = (gameID, gameName) => {
    $.ajax({
        "url": `${mainApi}/api/game/wallets/${gameID.toUpperCase()}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            $(`#wallet-${gameID}`).html(`(<o style="color: #c6c6c6;">${response.balance}</o>) ${gameName}`);
        } else {
            $(`#wallet-${gameID}`).html(`(<o style="color: #c6c6c6;">0</o>) ${gameName}`);
        }
    });
}

function selectProduct(type) { currentProvide = Number(type); }

function selectAmountCashIn(amount) {
    currentAmount = Number(amount) >> 0;
    $(".input-amount-cashin").val(numberWithCommas(currentAmount));
    $(".input-amount-exchange-cashin").val(numberWithCommas(currentAmount / 1000));
}

function selectAmountCashOut(amount) {
    currentAmount = Number(amount) >> 0;
    $(".input-amount-cashout").val(numberWithCommas(currentAmount));
    $(".input-amount-exchange-cashout").val(numberWithCommas(currentAmount * 1000));
}

function onChangedAmount(input, type) {
    if (type) { // nap vao
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
        $(".input-amount-exchange-cashin").val(numberWithCommas(getOnlyNumberInString(input.val()) / 1000));
        currentAmount = getOnlyNumberInString(input.val()) >> 0;
    } else { // rut ra
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
        $(".input-amount-exchange-cashout").val(numberWithCommas(getOnlyNumberInString(input.val()) * 1000));
        currentAmount = getOnlyNumberInString(input.val()) >> 0;
    }
}


function submitCashIn(element) {
    if (currentProvide == null) {
        initAuthNotifyModal(true, `Vui lòng chọn nhà cung cấp trò chơi.`);
        return;
    }
    if (currentAmount < 1000) {
        initAuthNotifyModal(true, `Số tiền phải lớn hơn 1000 VND.`);
        return;
    }
    element.prop("disabled", true);
    element.html(`Đang thanh toán...`);
    try {
        $.ajax({
            "url": `${mainApi}/api/game/wallet-transfer`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                amount: Number(currentAmount),
                type: currentProvide,
                transferType: (currentMethod == arrMethod[0]) ? 1 : (currentMethod == arrMethod[1]) ? 2 : null
            }),
        }).done(function (response) {
            element.prop("disabled", false);
            element.html(`Thanh toán ngay bây giờ`);
            if (response.status) {
                initAuthNotifyModal(true, `${response.msg}`);
                getProduceSubnames();
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }3
            reloadBalance();
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, `Có lỗi xảy ra vui lòng thử lại.`);
    }
}

function submitCashOut(element) {
    if (currentProvide == null) {
        initAuthNotifyModal(true, `Vui lòng chọn nhà cung cấp trò chơi.`);
        return;
    }
    if (currentAmount < 1) {
        initAuthNotifyModal(true, `Số điểm rút phải lớn hơn 0.`);
        return;
    }
    element.prop("disabled", true);
    element.html(`Đang thanh toán...`);
    try {
        $.ajax({
            "url": `${mainApi}/api/game/wallet-transfer`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                amount: Number(currentAmount),
                type: currentProvide,
                transferType: (currentMethod == arrMethod[0]) ? 1 : (currentMethod == arrMethod[1]) ? 2 : null
            }),
        }).done(function (response) {
            element.prop("disabled", false);
            element.html(`Thanh toán ngay bây giờ`);
            if (response.status) {
                initAuthNotifyModal(true, `${response.msg}`);
                getProduceSubnames();
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
            reloadBalance();
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, `Có lỗi xảy ra vui lòng thử lại.`);
    }
}

function reloadBalance() {
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
            $("#header-balance").html(numberWithCommas(userData.coin));
        } else {
            initAuthNotifyModal(true, `${response.msg}`);
        }
    });
}