"use strict";


$(document).ready(() => {
    $(".method-is-maintance").hide();
    initMethodDeposit = new MomoTransferAuto();

    // select amount
    $(".momo-deposit-select-amount").on('click', 'li', function () {
        $(".momo-deposit-select-amount li.selected").removeClass("selected");
        $(this).addClass("selected");
        initMethodDeposit.changeAmount($(this).attr("data-amount"), $("#momo-amount"));
    });

    $("#momo-amount").keyup(function () { initMethodDeposit.onChangedAmount($(this)) });

    // submit deposit
    $(".momo-btn-submit-deposit").on("click", function () { initMethodDeposit.submitDeposit($(this)) });
});