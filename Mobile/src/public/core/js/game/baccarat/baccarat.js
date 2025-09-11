let DEBUG_APP = !true;
let IS_LANDSCAPE = false;
let IS_FULLSCREEN = false;
let IS_OFFSOUND = false;
let IS_SHOW_MENU = false;
let IS_ALLOW_BET = false;
let TASK_TIMER = {
    CONNECT_SOCKET: null,
    BET_TIME: null
};
let IS_RECONNECT = false;
let IS_AUTH = false;
let AUTH_DATA = null;
let PREFIX_GAME = "BACCARAT_";
let CURRENT_BALANCE = 0;
let MINXIMUM_BET = 20000;
let LIST_CHIP = [
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_10.png",
        value: 10000,
        select: true,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_20.png",
        value: 20000,
        select: true,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_50.png",
        value: 50000,
        select: true,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_100.png",
        value: 100000,
        select: true,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_200.png",
        value: 200000,
        select: true,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_500.png",
        value: 500000,
        select: false,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_1k.png",
        value: 1000000,
        select: false,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_5k.png",
        value: 5000000,
        select: false,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_10k.png",
        value: 10000000,
        select: false,
    },
    {
        image: "https://ga88.vn2kuvideo.com/MVG/Areas/Mobile/Content/Images/blingChip/icon_blingChip_100k.png",
        value: 100000000,
        select: false,
    }
];
LIST_CHIP = (localStorage.getItem("LIST_CHIP") === null) ? LIST_CHIP : JSON.parse(localStorage.getItem("LIST_CHIP"));
let CURRENT_CHIP_VALUE = null;
let SWIPPER_LIS_CHIP = null;
let WIN_TYPE = {
    PLAYER: "player",
    PLAYER_DOUBLE: "player_double",
    BANKER: "banker",
    BANKER_DOUBLE: "banker_double",
    DRAW: "draw",
    SUPER: "super",
};
let RESULT_TEXT_ENUM = {
    "player": "PLAYER",
    "player_double": "PLAYER ĐÔI",
    "banker": "BANKER",
    "banker_double": "BANKER Đôi",
    "draw": "HÒA",
    "super": "SUPER 6"
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
let BET_RESULT_NODE_MOBILE = {
    PLAYER: "node-win-player-mobile",
    PLAYER_DOUBLE: "node-win-player-double-mobile",
    BANKER: "node-win-banker-mobile",
    BANKER_DOUBLE: "node-win-banker-double-mobile",
    DRAW: "node-win-draw-mobile",
    SUPER: "node-win-super-mobile",
}
let LIST_SOUND = {
    SELECT_CHIP: "/core/audios/select-chip.mp3",
    SELECT_BET: "/core/audios/select-bet.mp3"
};

// for debug on mobile devices
(function () {
    var src = '//cdn.jsdelivr.net/npm/eruda';
    if (!/dev=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();


window.onload = function () {

    /**** Request Rotate ****/
    // if (window.innerWidth > window.innerHeight) $("#overlay-request-rotate").fadeOut("fast");
    // setInterval(() => {
    //     if (window.innerWidth > window.innerHeight) {
    //         if (!IS_LANDSCAPE) {
    //             setAspectGameContainer(16 / 9, "game-container");
    //             setAspectNodeBetContainer("game-container", "board-node-bet-container");
    //             IS_LANDSCAPE = true;
    //         }
    //         // $("#overlay-request-rotate").show();
    //     } else if (window.innerHeight > window.innerWidth) {
    //         IS_LANDSCAPE = false;
    //         // $("#overlay-request-rotate").fadeOut("fast");
    //     }
    // }, 500);

    // Check initial orientation
    handleOrientationChange(window.matchMedia("(orientation: portrait)"));

    // Add event listener for orientation change
    window.matchMedia("(orientation: portrait)").addListener(handleOrientationChange);

    /**** Custom Css ****/
    $("._8XOzSmOOEZguY1YmMefoR").css("border-top", "none");
    $("._8XOzSmOOEZguY1YmMefoR").css("border-bottom", "none");

    setAspectGameContainer(16 / 9, "game-container");
    setAspectNodeBetContainer("game-container", "board-node-bet-container");
    document.getElementById("game-iframe").src = "/game/baccarat-stream/?v=" + Math.floor(Date.now() / 1000);
    $('html, body').animate({ scrollTop: $('#game-container').offset().top }, 'slow', function () {
        // hide header and footer
        showHideHeaderAndFooter(false);
    });

    // check window height
    if (window.innerHeight <= 640) showModalRequestAllowScollPage(true);

    // clickShowDotBoard(true);
    initTriggerBetNode();
    initLoadCardCache();
    initLoadDotCache();
    initContentNodeDotLine(true);
    initContentNodeDotLine(false);
    initCardResultDragable();
    initDefaultSetting();
    initChipSelected();

    // setTimeout(() => {
    //     $("#rootPage").css("touch-action", "pan-y");
    // }, 3000);

    $(".full-screen-icon").click(() => clickFullScreen());
    $(".sound-audio-icon").click(() => clickAudioSound());
    $(".node-chip-reset").click(() => resetCurrentAmount());
    $(".node-chip-confirm").click(() => onConfirmBet());

    $(".board-node-select-bet").on('click', 'div .button', function () {
        onBetToNode($(this).attr("data-value"));
    });

    $(".chip-amount-select-container").on('click', '.swiper-slide .btm_blingChip .img_blingChip', function () {
        $(".chip-amount-select-container div.active").removeClass("active");
        $(this).addClass("active");
        onChangeChipValue($(this).attr("data-value"));
    });

    $(".menu-bar-icon").on('click', () => clickInitMenuBar());
    $(".back-game-icon").on('click', () => window.location = "/");

    $(".btn_blingChip_Set").on('click', () => clickShowSettingChipModal(true));
    $("#btn-close-modal-setting-chip").on('click', () => clickShowSettingChipModal(false));
    $(".history-icon").on('click', () => clickShowHistoryBetModal(true, true));
    $("#btn-close-modal-history-bet").on('click', () => clickShowHistoryBetModal(false));

    $(".tutorial-icon").on('click', () => clickShowTutorialModal(true));
    $("#btn-close-modal-tutorial").on('click', () => clickShowTutorialModal(false));

    $(".setting-icon").on('click', () => clickShowSettingPanelModal(true));

    $(".dot-board-icon").on('click', () => clickShowDotBoard(true));
    $(".close-dot-board-icon").on('click', () => clickShowDotBoard(false));

    $(".button-confirm-setting-chip").on('click', () => onConfirmSettingChipSelect(true));

    // init code when here
    $("#value-setting-audio-livestream").toggleSwitch();
    $("#value-setting-audio-effect").toggleSwitch();
    $("#value-setting-allow-scroll-page").toggleSwitch();

    initDefaultSettingPanel();
}

function initAuthModal(status, dump) {
    window.location = "/auth";
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
    if (!CURRENT_CHIP_VALUE) {
        fastNotifyClient("error", "Vui lòng chọn mức cược!");
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
    if (CURRENT_BET_DATA["total"] >= MINXIMUM_BET) {
        ws.red({
            game: {
                baccarat: {
                    event: EVENT_NAME.CLIENT.CONFIRM_BET,
                    data: CURRENT_BET_DATA
                }
            }
        });
        fastNotify("Đặt cược thành công!");
        resetCurrentAmount();
    } else {
        fastNotify(`Cược tối thiểu ${numberWithCommas(MINXIMUM_BET)}`);
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
            ws.red({ game: { baccarat: { event: EVENT_NAME.CLIENT.UPDATE_BALANCE } } });
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
            // ws.red({ game: { baccarat: { event: EVENT_NAME.CLIENT.GET_CURRENT_BET } } });
            setTimeout(() => {
                ws.red({ game: { baccarat: { event: EVENT_NAME.CLIENT.UPDATE_BALANCE } } });
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
    document.getElementById("node-text-time-remain").innerHTML = "20";
    showHideNodeTimeRemain(true);
    var timeleft = 19;
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
    let LIST_CARD_IMAGE = [];
    BACCARAT_CARD_CONFIG.forEach((item, index) => LIST_CARD_IMAGE.push(item.image));
    preloadImages(LIST_CARD_IMAGE);
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

function initChipSelected() {
    $(".chip-amount-select-container").html(``);
    LIST_CHIP.forEach((chip) => {
        if (chip.select) {
            $(".chip-amount-select-container").append(`
                <div class="swiper-slide">
                    <div class="btm_blingChip">
                        <div class="img_blingChip"
                            data-value="${chip.value}">
                            <img src="${chip.image}">
                        </div>
                    </div>
                </div>
            `);
        }
    });
    initChipSwipper();
}

function initSettingChipItem() {
    $(".flex-grid-setting-chip").html(``);
    LIST_CHIP.forEach((chip) => {
        $(".flex-grid-setting-chip").append(`
            <div class="col">
                <div class="btm_blingChip">
                    <div class="img_blingChip ${(chip.select) ? "opacity-normal" : ""}" data-value="${chip.value}" onClick="updateListChipSelect($(this).attr('data-value'))">
                        <img src="${chip.image}">
                    </div>
                </div>
            </div>
        `);
    });
}

function updateListChipSelect(chipSelect) {

    LIST_CHIP.forEach((chip, index) => {
        if (chip.value == Number(chipSelect)) LIST_CHIP[index].select = (chip.select) ? false : true;
    });

    let countChipSelected = 0;
    LIST_CHIP.forEach((chip) => (chip.select) ? countChipSelected++ : null);
    if (countChipSelected < 5) {
        fastNotifyClient("error", "Vui lòng chọn tối thiểu 5 phỉnh!");
        return;
    }

    localStorage.setItem("LIST_CHIP", JSON.stringify(LIST_CHIP));
    initSettingChipItem();
}


function onConfirmSettingChipSelect() {
    playSound(LIST_SOUND.SELECT_CHIP);

    let countChipSelected = 0;
    LIST_CHIP.forEach((chip) => (chip.select) ? countChipSelected++ : null);
    if (countChipSelected < 5) {
        fastNotifyClient("error", "Vui lòng chọn tối thiểu 5 phỉnh!");
        return;
    }
    initChipSelected();
    clickShowSettingChipModal(false);
}

function initChipSwipper() {
    SWIPPER_LIS_CHIP = new Swiper(".swipper-list-chip", {
        slidesPerView: 4,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

function initCardResultDragable() {
    // get The element on which to attach the event 
    var box = document.querySelector('.card-result-container');
    box.addEventListener('touchmove', function (e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];
        // assign box new coordinates based on the touch.
        box.style.left = (touchLocation.pageX - 75) + 'px';
        box.style.top = (touchLocation.pageY - 140) + 'px';
    });
    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */
    box.addEventListener('touchend', function (e) {
        // current box position.
        var x = parseInt(box.style.left);
        var y = parseInt(box.style.top);
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
    if (type) {
        const dataResult = data.reverse();
        dataResult.forEach((dotNode, index) => {
            index += 1; // fix array list start at position 0
            let dotImages = "";
            let dotPoint = "";

            if (dotNode.result == "player") {
                dotImages = "player";
                dotPoint = dotNode.player_point;
            } else if (dotNode.result == "player_double") {
                dotImages = "player_pair";
                dotPoint = dotNode.player_point;
            } else if (dotNode.result == "banker") {
                dotImages = "banker";
                dotPoint = dotNode.banker_point;
            } else if (dotNode.result == "banker_double") {
                dotImages = "banker_pair";
                dotPoint = dotNode.banker_point;
            } else if (dotNode.result == "draw") {
                dotImages = "draw";
                dotPoint = (Math.random() < 0.5) ? dotNode.banker_point : dotNode.player_point;
            } else if (dotNode.result == "super") {
                dotImages = "super";
                dotPoint = (Math.random() < 0.5) ? dotNode.banker_point : dotNode.player_point;
            }

            $("#node-dot-line-1-dot-" + index).css("background", "url(core/images/dot/" + dotImages + ".png)");
            $("#node-dot-line-1-dot-" + index).css("background-size", "contain");
            $("#point-dot-line-1-dot-" + index).html(dotPoint);
        })
    } else {

    }
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
        if (window.innerWidth <= 575) {
            $(".card-result-container").animate({ left: '33%' }, 1200, function (callback) { });
        } else {
            $(".card-result-container").animate({ left: '17%' }, 1200, function (callback) { });
        }

    } else {
        if (window.innerWidth <= 575) {
            $(".card-result-container").animate({ left: '-50%' }, 1000, function (callback) {
                $(this).fadeOut();
                setCardResult(false);
            });
        } else {
            $(".card-result-container").animate({ left: '-15%' }, 1000, function (callback) {
                $(this).fadeOut();
                setCardResult(false);
            });
        }

    }
}

function setBackgroundNodeBetImage(winType) {
    switch (winType) {
        case WIN_TYPE.PLAYER:
            $("#" + BET_RESULT_NODE.PLAYER).show();
            $("#" + BET_RESULT_NODE_MOBILE.PLAYER).show();
            break;
        case WIN_TYPE.PLAYER_DOUBLE:
            $("#" + BET_RESULT_NODE.PLAYER).show();
            $("#" + BET_RESULT_NODE.PLAYER_DOUBLE).show();
            $("#" + BET_RESULT_NODE_MOBILE.PLAYER).show();
            $("#" + BET_RESULT_NODE_MOBILE.PLAYER_DOUBLE).show();
            break;
        case WIN_TYPE.BANKER:
            $("#" + BET_RESULT_NODE.BANKER).show();
            $("#" + BET_RESULT_NODE_MOBILE.BANKER).show();
            break;
        case WIN_TYPE.BANKER_DOUBLE:
            $("#" + BET_RESULT_NODE.BANKER).show();
            $("#" + BET_RESULT_NODE.BANKER_DOUBLE).show();
            $("#" + BET_RESULT_NODE_MOBILE.BANKER).show();
            $("#" + BET_RESULT_NODE_MOBILE.BANKER_DOUBLE).show();
            break;
        case WIN_TYPE.DRAW:
            $("#" + BET_RESULT_NODE.DRAW).show();
            $("#" + BET_RESULT_NODE_MOBILE.DRAW).show();
            break;
        case WIN_TYPE.SUPER:
            $("#" + BET_RESULT_NODE.SUPER).show();
            $("#" + BET_RESULT_NODE_MOBILE.SUPER).show();
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
        $("#" + BET_RESULT_NODE_MOBILE.PLAYER).hide();
        $("#" + BET_RESULT_NODE_MOBILE.PLAYER_DOUBLE).hide();
        $("#" + BET_RESULT_NODE_MOBILE.BANKER).hide();
        $("#" + BET_RESULT_NODE_MOBILE.BANKER_DOUBLE).hide();
        $("#" + BET_RESULT_NODE_MOBILE.DRAW).hide();
        $("#" + BET_RESULT_NODE_MOBILE.SUPER).hide();
    }
}

function setBackgroundCardImage(element, imageUrl) {
    element.css("background", "url(" + imageUrl + ") no-repeat transparent");
    element.css("background-size", "contain"); element.css("background-size", "contain");
}

function setCardResult(isResult = false, cardData = null) {
    if (isResult) {  // set card result
        // player card
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.PLAYER.CARD.card1), BACCARAT_CARD_CONFIG[cardData.card.player.card1.card].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.PLAYER.CARD.card2), BACCARAT_CARD_CONFIG[cardData.card.player.card2.card].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.PLAYER.CARD.card3), BACCARAT_CARD_CONFIG[cardData.card.player.card3.card].image);
        if (cardData.card.player.card3.card > 0) $("#" + CARD_RESULT_NODE.PLAYER.CARD.card3).show();
        // player point
        $("#" + CARD_RESULT_NODE.PLAYER.POINT.result).html(cardData.point.player);
        $("#" + CARD_RESULT_NODE.PLAYER.POINT.node).show();

        // banker card
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.BANKER.CARD.card1), BACCARAT_CARD_CONFIG[cardData.card.banker.card1.card].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.BANKER.CARD.card2), BACCARAT_CARD_CONFIG[cardData.card.banker.card2.card].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.BANKER.CARD.card3), BACCARAT_CARD_CONFIG[cardData.card.banker.card3.card].image);
        if (cardData.card.banker.card3.card > 0) $("#" + CARD_RESULT_NODE.BANKER.CARD.card3).show();
        // banker point
        $("#" + CARD_RESULT_NODE.BANKER.POINT.result).html(cardData.point.banker);
        $("#" + CARD_RESULT_NODE.BANKER.POINT.node).show();

    } else { // reset card 
        // player card
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.PLAYER.CARD.card1), BACCARAT_CARD_CONFIG[0].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.PLAYER.CARD.card2), BACCARAT_CARD_CONFIG[0].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.PLAYER.CARD.card3), BACCARAT_CARD_CONFIG[0].image);
        $("#" + CARD_RESULT_NODE.PLAYER.CARD.card3).hide();
        // player point
        $("#" + CARD_RESULT_NODE.PLAYER.POINT.result).html("");
        $("#" + CARD_RESULT_NODE.PLAYER.POINT.node).hide();

        // banker
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.BANKER.CARD.card1), BACCARAT_CARD_CONFIG[0].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.BANKER.CARD.card2), BACCARAT_CARD_CONFIG[0].image);
        setBackgroundCardImage($("#" + CARD_RESULT_NODE.BANKER.CARD.card3), BACCARAT_CARD_CONFIG[0].image);
        $("#" + CARD_RESULT_NODE.BANKER.CARD.card3).hide();
        // banker point
        $("#" + CARD_RESULT_NODE.BANKER.POINT.result).html("");
        $("#" + CARD_RESULT_NODE.BANKER.POINT.node).hide();
    }
}

function initDefaultSetting() {
    if (localStorageAction("get", PREFIX_GAME + "SETTING_AUDIO_EFFECT", null) === null) localStorageAction("set", PREFIX_GAME + "SETTING_AUDIO_EFFECT", true);
    if (localStorageAction("get", PREFIX_GAME + "SETTING_AUDIO_LIVESTREAM", null) === null) localStorageAction("set", PREFIX_GAME + "SETTING_AUDIO_LIVESTREAM", true);
    if (localStorageAction("get", PREFIX_GAME + "SETTING_ALLOW_SCROLL_PAGE", null) === null) localStorageAction("set", PREFIX_GAME + "SETTING_ALLOW_SCROLL_PAGE", false);
}

function initDefaultSettingPanel() {
    (localStorageAction("get", PREFIX_GAME + "SETTING_AUDIO_EFFECT", null) == "true") ? $("#value-setting-audio-livestream").prop("checked", true) : $("#value-setting-audio-livestream").prop("checked", false);
    (localStorageAction("get", PREFIX_GAME + "SETTING_AUDIO_LIVESTREAM", null) == "true") ? $("#value-setting-audio-effect").prop("checked", true) : $("#value-setting-audio-effect").prop("checked", false);
    (localStorageAction("get", PREFIX_GAME + "SETTING_ALLOW_SCROLL_PAGE", null) == "true") ? $("#value-setting-allow-scroll-page").prop("checked", true) : $("#value-setting-allow-scroll-page").prop("checked", false);
}

function switchSettingAction(action, node) {
    const currentValue = node.prop("checked");
    switch (action) {
        case "audio_effect":
            // $("#value-setting-audio-effect").prop("checked", !currentValue);
            localStorageAction("set", PREFIX_GAME + "SETTING_AUDIO_EFFECT", currentValue);
            break;
        case "audio_livestream":
            // $("#value-setting-audio-livestream").prop("checked", !currentValue);
            localStorageAction("set", "SETTING_AUDIO_LIVESTREAM", currentValue);
            clickAudioSound();
            break;
        case "allow_scroll":
            // $("#value-setting-allow-scroll-page").prop("checked", !currentValue);
            localStorageAction("set", PREFIX_GAME + "SETTING_ALLOW_SCROLL_PAGE", currentValue);
            handelRequestAllowScrollPage(currentValue);
            break;
    }
    playSound(LIST_SOUND.SELECT_CHIP);
}

function localStorageAction(mode, key, value = null) {
    if (mode == "get") {
        if (localStorage.getItem(key) !== null) {
            return localStorage.getItem(key);
        } else {
            return null;
        }
    } else if (mode == "set") {
        localStorage.setItem(key, value);
    }
}

function playSound(url) {
    if (localStorageAction("get", PREFIX_GAME + "SETTING_AUDIO_EFFECT", null) !== null && localStorageAction("get", PREFIX_GAME + "SETTING_AUDIO_EFFECT", null) == "true") {
        var audio = new Audio(url);
        audio.play();
    }
}

function clickFullScreen() {
    if (!IS_FULLSCREEN) {
        $(".full-screen-icon").html('<i class="fa fa-compress fa-2x" style="color: #ffffff;"></i>');
        showFullScreen(true, "game-container");
        IS_FULLSCREEN = true;
    } else {
        $(".full-screen-icon").html('<i class="fa fa-expand fa-2x" style="color: #ffffff;"></i>');
        showFullScreen(false, "game-container");
        IS_FULLSCREEN = false;
    }
}

function clickAudioSound() {
    if (!IS_OFFSOUND) {
        $(".sound-audio-icon").css('background', 'url("/core/images/button/btn_notification.png") no-repeat');
        $(".sound-audio-icon").css('background-size', 'contain');
        document.getElementById('game-iframe').contentWindow.AudioSound(true);
        IS_OFFSOUND = true;
    } else {
        $(".sound-audio-icon").css('background', 'url("/core/images/button/btn_offnotification.png") no-repeat');
        $(".sound-audio-icon").css('background-size', 'contain');
        document.getElementById('game-iframe').contentWindow.AudioSound(false);
        IS_OFFSOUND = false;
    }
}

function clickInitMenuBar() {
    if (!IS_SHOW_MENU) {
        $(".node-header-container").fadeIn();
        IS_SHOW_MENU = true;
    } else {
        $(".node-header-container").fadeOut();
        IS_SHOW_MENU = false;
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
                baccarat: {
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

function clickShowSettingChipModal(status) {
    // Get the modal
    var modal = document.getElementById("modal-setting-chip");
    if (status) {
        initSettingChipItem();
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

function showModalRequestAllowScollPage(status) {
    // Get the modal
    var modal = document.getElementById("modal-request-scroll-page");
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

function handelRequestAllowScrollPage(status) {
    showModalRequestAllowScollPage(false);
    if (status) {
        $("#rootPage").css("touch-action", "pan-y");
    } else {
        $("#rootPage").css("touch-action", "none");
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

function clickShowSettingPanelModal(status) {
    // Get the modal
    var modal = document.getElementById("modal-setting-panel");
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
                <th class="text-center" style="font-size: 9px;">
                    #${(data.session) ? data.session : ""}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.player)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.player_double)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.banker)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.banker_double)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.draw)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.super)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.total_bet)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${RESULT_TEXT_ENUM[data.result]}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.total_win)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.total_lose)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${numberWithCommas(data.total_refurn)}
                </th>
                <th class="text-center" style="font-size: 9px;">
                    ${moment(data.bet_time).format("DD/MM/YYYY HH:mm:ss")}
                </th>
            </tr>`;
        });
        $("#history-bet-content").html(body);

        let phantrangBody = '';
        const phantrang = Pagination(data.page, data.total, data.kmess);
        // const phantrang = Pagination(2, 60, 10);
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

function handleOrientationChange(mql) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let aspectRatio = Number(windowWidth / windowHeight).toFixed(2);
    if (mql.matches) {
        $("#overlay-request-rotate").fadeOut("fast");
        setAspectGameContainer(16 / 9, "game-container");
        setAspectNodeBetContainer("game-container", "board-node-bet-container");
    } else {
        if (aspectRatio == Number(16 / 9).toFixed(2)) {
            $("#overlay-request-rotate").fadeOut("fast");
        } else {
            document.getElementById("overlay-request-rotate").style.display = 'block'
        }
    }
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
    }
}