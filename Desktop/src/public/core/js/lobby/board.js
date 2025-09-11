'use strict';

let CURRENT_FRAME_PRODUCE = "PG";
const IFRAME_ELEMENT = "iframeElement";
const LIST_FRAME_URL = {
    "LCC": "/Lobby/Board/LCC",
    "JILI": "/Lobby/Board/JL",
    "TP": "/Lobby/Board/TP",
    "R88": "/Lobby/Board/R88",
    "KM": "/Lobby/Board/KM",
    "MG": "/Lobby/Board/MG",
    "FTG": "/Lobby/Board/FTG"
};

$(document).ready(() => {
    $(".list-slot-production").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".list-slot-production li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabGame($(this).attr("data-produce"));
    });
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