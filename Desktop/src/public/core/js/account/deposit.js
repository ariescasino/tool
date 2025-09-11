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
let arrCash = [
    50000,
    100000,
    300000,
    500000,
    1000000,
    5000000,
    10000000,
    30000000,
    50000000,
    100000000
];

$(document).ready(() => {
    // Thêm các tùy chọn số tiền vào danh sách
    arrCash.forEach(amount => {
        $('.cashin-select-amount').append(`
            <li class="cash-amount-option" data-amount="${amount}">${amount.toLocaleString()}</li>
        `);
    });

    // Xử lý sự kiện khi người dùng chọn một tùy chọn số tiền
    $('.cashin-select-amount').on('click', '.cash-amount-option', function () {
        // Bỏ lớp selected khỏi tất cả các mục
        $('.cash-amount-option.selected').removeClass('selected');

        // Thêm lớp selected vào mục được nhấp
        $(this).addClass('selected');

        // Cập nhật giá trị của ô nhập liệu
        const amount = $(this).data('amount');
        $('#amount').val(amount);
    });

    // Xử lý sự kiện khi người dùng thay đổi giá trị trong ô nhập liệu
    $('#amount').on('change', function () {
        // Lấy giá trị hiện tại của ô nhập liệu
        let value = $(this).val();
        // Loại bỏ tất cả các ký tự không phải số
        value = value.replace(/\D/g, '');
        // Cập nhật lại giá trị ô nhập liệu
        $(this).val(value);
    });

    // select method
    $(".deposit-method-list").on('click', 'li', function () {
        $(".deposit-method-list li.active").removeClass("active");
        $(this).addClass("active");
        changeMethod($(this).attr("data-method"));
    });

    // Xử lý sự kiện khi người dùng chọn một ngân hàng
    $('.toto-top-up__payment-methods').on('click', '.toto-top-up__payment-method-item button', function () {
        // Bỏ lớp selected khỏi tất cả các mục
        $('.toto-top-up__payment-method-item--selected').removeClass('toto-top-up__payment-method-item--selected');

        // Thêm lớp selected vào mục được nhấp
        $(this).closest('.toto-top-up__payment-method-item').addClass('toto-top-up__payment-method-item--selected');
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

function formatCurrency(amount) {
    // Chuyển đổi số thành chuỗi và đảm bảo rằng nó là số
    amount = Number(amount);

    // Định dạng chuỗi tiền tệ VND
    return amount.toLocaleString('vi-VN');
}

class BankTransferManual {
    constructor() {
        $("." + arrMethod[0] + "-form").fadeIn();
        $(".info-bank").hide();
        this.listBank = [];
        this.listBankDeposit = [];
    }

    handleConfirmDepositModalButtonClick() {
        const modalHtml = `
        <div class="confirmDeposit-layout">
            <div class="confirmDeposit-modal">
                <div class="confirmDeposit-modal__title">
                    <h2>Xác nhận giao dịch</h2>
                    <button class="cancel-confirmDeposit-modal">X</button>
                </div>
                <div class="confirmDeposit-modal__content">
                    <p>Vui lòng hoàn thành chuyển tiền trước khi nhấn XÁC NHẬN !!!</p>
                </div>
                <div class="confirmDeposit-modal__active">
                    <button class="cancel-confirmDeposit-modal">HỦY</button>
                    <button class="yes-confirmDeposit-modal btn-submit-deposit">XÁC NHẬN</button>
                </div>
            </div>
        </div>
    `;

        // Thêm sự kiện click vào phần tử .confirmDeposit
        $('.confirmDeposit').on('click', function () {
            $('#modal-container').html(modalHtml);
        });

        // Sự kiện để đóng modal khi nhấn vào nút HỦY
        $('#modal-container').on('click', '.cancel-confirmDeposit-modal', function () {
            $('#modal-container').empty();
        });
        // Sự kiện submit khi nhấn vào nút XÁC NHẬN
        $('#modal-container').on('click', '.btn-submit-deposit', function () {
            initMethodDeposit.submitDeposit($(this));
        });
    }

    handleDepositModalButtonClick() {

        $('.toto-top-up__open-deposit-modal-button').on('click', function () {
            // Lấy ngân hàng đã chọn
            const selectedBank = $('.toto-top-up__payment-method-item--selected img').attr('alt');

            // Lấy số tiền nạp
            const amount = parseInt($('#amount').val().replace(/,/g, ''), 10);

            // Kiểm tra dữ liệu trước khi gửi
            if (!selectedBank) {
                initAuthNotifyModal(true, `Gợi ý`, `Vui lòng chọn ngân hàng`);
                return;
            }

            if (!amount) {
                initAuthNotifyModal(true, `Gợi ý`, `Vui lòng nhập số tiền`);
                return;
            }

            // Kiểm tra số tiền tối thiểu
            if (amount < 50000) {

                initAuthNotifyModal(true, `Gợi ý`, `Số tiền tối thiểu là 50.000 VND.`);
                return;
            }

            $.ajax({
                url: `${mainApi}/api/payment/createRequestQR`,
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    bank: selectedBank,
                    amountDeposit: amount
                })
            }).done(function (response) {
                if (response.status) {
                    let timeLeft = 120; // Đặt thời gian là 120 giây
                    let timeoutHandler; // Biến cho bộ đếm ngược

                    // Ẩn firstStep
                    $('.firstStep').hide();

                    // Thêm lớp active vào bước tiếp theo trong thanh tiến trình
                    $('.toto-top-up__process-item').removeClass('active');
                    $('.toto-top-up__process-item').eq(1).addClass('active'); // Bước tiếp theo

                    // Hiển thị secondStep
                    $('.secondStep').show();

                    // Cập nhật nội dung secondStep dựa trên response trả về
                    $('.content__tentk__value').text(response.inforPayment.bankName);
                    $('.content__sotk__value').text(response.inforPayment.bankNumber);
                    $('.content__ndck__value').text(response.inforPayment.fullContent);
                    $('.content__sotien__value').text(formatCurrency(response.inforPayment.amount));
                    $('.qrCode img').attr('src', response.qrCodeUrl);

                    // Cập nhật hình ảnh trong class logo dựa trên bankProvide
                    let bankProvide = response.inforPayment.bankProvide;
                    let logoSrc;
                    switch (bankProvide) {
                        case 'BIVD':
                            logoSrc = '/images/banklist/logo-bidv-20220426071253.jpg';
                            break;
                        case 'TECHCOMBANK':
                            logoSrc = '/images/banklist/techcombank.png';
                            break;
                        case 'VIETCOMBANK':
                            logoSrc = '/images/banklist/vietcombank.jpg';
                            break;
                        default:
                            logoSrc = '/images/default-bank-logo.jpg'; // Trường hợp không khớp với bất kỳ ngân hàng nào
                    }
                    $('.logo img').attr('src', logoSrc);

                    // CHUC NANG TIMEING HOAN THANH
                    // Xử lý khi người dùng click vào nút "Hoàn Thành"
                    $('.confirmDeposit').on('click', function () {
                        // Hủy bộ đếm ngược
                        clearTimeout(timeoutHandler);
                        $('.timer').text(""); // Xóa bộ đếm thời gian khi người dùng nhấn nút
                    });

                    function updateTimer() {
                        if (timeLeft > 0) {
                            timeLeft--;
                            $('.timer').text('Thời gian còn lại là: ' + timeLeft);
                            timeoutHandler = setTimeout(updateTimer, 1000); // Cập nhật mỗi giây
                        } else {
                            window.location.reload(); // Tải lại trang khi hết thời gian
                        }
                    }

                    // Khởi động bộ đếm ngược
                    timeoutHandler = setTimeout(updateTimer, 1000);
                } else {
                    // Xử lý khi thất bại
                    initAuthNotifyModal(true, `Gợi ý`, response.msg);
                }
            }).fail(function (jqXHR) {
                initAuthNotifyModal(true, `Opps`, jqXHR.responseJSON.msg);
            });
        });
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
                $('.bank-provide-select').html(`<option value="" class="ng-scope">vui lòng chọn ngân hàng</option>`);

                this.listBank.forEach((item) => {
                    $('.bank-provide-select').append(`
                        <option value="${item.id}" class="ng-scope">${item.bankProvide.toUpperCase()}</option>
                    `);
                });
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
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
                $('.bank-provide-user-select').html(`<option value="" class="ng-scope">vui lòng chọn ngân hàng</option>`);

                for (const item of this.listBankDeposit) {
                    $('.bank-provide-user-select').append(`
                        <option value="${item.code}">${item.name} - ${item.code}</option>
                    `);
                }

            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
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

        // Display bank information 
        $(".info-bank").fadeIn();

    }
    onChangedAmount(input) {
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
    }
    submitDeposit(element) {
        const nameDeposit = document.querySelector('.content__tentk__value').textContent;
        const numberDeposit = document.querySelector('.content__sotk__value').textContent;
        const bank = 'nope';
        const amountDeposit = getOnlyNumberInString($('#amount').val()) >> 0;
        const bankDeposit = $('.toto-top-up__payment-method-item--selected img').attr('alt'); // Lấy ngân hàng từ hình ảnh đã chọn.
        const transIdDeposit = document.querySelector('.content__ndck__value').textContent;
        if (!bank || !nameDeposit || !numberDeposit || !bankDeposit) {
            initAuthNotifyModal(true, `Ops!`, `Vui lòng nhập đầy đủ thông tin trước khi nhấn xác nhận nha!`);
            return;
        }

        if (amountDeposit <= 0) {
            initAuthNotifyModal(true, `Ops!`, `Số tiền nạp không hợp lệ!`);
            return;
        }

        element.prop('disabled', true);
        element.html('Đang tạo yêu cầu...');

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
                initAuthNotifyModal(true, `Thành công!`, `${response.msg}`);
                // Ẩn modal
                $('#modal-container').empty();
                // Load lại trang
                location.reload();

            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
            }
        });
    }

}

class BankTransferAuto {
    constructor() {
        $("." + arrMethod[1] + "-form").fadeIn();
        this.listBank = [];
        this.listBankDeposit = [];
    }
    onChangedAmount(input) {
        input.val(numberWithCommas(getOnlyNumberInString(input.val())));
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
                $('.auto-bank-provide-select').html(`<option value="" class="ng-scope">vui lòng chọn ngân hàng</option>`);

                this.listBank.forEach((item) => {
                    $('.auto-bank-provide-select').append(`
                        <option value="${item.code.toUpperCase()}" class="ng-scope">${item.shortname.toUpperCase()} - ${item.name.toUpperCase()}</option>
                    `);
                });
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
            }
        });
    }
    submitDeposit(element) {
        const bank = $('.auto-bank-provide-select').val();
        const amountDeposit = getOnlyNumberInString($('#auto-amount').val()) >> 0;

        if (!bank) {
            initAuthNotifyModal(true, `Ops!`, `Vui lòng nhập đầy đủ thông tin trước khi nhấn xác nhận hen!`);
            return;
        }

        if (amountDeposit <= 0) {
            initAuthNotifyModal(true, `Ops!`, `Số tiền nạp không hợp lệ!`);
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
                initAuthNotifyModal(true, `Thành công!`, `Vui lòng thanh toán trong cửa sổ hiện lên!`);
                element.hide();

                setTimeout(() => {
                    // create payment window
                    window.open(
                        "/Redirect?url=" + utoa(response.data.paymentUrl),
                        'popUpWindow',
                        'height=850,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
                    );
                }, 1000);

                // $("#auto-info-qrcode").attr("src", response.data.qrCode.qrImageUrl);
                // $("#auto-info-bankName").val(response.data.bankName);
                // $("#auto-info-bankAccount").val(response.data.bankAccount);
                // $("#auto-info-content").val(response.data.content);
                // $(".auto-bank-info-container").show();
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
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
    submitDeposit(element) {
        const amountDeposit = getOnlyNumberInString($('#momo-amount').val()) >> 0;

        if (amountDeposit <= 0) {
            initAuthNotifyModal(true, `Ops!`, `Số tiền nạp không hợp lệ!`);
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
                console.log(`Payment deposit momo message: ${response.msg}`);
                initAuthNotifyModal(true, `Thành công!`, `Vui lòng thanh toán trong cửa sổ hiện lên!`);
                element.hide();

                setTimeout(() => {
                    // create payment window
                    window.open(
                        "/Redirect?url=" + utoa(response.data.paymentUrl),
                        'popUpWindow',
                        'height=850,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
                    );
                }, 1000);

                // $("#auto-info-qrcode").attr("src", response.data.qrCode.qrImageUrl);
                // $("#auto-info-bankName").val(response.data.bankName);
                // $("#auto-info-bankAccount").val(response.data.bankAccount);
                // $("#auto-info-content").val(response.data.content);
                // $(".auto-bank-info-container").show();
            } else {
                initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
                element.html('Tạo Yêu Cầu Nạp Tiền');
            }
        });
    }
}