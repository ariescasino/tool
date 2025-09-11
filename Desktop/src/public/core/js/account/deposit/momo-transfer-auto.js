"use strict";


$(document).ready(() => {
    initMethodDeposit = new MomoTransferAuto();
    // initMethodDeposit.getListBankAuto();
    // initMethodDeposit.getListBankDeposit();

    // $('.bank-provide-select').on("change", function () {
    //     initMethodDeposit.showInfoBank($(this));
    // });
    $("#momo-amount").keyup(function () { initMethodDeposit.onChangedAmount($(this)) });

    // submit deposit
    $(".momo-btn-submit-deposit").on("click", function () { initMethodDeposit.submitDeposit($(this)) });
});