"use strict";


$(document).ready(() => {
    $(".method-is-maintance").hide();
    initMethodDeposit = new BankTransferAuto();
    initMethodDeposit.getListBankAuto();

    // select amount
    $(".auto-deposit-select-amount").on('click', 'li', function () {
        $(".auto-deposit-select-amount li.selected").removeClass("selected");
        $(this).addClass("selected");
        initMethodDeposit.changeAmount($(this).attr("data-amount"), $("#auto-amount"));
    });

    $("#auto-amount").keyup(function () { initMethodDeposit.onChangedAmount($(this)) });


    // submit deposit
    $(".auto-btn-submit-deposit").on("click", function () { initMethodDeposit.submitDeposit($(this)) });

});