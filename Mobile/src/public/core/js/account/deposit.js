"use strict";

let initMethodDeposit;

let arrMethod = [
    'bank-transfer-manual',
    'bank-transfer-auto',
    'momo-transfer-auto',
    'zalo-transfer-auto',
    'card-transfer-auto',
    'viettel-transfer-auto',
    'usdt-transfer-auto'
];

$(document).ready(() => {
    // select method
    $(".deposit-method-list").on('click', 'li', function () {
        $(".deposit-method-list li.select").removeClass("select");
        $(this).addClass("select");
        changeMethod($(this).attr("data-method"));
    });
});

function resetAllFormDeposit() {
    arrMethod.forEach((method) => { $("." + method + "-form").hide(); });
};

function changeMethod(type) {
    $(".no-method-select").hide();
    // reset form
    resetAllFormDeposit();
    loadScript(type);
}


function loadScript(scriptName) {
    /* Adding the script tag to the head as suggested before */
    var scriptPosistion = document.getElementById('scriptMethod');
    scriptMethod.innerHTML = "";
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "/core/js/account/deposit/" + scriptName + ".js";
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = handler;
    script.onload = handler;

    // Fire the loading
    scriptPosistion.appendChild(script);

    function handler() {
        //console.log('script ' + scriptName + ' was added!');
    }
}

// Class Handle Method

class BankTransferManual {
    constructor() {
        $("." + arrMethod[0] + "-form").fadeIn();
        $(".info-bank").hide();
        this.listBank = [];
        this.listBankDeposit = [];
    }
    getListBankManual() {
        $.ajax({
            "url": `${mainApi}/api/payment/getListManualBank`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                this.listBank = response.data;
                $('.bank-provide-select').html(``);
                $('.bank-provide-select').html(`<option value="" class="ng-scope">Vui lòng chọn ngân hàng muốn chuyển khoản</option>`);

                this.listBank.forEach((item) => {
                    $('.bank-provide-select').append(`
                        <option value="${item.id}" class="ng-scope">${item.bankProvide.toUpperCase()}</option>
                    `);
                });
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
    }
    getBankDataById(bankId) {
        for (const bank of this.listBank) {
            if (bank.id == bankId) {
                return bank;
            }
        }
    }
    getListBankDeposit() {
        $.ajax({
            "url": `${mainApi}/api/payment/getListBankDeposit`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                this.listBankDeposit = response.data;
                $('.bank-provide-user-select').html(``);
                $('.bank-provide-user-select').html(`<option value="" class="ng-scope">Vui lòng chọn ngân hàng</option>`);

                for (const item of this.listBankDeposit) {
                    $('.bank-provide-user-select').append(`
                        <option value="${item.code}">${item.name} - ${item.code}</option>
                    `);
                }
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
    }

    showInfoBank(bankSelect) {
        const bankId = bankSelect.val();
        if (bankId == "") {
            $(".info-bank").hide();
            return;
        }
        $("#bankName").val(this.getBankDataById(bankId).bankName.toUpperCase());
        $("#bankNumber").val(this.getBankDataById(bankId).bankNumber);
        $("#content").val($(".sidebar-name").text().trim().toUpperCase());

        $(".info-bank").fadeIn();
    }
    changeAmount(amount, input) {
        input.val(amount);
        this.onChangedAmount(input);
    }
    onChangedAmount(input) {
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
    }
    onChangedBankName(input) {
        input.val(nonAccentVietnamese(input.val()).toUpperCase());
    }
    submitDeposit(element) {
        if (!$('.bank-provide-select').val()) {
            initAuthNotifyModal(true, `Vui lòng chọn ngân hàng mà bạn muốn chuyển khoản!`);
            return;
        }
        const bank = "nothingmb";
        if (!bank) {
            initAuthNotifyModal(true, `Vui lòng chọn ngân hàng bạn đã sử dụng để chuyển khoản!`);
            return;
        }
        const amountDeposit = getOnlyNumberInString($('#amount').val()) >> 0;
        const nameDeposit = "nothingmb";
        const numberDeposit = 9999999;
        const bankDeposit = this.getBankDataById($('.bank-provide-select').val() >> 0).bankProvide;
        const transIdDeposit = $('#transIdDeposit').val();

        if (!nameDeposit ||
            !numberDeposit ||
            !bankDeposit
        ) {
            initAuthNotifyModal(true, `Vui lòng nhập đầy đủ thông tin trước khi nhấn xác nhận!`);
            return;
        }

        if (amountDeposit <= 0) {
            initAuthNotifyModal(true, `Số tiền nạp không hợp lệ!`);
            return;
        }

        element.prop('disabled', true);
        element.html('Đang tạo yêu cầu...');

        setTimeout(() => {
            $.ajax({
                "url": `${mainApi}/api/payment/createRequestManualBank`,
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                "data": JSON.stringify({
                    bank,
                    nameDeposit,
                    bankDeposit,
                    numberDeposit,
                    transIdDeposit,
                    amountDeposit
                }),
            }).done(function (response) {
                element.prop('disabled', false);
                element.html('Xác nhận thanh toán');

                if (response.status) {
                    initAuthNotifyModal(true, `${response.msg}`);
                } else {
                    initAuthNotifyModal(true, `${response.msg}`);
                }
            });
        }, 2000);
    }
}

class BankTransferAuto {
    constructor() {
        $("." + arrMethod[1] + "-form").fadeIn();
        $(".info-bank").hide();
        this.listBank = [];
        this.listBankDeposit = [];
    }
    onChangedAmount(input) {
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
    }
    changeAmount(amount, input) {
        input.val(amount);
        this.onChangedAmount(input);
    }
    getListBankAuto() {
        $.ajax({
            "url": `${mainApi}/api/payment/getListAutoBankDeposit`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                this.listBank = response.data;
                $('.auto-bank-provide-select').html(``);
                $('.auto-bank-provide-select').html(`<option value="" class="ng-scope">Vui lòng chọn ngân hàng</option>`);

                this.listBank.forEach((item) => {
                    $('.auto-bank-provide-select').append(`
                        <option _ngcontent-serverapp-c181="" value="${item.code.toUpperCase()}" class="ng-scope">${item.shortname.toUpperCase()} - ${item.name.toUpperCase()}</option>
                    `);
                });
            } else {
                initAuthNotifyModal(true, `${response.msg}`);
            }
        });
    }
    openPaymentTab(paymentUrl) {
        window.location = "/Redirect?url=" + utoa(paymentUrl);

        // var userAgent = window.navigator.userAgent.toLowerCase(),
        //     ios = /iphone|ipod|ipad/.test(userAgent);
        // if (ios) {
        //     var winRef = window.open();
        // } else {
        //     var anchor = document.createElement('a');
        // }

        // if (ios) {
        //     winRef.location = "/Redirect?url=" + utoa(paymentUrl);
        // } else {
        //     anchor.href = "/Redirect?url=" + utoa(paymentUrl);
        //     anchor.target = "_blank";
        //     anchor.click();
        // }
    }
    submitDeposit(element) {
        const bank = $('.auto-bank-provide-select').val();
        const amountDeposit = getOnlyNumberInString($('#auto-amount').val()) >> 0;

        if (!bank) {
            initAuthNotifyModal(true, `Vui lòng nhập đầy đủ thông tin trước khi nhấn xác nhận!`);
            return;
        }

        if (amountDeposit <= 0) {
            initAuthNotifyModal(true, `Số tiền nạp không hợp lệ!`);
            return;
        }

        element.prop('disabled', true);
        element.html('Đang tạo yêu cầu...');

        $.ajax({
            "url": `${mainApi}/api/payment/createRequestAutoBank`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                subType: bank,
                amount: amountDeposit
            }),
        }).done(function (response) {
            element.prop('disabled', false);
            // element.html('Xác nhận thanh toán');
            element.hide();

            if (response.status) {
                console.log(`Payment deposit message: ${response.msg}`);
                initAuthNotifyModal(true, `Vui lòng thanh toán trong cửa sổ hiện lên!`);

                //initAuthNotifyModal(true, `${response.msg}`);
                element.hide();

                // $("#auto-info-qrcode").attr("src", response.data.qrCode.qrImageUrl);
                // $("#auto-info-bankName").val(response.data.bankName);
                // $("#auto-info-bankAccount").val(response.data.bankAccount);
                // $("#auto-info-content").val(response.data.content);
                // $(".auto-bank-info-container").show();
                setTimeout(() => {
                    // create payment window
                    initMethodDeposit.openPaymentTab(response.data.paymentUrl);
                }, 1000);

            } else {
                initAuthNotifyModal(true, `${response.msg}`);
                element.html('Tạo Yêu Cầu Nạp Tiền');
            }
        });
    }
}

class MomoTransferAuto {
    constructor() {
        $("." + arrMethod[2] + "-form").fadeIn();
        $(".info-bank").hide();
    }
    onChangedAmount(input) {
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
    }
    changeAmount(amount, input) {
        input.val(amount);
        this.onChangedAmount(input);
    }
    openPaymentTab(paymentUrl) {
        window.location = "/Redirect?url=" + utoa(paymentUrl);
        // var userAgent = window.navigator.userAgent.toLowerCase(),
        //     ios = /iphone|ipod|ipad/.test(userAgent);
        // if (ios) {
        //     var winRef = window.open();
        // } else {
        //     var anchor = document.createElement('a');
        // }

        // if (ios) {
        //     winRef.location = "/Redirect?url=" + utoa(paymentUrl);
        // } else {
        //     anchor.href = "/Redirect?url=" + utoa(paymentUrl);
        //     anchor.target = "_blank";
        //     anchor.click();
        // }
    }
    submitDeposit(element) {
        const amountDeposit = getOnlyNumberInString($('#momo-amount').val()) >> 0;

        if (amountDeposit <= 0) {
            initAuthNotifyModal(true, `Số tiền nạp không hợp lệ!`);
            return;
        }

        element.prop('disabled', true);
        element.html('Đang tạo yêu cầu...');

        $.ajax({
            "url": `${mainApi}/api/payment/createRequestAutoWallet`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                subType: "MOMO",
                amount: amountDeposit
            }),
        }).done(function (response) {
            element.prop('disabled', false);
            // element.html('Xác nhận thanh toán');
            element.hide();

            if (response.status) {
                console.log(`Payment deposit wallet message: ${response.msg}`);
                initAuthNotifyModal(true, `Vui lòng thanh toán trong cửa sổ hiện lên!`);

                //initAuthNotifyModal(true, `${response.msg}`);
                element.hide();

                // $("#auto-info-qrcode").attr("src", response.data.qrCode.qrImageUrl);
                // $("#auto-info-bankName").val(response.data.bankName);
                // $("#auto-info-bankAccount").val(response.data.bankAccount);
                // $("#auto-info-content").val(response.data.content);
                // $(".auto-bank-info-container").show();
                setTimeout(() => {
                    // create payment window
                    initMethodDeposit.openPaymentTab(response.data.paymentUrl);
                }, 1000);

            } else {
                initAuthNotifyModal(true, `${response.msg}`);
                element.html('Tạo Yêu Cầu Nạp Tiền');
            }
        });
    }
}