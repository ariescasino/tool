"use strict";


$(document).ready(() => {
    $(".method-is-maintance").hide();
    initMethodDeposit = new BankTransferManual();
    initMethodDeposit.getListBankManual();
    initMethodDeposit.getListBankDeposit();

    $('.bank-provide-select').on("change", function () {
        initMethodDeposit.showInfoBank($(this));
    });

    // select amount
    $(".deposit-select-amount").on('click', 'li', function () {
        $(".deposit-select-amount li.selected").removeClass("selected");
        $(this).addClass("selected");
        initMethodDeposit.changeAmount($(this).attr("data-amount"), $("#amount"));
    });

    $("#amount").keyup(function () { initMethodDeposit.onChangedAmount($(this)) });
    $("#bankNameUser").keyup(function () { initMethodDeposit.onChangedBankName($(this)) });
    // submit deposit
    $(".btn-submit-deposit").on("click", function () { initMethodDeposit.submitDeposit($(this)) });
});