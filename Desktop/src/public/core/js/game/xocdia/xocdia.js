'use strict';

let DEBUG_APP = !true;

let IS_FULLSCREEN = false;
let IS_OFFSOUND = false;
let IS_ALLOW_BET = false;
let TASK_TIMER = {
    CONNECT_SOCKET: null,
    BET_TIME: null
};
let IS_RECONNECT = false;
let IS_AUTH = false;
let AUTH_DATA = null;
let CURRENT_BALANCE = 0;
let LIST_CHIP_VALUE = [
    1000,
    10000,
    100000,
    1000000,
    10000000
];
let CURRENT_CHIP_VALUE = 1000;
let WIN_TYPE = {
    PLAYER: "player",
    PLAYER_DOUBLE: "player_double",
    BANKER: "banker",
    BANKER_DOUBLE: "banker_double",
    DRAW: "draw",
    SUPER: "super",
};
let RESULT_TEXT_ENUM = {
    "odd": "Lẻ",
    "even": "Chẵn",
    "even-double": "Sấp Đôi",
    "white3": "3 Trắng",
    "red3": "3 Đỏ",
    "white4": "4 Trắng",
    "red4": "4 Đỏ"
};
let CURRENT_BET_DATA = {
    "player": 0,
    "player_double": 0,
    "banker": 0,
    "banker_double": 0,
    "draw": 0,
    "super": 0,
    "total": 0
};
let CARD_RESULT_NODE = {
    PLAYER: {
        CARD: {
            "card1": "node-card-player-card1",
            "card2": "node-card-player-card2",
            "card3": "node-card-player-card3"
        },
        POINT: {
            "node": "node-player-total-point",
            "result": "node-player-total-point-text"
        }
    },
    BANKER: {
        CARD: {
            "card1": "node-card-banker-card1",
            "card2": "node-card-banker-card2",
            "card3": "node-card-banker-card3"
        },
        POINT: {
            "node": "node-banker-total-point",
            "result": "node-banker-total-point-text"
        }
    }
};
let BET_NODE = {
    PLAYER: "node-player",
    PLAYER_DOUBLE: "node-player-double",
    BANKER: "node-banker",
    BANKER_DOUBLE: "node-banker-double",
    DRAW: "node-draw",
    SUPER: "node-super",
};
let BET_RESULT_NODE = {
    PLAYER: "node-win-player",
    PLAYER_DOUBLE: "node-win-player-double",
    BANKER: "node-win-banker",
    BANKER_DOUBLE: "node-win-banker-double",
    DRAW: "node-win-draw",
    SUPER: "node-win-super",
}

let LIST_SOUND = {
    SELECT_CHIP: "/core/audios/select-chip.mp3",
    SELECT_BET: "/core/audios/select-bet.mp3"
};


window.onload = function () {
    setAspectGameContainer(16 / 9, "game-container");
    setAspectNodeBetContainer("game-container", "board-node-bet-container");
    document.getElementById("game-iframe").src = "/game/xocdia-stream/?v=" + Math.floor(Date.now() / 1000);
    $('html, body').animate({ scrollTop: $('#game-container').offset().top }, 'slow', function () {
        // hide header and footer
        showHideHeaderAndFooter(false);
    });

    initTriggerBetNode();
    initLoadCardCache();
    initLoadDotCache();
    initContentNodeDotLine(true);
    initContentNodeDotLine(false);

    $(".full-screen-icon").click(() => clickFullScreen());
    $(".sound-audio-icon").click(() => clickAudioSound());
    $(".node-chip-reset").click(() => resetCurrentAmount());
    $(".node-chip-confirm").click(() => onConfirmBet());

    $(".board-node-select-bet").on('click', 'div', function () {
        onBetToNode($(this).attr("data-value"));
    });

    $(".board-main-chip-select-value").on('click', 'div', function () {
        $(".board-main-chip-select-value div.active").removeClass("active");
        $(this).addClass("active");
        onChangeChipValue($(this).attr("data-value"));
    });

    $(".history-icon").on('click', () => clickShowHistoryBetModal(true, true));
    $("#btn-close-modal-history-bet").on('click', () => clickShowHistoryBetModal(false));

    $(".tutorial-icon").on('click', () => clickShowTutorialModal(true));
    $("#btn-close-modal-tutorial").on('click', () => clickShowTutorialModal(false));

    $(".dot-board-icon").on('click', () => clickShowDotBoard(true));
    $(".close-dot-board-icon").on('click', () => clickShowDotBoard(false));

    // init code when here

}

function showHideHeaderAndFooter(status) {
    if (status) {
        $("gupw-header").show();
        $("gupw-footer").show();
    } else {
        $("gupw-header").hide();
        $("gupw-footer").hide();
    }
}

function onSetCurrentSessionId(sesssion) {
    $("#txt-round-id").html(sesssion);
}

function onSetCurrentBalance(balance) {
    $("#txt-current-balance").html(numberWithCommas(balance));
    CURRENT_BALANCE = balance;
}

function onChangeChipValue(value) {
    CURRENT_CHIP_VALUE = Number(value);
    playSound(LIST_SOUND.SELECT_CHIP);
}

function convertBetDoorFromNode(node) {
    let betDoor;
    if (node == BET_NODE.PLAYER) {
        betDoor = WIN_TYPE.PLAYER;
    } else if (node == BET_NODE.PLAYER_DOUBLE) {
        betDoor = WIN_TYPE.PLAYER_DOUBLE;
    } else if (node == BET_NODE.BANKER) {
        betDoor = WIN_TYPE.BANKER;
    } else if (node == BET_NODE.BANKER_DOUBLE) {
        betDoor = WIN_TYPE.BANKER_DOUBLE;
    } else if (node == BET_NODE.DRAW) {
        betDoor = WIN_TYPE.DRAW;
    } else if (node == BET_NODE.SUPER) {
        betDoor = WIN_TYPE.SUPER;
    }
    return betDoor;
}

function onBetToNode(node) {
    if (!IS_AUTH) {
        // fastNotifyClient("error", "Vui lòng đăng nhập để chơi!");
        initAuthModal(true, true);
        return;
    }
    if (!IS_ALLOW_BET) {
        fastNotifyClient("error", "Vui lòng chờ bắt đầu!");
        return;
    }
    let balanceAfterBet = CURRENT_BALANCE - CURRENT_CHIP_VALUE;
    if (balanceAfterBet < 0) {
        fastNotifyClient("error", "Số dư của bạn không đủ!");
        return;
    }
    let betDoor = convertBetDoorFromNode(node);
    // update balance
    onSetCurrentBalance(balanceAfterBet);
    CURRENT_BET_DATA[betDoor] = Number(CURRENT_BET_DATA[betDoor] + CURRENT_CHIP_VALUE);
    CURRENT_BET_DATA["total"] = Number(CURRENT_BET_DATA["total"] + CURRENT_CHIP_VALUE);

    const oldValue = getOnlyNumberInString($("#" + node + "-current-amount").html()) >> 0;
    const newValue = oldValue + CURRENT_CHIP_VALUE;
    $("#" + node + "-current-amount").html(numberWithCommas(newValue));
}

function onSaveBetToNode(node, amount) {
    $("#" + node + "-current-amount").html(numberWithCommas(amount));
}

function onConfirmBet() {
    if (!IS_AUTH) {
        // fastNotifyClient("error", "Vui lòng đăng nhập để chơi!");
        initAuthModal(true, true);
        return;
    }
    if (!IS_ALLOW_BET) {
        fastNotifyClient("error", "Vui lòng chờ bắt đầu!");
        return;
    }
    if (CURRENT_BET_DATA["total"] > 0) {
        CURRENT_BET_DATA = {
            red4: CURRENT_BET_DATA["banker"],
            red3: CURRENT_BET_DATA["banker_double"],
            even: CURRENT_BET_DATA["draw"],
            odd: CURRENT_BET_DATA["super"],
            white4: CURRENT_BET_DATA["player"],
            white3: CURRENT_BET_DATA["player_double"],
            total: CURRENT_BET_DATA["total"]
        };
        ws.red({
            game: {
                xocdia: {
                    event: EVENT_NAME.CLIENT.CONFIRM_BET,
                    data: CURRENT_BET_DATA
                }
            }
        });
        console.log(CURRENT_BET_DATA);
        resetCurrentAmount();
    }
}

function resetCurrentAmount(force = false) {
    if (force) {
        for (var key in BET_NODE) {
            if (BET_NODE.hasOwnProperty(key)) {
                $("#" + BET_NODE[key] + "-current-amount").html("");
            }
        }
        // reset bet data to default values
        CURRENT_BET_DATA = {
            "player": 0,
            "player_double": 0,
            "banker": 0,
            "banker_double": 0,
            "draw": 0,
            "super": 0,
            "total": 0
        };
        // call socket to get current bet and update current balance
        // ws.red({ game: { baccarat: { event: EVENT_NAME.CLIENT.GET_CURRENT_BET } } });
        setTimeout(() => {
            ws.red({ game: { xocdia: { event: EVENT_NAME.CLIENT.UPDATE_BALANCE } } });
        }, 1000);
    } else {
        if (CURRENT_BET_DATA["total"] > 0) {
            for (var key in BET_NODE) {
                if (BET_NODE.hasOwnProperty(key)) {
                    $("#" + BET_NODE[key] + "-current-amount").html("");
                }
            }
            // reset bet data to default values
            CURRENT_BET_DATA = {
                "player": 0,
                "player_double": 0,
                "banker": 0,
                "banker_double": 0,
                "draw": 0,
                "super": 0,
                "total": 0
            };
            // call socket to get current bet and update current balance
            // ws.red({ game: { xocdia: { event: EVENT_NAME.CLIENT.GET_CURRENT_BET } } });
            setTimeout(() => {
                ws.red({ game: { xocdia: { event: EVENT_NAME.CLIENT.UPDATE_BALANCE } } });
            }, 1000);
        }
    }
}

function showHideNodeTimeRemain(status) {
    if (status) {
        $(".node-time-remain").fadeIn();
    } else {
        $(".node-time-remain").fadeOut();
    }
}

function startActionBet(nodeTime) {
    document.getElementById("node-text-time-remain").innerHTML = "16";
    showHideNodeTimeRemain(true);
    var timeleft = 15;
    TASK_TIMER.BET_TIME = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(TASK_TIMER.BET_TIME);
            document.getElementById(nodeTime).innerHTML = "";
            showHideNodeTimeRemain(false);
        } else {
            document.getElementById(nodeTime).innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

function initLoadCardCache() {
    preloadImages([
        "/core/images/xocdia/dot/dot_white.png",
        "/core/images/xocdia/dot/dot_red.png"
    ]);
}

function initLoadDotCache() {
    let LIST_DOT_IMAGE = [
        "/core/images/dot/player.png",
        "/core/images/dot/player_pair.png",
        "/core/images/dot/banker.png",
        "/core/images/dot/banker_pair.png",
        "/core/images/dot/draw.png"
    ];
    preloadImages(LIST_DOT_IMAGE);
}

function initTriggerBetNode() {
    $(".node-chip-reset").click(function () {
        playSound(LIST_SOUND.SELECT_CHIP);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-chip-confirm").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-player").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-player-double").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-banker").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-banker-double").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-draw").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
    $(".node-super").click(function () {
        playSound(LIST_SOUND.SELECT_BET);
        $(this).css("transform", "scale(0.95)");
        setTimeout(() => $(this).css("transform", "scale(1)"), 100);
    });
}

function initContentNodeDotLine(type) {
    if (type) { // board 1
        let currentColume = 0;
        let currentLeft = 0;
        let currentTop = 0;

        for (let i = 1; i <= 100; i++) {
            $(".node-dot-line-1").append(`
                <div style="top: ${currentTop}%; left: ${currentLeft}%;" class="dot node-dot-line-1-colum-${currentColume}" id="node-dot-line-1-dot-${i}">
                    <span class="dot-point" id="point-dot-line-1-dot-${i}"></span>
                </div>\n
            `);

            currentTop += 20;
            if (Number.isInteger(i / 5)) {
                currentLeft += 5;
                currentColume += 1;
                currentTop = 0;
            }
        }
    } else {

    }
}

function handleContentNodeDotLine(type, data) {
    return new Promise((resolve, reject) => {
        let totalEven = 0, totalOdd = 0, totalRed4 = 0, totalRed3 = 0, totalWhite4 = 0, totalWhite3 = 0;

        if (type) {
            const dataResult = data.reverse();
            dataResult.forEach((dotNode, index) => {
                index += 1; // fix array list start at position 0
                let dotImages = "";
                let dotPoint = "";

                if (dotNode.result == "even") {
                    dotImages = "dot_red";
                    totalEven++;
                } else if (dotNode.result == "odd") {
                    dotImages = "dot_white";
                    totalOdd++;
                } else {
                    dotImages = "";
                }

                if (dotNode.result_door == "red3") {
                    totalRed3++;
                } else if (dotNode.result_door == "red4") {
                    totalRed4++;
                } else if (dotNode.result_door == "white3") {
                    totalWhite3++;
                } else if (dotNode.result_door == "white4") {
                    totalWhite4++;
                }

                $("#node-dot-line-1-dot-" + index).css("background", "url(/core/images/xocdia/dot/" + dotImages + ".png)");
                // $("#node-dot-line-1-dot-" + index).css("background-size", "contain");
                $("#node-dot-line-1-dot-" + index).css("background-size", "90% 90%");
                $("#node-dot-line-1-dot-" + index).css("background-position", "center center");
                $("#node-dot-line-1-dot-" + index).css("background-repeat", "no-repeat");
                // $("#point-dot-line-1-dot-" + index).html(dotPoint);
            });

            $(".dot-board-txt-total-even").html(totalEven);
            $(".dot-board-txt-total-odd").html(totalOdd);
            $(".dot-board-txt-total-red4").html(totalRed4);
            $(".dot-board-txt-total-red3").html(totalRed3);
            $(".dot-board-txt-total-white4").html(totalWhite4);
            $(".dot-board-txt-total-white3").html(totalWhite3);
        
        } else {
        }
        resolve();
    })

}

function disableClickBetNode(status) {
    if (status) {
        $(".board-node-select-bet").css("pointer-events", "none");
    } else {
        $(".board-node-select-bet").css("pointer-events", "all");
    }
}

function fastNotify(text) {
    const notifyId = String(Math.floor(Math.random() * 124123) + 1);
    $("#fast-notify-container").append(`<div class="fast-notify" id="notify-${notifyId}" style="display: none;"></div>`);
    $("#notify-" + notifyId).html(text);
    $("#notify-" + notifyId).fadeIn();
    setTimeout(() => {
        $("#notify-" + notifyId).fadeOut(function () {
            $(this).remove(); // remove notify element when done
        })
    }, 2000);
}

function fastNotifyClient(type, text) {
    let icon = "";
    if (type == "success") {
        icon = "fa-solid fa-circle-check";
    } else if (type == "warning") {
        icon = "fa-solid fa-triangle-exclamation";
    } else if (type == "error") {
        icon = "fa-solid fa-circle-exclamation";
    } else if (type == "info") {
        icon = "fa-solid fa-circle-info";
    }
    createTost($(".fast-notify-client"), type, icon, text)
}

function initNodeResultCard(isShow = false) {
    if (isShow) {
        $(".card-result-container").fadeIn();
        $(".card-result-container").animate({ left: '17%' }, 1200, function (callback) { });
    } else {
        $(".card-result-container").animate({ left: '-15%' }, 1000, function (callback) {
            $(this).fadeOut();
            setCardResult(false);
        });
    }
}

function setBackgroundNodeBetImage(winType) {
    switch (winType) {
        case "white4":
            $("#" + BET_RESULT_NODE.PLAYER).show();
            $("#" + BET_RESULT_NODE.DRAW).show();
            break;
        case "white3":
            $("#" + BET_RESULT_NODE.SUPER).show();
            $("#" + BET_RESULT_NODE.PLAYER_DOUBLE).show();
            break;
        case "red3":
            $("#" + BET_RESULT_NODE.SUPER).show();
            $("#" + BET_RESULT_NODE.BANKER_DOUBLE).show();
            break;
        case "red4":
            $("#" + BET_RESULT_NODE.DRAW).show();
            $("#" + BET_RESULT_NODE.BANKER).show();
            break;
        case "even":
            $("#" + BET_RESULT_NODE.DRAW).show();
            break;
        case "odd":
            $("#" + BET_RESULT_NODE.SUPER).show();
            break;

        default:
            break;
    }
}

function setNodeBetResult(isResult = false, winType) {
    if (isResult) {  // set bet node result
        setBackgroundNodeBetImage(winType);
    } else { // reset bet node result
        $("#" + BET_RESULT_NODE.PLAYER).hide();
        $("#" + BET_RESULT_NODE.PLAYER_DOUBLE).hide();
        $("#" + BET_RESULT_NODE.BANKER).hide();
        $("#" + BET_RESULT_NODE.BANKER_DOUBLE).hide();
        $("#" + BET_RESULT_NODE.DRAW).hide();
        $("#" + BET_RESULT_NODE.SUPER).hide();
    }
}

function setBackgroundCardImage(element, imageUrl) {
    element.attr("src", imageUrl);
}

function setCardResult(isResult = false, cardData = null) {
    const DICE_IMG = {
        WHITE: "/core/images/xocdia/dot/dot_white.png",
        RED: "/core/images/xocdia/dot/dot_red.png"
    }

    if (isResult) {  // set card result
        (cardData[0]) ? setBackgroundCardImage($("#dice-result1"), DICE_IMG.WHITE) : setBackgroundCardImage($("#dice-result1"), DICE_IMG.RED);
        (cardData[1]) ? setBackgroundCardImage($("#dice-result2"), DICE_IMG.WHITE) : setBackgroundCardImage($("#dice-result2"), DICE_IMG.RED);
        (cardData[2]) ? setBackgroundCardImage($("#dice-result3"), DICE_IMG.WHITE) : setBackgroundCardImage($("#dice-result3"), DICE_IMG.RED);
        (cardData[3]) ? setBackgroundCardImage($("#dice-result4"), DICE_IMG.WHITE) : setBackgroundCardImage($("#dice-result4"), DICE_IMG.RED);

        $("#dice-result1").fadeIn();
        $("#dice-result2").fadeIn();
        $("#dice-result3").fadeIn();
        $("#dice-result4").fadeIn();
    } else { // reset card 
        $("#dice-result1").hide();
        $("#dice-result2").hide();
        $("#dice-result3").hide();
        $("#dice-result4").hide();
    }
}

function playSound(url) {
    var audio = new Audio(url);
    audio.play();
}

function clickFullScreen() {
    if (!IS_FULLSCREEN) {
        $(".full-screen-icon").css('background', 'url("/core/images/button/btn_squre_out.png") no-repeat');
        $(".full-screen-icon").css('background-size', 'contain');
        showFullScreen(true, "game-container");
        IS_FULLSCREEN = true;
    } else {
        $(".full-screen-icon").css('background', 'url("/core/images/button/btn_squre.png") no-repeat');
        $(".full-screen-icon").css('background-size', 'contain');
        showFullScreen(false, "game-container");
        IS_FULLSCREEN = false;
    }
}

function clickAudioSound() {
    if (!IS_OFFSOUND) {
        $(".sound-audio-icon").css('background', 'url("/core/images/button/btn_notification.png") no-repeat');
        $(".sound-audio-icon").css('background-size', 'contain');
        document.getElementById('game-iframe').contentWindow.AudioSound();
        IS_OFFSOUND = true;
    } else {
        $(".sound-audio-icon").css('background', 'url("/core/images/button/btn_offnotification.png") no-repeat');
        $(".sound-audio-icon").css('background-size', 'contain');
        document.getElementById('game-iframe').contentWindow.AudioSound();
        IS_OFFSOUND = false;
    }
}

function clickShowHistoryBetModal(status, isCreateModal = false, page = 1, kmess = 16) {
    if (!IS_AUTH) {
        // fastNotifyClient("error", "Vui lòng đăng nhập để xem!");
        initAuthModal(true, true);
        return;
    }
    // Get the modal
    var modal = document.getElementById("modal-history-bet");
    if (status) {
        if (isCreateModal) {
            modal.style.display = "block";
        }
        ws.red({
            game: {
                xocdia: {
                    event: EVENT_NAME.CLIENT.GET_HISTORY_BET,
                    data: {
                        page,
                        kmess
                    }
                }
            }
        });
    } else {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}

function clickShowTutorialModal(status) {
    // Get the modal
    var modal = document.getElementById("modal-tutorial");
    if (status) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function clickShowDotBoard(status) {
    if (status) {
        $(".dot-board-icon").fadeOut();
        $(".node-dot-board-container").fadeIn();
    } else {
        $(".dot-board-icon").fadeIn();
        $(".node-dot-board-container").fadeOut();
    }
}

function initContentHistoryBet(data) {
    $("#history-bet-content").html(``);
    if (data.data.length > 0) {
        let body = "";
        data.data.forEach(data => {
            body += `<tr>
                <th class="text-center" style="font-size: 14px;">
                    #${(data.session) ? data.session : ""}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.even)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.white4)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.red4)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.odd)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.white3)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.red3)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.total_bet)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${RESULT_TEXT_ENUM[data.result]} - ${(data.result_door == "even") ? RESULT_TEXT_ENUM["even-double"] : RESULT_TEXT_ENUM[data.result_door]}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.total_win)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.total_lose)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${numberWithCommas(data.total_refurn)}
                </th>
                <th class="text-center" style="font-size: 14px;">
                    ${moment(data.bet_time).format("DD/MM/YYYY HH:mm:ss")}
                </th>
            </tr>`;
        });
        $("#history-bet-content").html(body);

        let phantrangBody = '';
        const phantrang = Pagination(data.page, data.total, data.kmess);
        phantrang.forEach((page) => {
            $("#history-bet-pagination").html(phantrangBody);
            let active = (data.page == page) ? "active" : "";
            const urlToPage = (page !== "...") ? `javascript:void(clickShowHistoryBetModal(true, false, ${page}, ${data.kmess}))` : `javascript:void(0)`;
            phantrangBody += `
                <li class="page-item ${active}">
                    <a href="${urlToPage}" class="page-link"><b>${page}</b></a>
                </li>
            `;
            $("#history-bet-pagination").html(phantrangBody);
        });
    }
}

function showDisconnectModal(status) {
    // Get the modal
    var modal = document.getElementById("modal-disconnect");
    if (status) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

function showFullScreen(status, temp) {
    if (status) {
        var elem = document.getElementById(temp);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function setAspectNodeBetContainer(parrentElementId, elementId) {
    var parrentElement = $("#" + parrentElementId);
    var elementElement = $("#" + elementId);
    var currentWidth = parrentElement.outerWidth(false); // 1670

    elementElement.css("width", "1081px");
}

function setAspectGameContainer(aspect, elementId) {
    var div = $("#" + elementId);
    div.css("height", "100%").css("width", "100%");
    var height = div.outerHeight(false);
    var width = div.outerWidth(false);
    var fullaspect = width / height;
    if (aspect > fullaspect) {
        //adjust height
        div.css("height", width / aspect);
    } else {
        //adjust width
        div.css("width", height * aspect);
        console.log(height * aspect);
    }
}