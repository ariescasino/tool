'use strict';

let CURRENT_FRAME_PRODUCE = "JL";
const IFRAME_ELEMENT = "iframeElement";
const LIST_FRAME_URL = {
    "PG": "/Lobby/Game/PG",
    "JILI": "/Lobby/Game/JL",
    "TP": "/Lobby/Game/TP",
    "FC": "/Lobby/Game/FC",
    "JDB": "/Lobby/Game/JDB",
    "CQ9": "/Lobby/Game/CQ9",
    "PP": "/Lobby/Game/PP",
    "MG": "/Lobby/Game/MG",
    "VA": "/Lobby/Game/VA",
    "BNG": "/Lobby/Game/BNG",
    "R88": "/Lobby/Game/R88",
    "KA": "/Lobby/Game/KA",
    "BTG": "/Lobby/Game/BTG",
    "PS": "/Lobby/Game/PS",
    "PT": "/Lobby/Game/PT",
    "BTG": "/Lobby/Game/BTG",
    "NE": "/Lobby/Game/NE",
    "SPRIBE": "/Lobby/Game/SPRIBE",
    "RSG": "/Lobby/Game/RSG"
};

$(document).ready(() => {
    $(".list-slot-production").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".list-slot-production li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabGame($(this).attr("data-produce"));
    });

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

function loadFrame(iframeElement, url) {
    var $iframe = $('.' + iframeElement);
    if ($iframe.length) {
        $iframe.attr('src', url);
        return false;
    }
    return true;
}

function changeTabGame(type) {
    if (CURRENT_FRAME_PRODUCE == type) return;
    CURRENT_FRAME_PRODUCE = type;
    loadFrame(IFRAME_ELEMENT, LIST_FRAME_URL[type]);
}