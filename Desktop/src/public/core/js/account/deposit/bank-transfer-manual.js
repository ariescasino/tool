"use strict";


$(document).ready(() => {
    initMethodDeposit = new BankTransferManual();
    initMethodDeposit.getListBankManual();
    initMethodDeposit.getListBankDeposit();

    $('.bank-provide-select').on("change", function () {
        initMethodDeposit.showInfoBank($(this));
    });
    $("#amount").keyup(function () { initMethodDeposit.onChangedAmount($(this)) });
    
    // Xử lý sự kiện khi người dùng nhấp vào nút mở modal nạp tiền
    initMethodDeposit.handleDepositModalButtonClick();

    // Xử lý sự kiện khi người dùng nhấp vào nút mở hoan thanh nạp tiền
    initMethodDeposit.handleConfirmDepositModalButtonClick();

    // submit deposit
    $(".btn-submit-deposit").on("click", function () { initMethodDeposit.submitDeposit($(this)) });
});