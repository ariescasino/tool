"use strict";


$(document).ready(() => {
    initMethodDeposit = new BankTransferAuto();
    initMethodDeposit.getListBankAuto();
    // initMethodDeposit.getListBankDeposit();

    // $('.bank-provide-select').on("change", function () {
    //     initMethodDeposit.showInfoBank($(this));
    // });
    $("#auto-amount").keyup(function () { initMethodDeposit.onChangedAmount($(this)) });

    // submit deposit
    $(".auto-btn-submit-deposit").on("click", function () { initMethodDeposit.submitDeposit($(this)) });
});