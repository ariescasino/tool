"use strict";

let GAME_PRODUCT = DEFAULT_GAME_PRODUCTION;
let GAME_CATEGORY = "CHESS";
let GAME_LIST = [];

$(document).ready(() => {
    $(".list-production-select").on('click', 'li', function () {
        $(".list-production-select li.active").removeClass("active");
        $(this).addClass("active");
        changeProductGame($(this).attr("data-product"));
    });

    getGameList();
    $(".input-search").keyup(function () { searchGame($(this).val()) });
});


function hideAllProduct() {
    $(".section-game-content").html(``);
}

function changeProductGame(type) {
    hideAllProduct();
    GAME_PRODUCT = type.toUpperCase();
    getGameList();
}

function showDefault() {
    $(".section-game-content").html(`
    <div _ngcontent-serverapp-c162="" class="Board block text-left" id="list-product-board" style="padding: 10px;">
        <!-- <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="LCC" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/77e53fc97da545bb9a4f969f594901a8.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">LCC
                    Game
                    Bài</span>
            </div>
        </div> -->
        <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="JL" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/dde665baee074844bb171077fef0aa44.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">JILI
                    Game
                    Bài</span>
            </div>
        </div>
        <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="KM" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/77801ce0a8ba455db909164b39e9b92b.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">KM
                    Game
                    Bài</span>
            </div>
        </div>
        <!-- <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="TP" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/f75d88e00b75426aae563902db017a9e.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">TP
                    Game
                    Bài</span>
            </div>
        </div>
        <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="R88" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/1cd7c402b4ab4e039881edbf9cb08992.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">R88
                    Game
                    Bài</span>
            </div>
        </div>
        <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="MG" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/1a8d7ebd6a3844f7b750f6b11ce59054.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">MG
                    Game
                    Bài</span>
            </div>
        </div>
        <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="FTG" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/18937fce9f754a38b11850cd5fa016a4.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">FTG
                    Game
                    Bài</span>
            </div>
        </div>
        <div _ngcontent-serverapp-c162="" class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
            <div data-product="BSP" onclick="openBoardProduct($(this))" _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t" src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/fa04783f33724730ab4c2b8ed8a06100.jpg">
            </div>
            <div _ngcontent-serverapp-c162="" class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                <span _ngcontent-serverapp-c162="" class="text-xs">BSP
                    Game
                    Bài</span>
            </div>
        </div> -->
    </div>
    `);
}

function getGameList() {
    if (GAME_PRODUCT == "INDEX") {
        showDefault();
        return;
    }

    $.ajax({
        "url": `${mainApi}/api/product/${GAME_PRODUCT}/${GAME_CATEGORY}`,
        "method": "GET",
        "timeout": 0,
        "headers": {}
    }).done(function (response) {
        if (response.status) {
            GAME_LIST = response.data.games;
            showGameToList(GAME_LIST);
        } else {
            initAuthNotifyModal(true, response.msg);
        }
    });
}

function showGameToList(data) {
    hideAllProduct();
    data.forEach((item) => {
        $(".section-game-content").append(`
            <div data-product="${item.productCode}" data-code="${item.tcgGameCode}" onclick="javascript:launchBoardGame($(this))" _ngcontent-serverapp-c80="" class="text-customized-text-primary game-item relative mx-[1%] mb-3 inline-block w-[30%] text-center align-top text-sm">
                <div _ngcontent-serverapp-c80="" class="relative mx-auto max-w-[108px]">
                    <div _ngcontent-serverapp-c80="">
                        <img _ngcontent-serverapp-c80="" style="border-radius: 7px;" class="w-full" src="${item.icon}" title="${item.gameName}">
                        <div _ngcontent-serverapp-c80="" class="icon">
                            <i _ngcontent-serverapp-c80="" class="icon1"></i>
                            <i _ngcontent-serverapp-c80="" class="icon3"></i>
                        </div>
                    </div>
                </div>
                <div _ngcontent-serverapp-c80="" class="text">${item.gameName}</div>
            </div>
        `);
    });
}

function searchGame(name) {
    const gameFiltered = [];
    GAME_LIST.forEach((item) => {
        if (item.gameName.includes(name)) {
            gameFiltered.push(item);
        }
    });
    showGameToList(gameFiltered);
}

function openBoardProduct(product) {
    window.location = "/lobby/board/" + product.attr("data-product");
}

function launchBoardGame(product) {
    launchGame(product.attr("data-product"), product.attr("data-code"));
}

function launchGame(gameProduct, gameCode) {
    const product = gameProduct;
    const code = gameCode;

    if (!isLogin) {
        initAuthNotifyModal(true, "Vui lòng đăng nhập trước khi khởi chạy trò chơi!");
        return;
    }
    //++++ tự động nạp tiền vào game
    await submitToGameAllCashInOutByProduct(product, 1, code, false).then((result) => {
    setTimeout(() => {
    $.ajax({
        url: `${mainApi}/api/game/launchgame/${product.toUpperCase()}?code=${code}&platform=mobile`,
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
        type: "get",
        dataType: "json",
        success: function (result) {
            if (result.status) {
                window.location = "/Redirect?url=" + utoa(result.data.playUrl);
                // var userAgent = window.navigator.userAgent.toLowerCase(),
                //     ios = /iphone|ipod|ipad/.test(userAgent);
                // if (ios) {
                //     var winRef = window.open();
                // } else {
                //     var anchor = document.createElement('a');
                // }

                // if (ios) {
                //     winRef.location = "/Redirect?url=" + utoa(result.data.playUrl);
                // } else {
                //     anchor.href = "/Redirect?url=" + utoa(result.data.playUrl);
                //     anchor.target = "_blank";
                //     anchor.click();
                // }
            } else {
                initAuthNotifyModal(true, result.msg);
            }
        },
    });
}, 2000);        
});
}
