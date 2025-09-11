$(document).ready(function () {

    // jackpot countup
    const countUpJackp = new countUp.CountUp('jackpot-countup', 2170098025, {
        useEasing: true,
        useGrouping: true,
        separator: ",",
        decimal: ",",
        duration: 10,
    });
    countUpJackp.start();

});
