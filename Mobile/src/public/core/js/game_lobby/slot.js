"use strict";

let GAME_PRODUCT = DEFAULT_GAME_PRODUCTION;
let GAME_CATEGORY = "RNG";
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
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="R88" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/3b74032a72a846ab810b4a544024e936.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">RICH88 Điện Tử</span>
        </div>
    </div>
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="CQ9" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/d32a1112f2bd41efad346eda63b2dffa.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            cla ss="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">CQ9 Điện Tử</span>
        </div>
    </div>
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="PG" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/afb9924f73744a03ba844e975cd682fa.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">PG Điện Tử</span>
        </div>
    </div>
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="JL" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center"><i _ngcontent-serverapp-c162=""
                class="hot icon ng-star-inserted"></i><i _ngcontent-serverapp-c162=""
                class="event icon ng-star-inserted"></i><img _ngcontent-serverapp-c162=""
                class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/35f68c486fe84180b878f8a1d5229deb.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">JILI Điện Tử</span>
        </div>
    </div>
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="TP" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center"><i _ngcontent-serverapp-c162=""
                class="hot icon ng-star-inserted"></i><img _ngcontent-serverapp-c162=""
                class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/5fd791a8ee0f4c70950a9a9f419f58f6.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">TP Điện Tử</span>
        </div>
    </div> -->
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="FC" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center"><i _ngcontent-serverapp-c162=""
                class="hot icon ng-star-inserted"></i><i _ngcontent-serverapp-c162=""
                class="event icon ng-star-inserted"></i><img _ngcontent-serverapp-c162=""
                class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/0742384749824dd3ae73a1b38d5fe965.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">FC Điện Tử</span>
        </div>
    </div>
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="JDB" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/58578c3662284f63845d0bdae7532637.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">JDB Điện Tử</span>
        </div>
    </div>
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="PP" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/c706021454c34014966d67d9dc9ead40.jpg">
        </div>
        <div data-product="PG" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">PP Điện Tử</span>
        </div>
    </div> -->
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="MG" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center"><i _ngcontent-serverapp-c162=""
                class="event icon ng-star-inserted"></i><img _ngcontent-serverapp-c162=""
                class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/9e3ec48998084aeba98a4a984a133e10.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">MG Điện Tử</span>
        </div>
    </div>
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="VA" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/6579cb0e808248a9b8af40eef0f86f6c.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">VA Điện Tử</span>
        </div>
    </div> -->
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="BNG" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center"><i _ngcontent-serverapp-c162=""
                class="event icon ng-star-inserted"></i><img _ngcontent-serverapp-c162=""
                class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/5102bc212e2b4b30aef278642022cb1b.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">BNG Điện Tử</span>
        </div>
    </div> -->
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="KA" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/9d86fbc6beea49aa9a00749a952ca4f0.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">KA Điện Tử</span>
        </div>
    </div>
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="FTG" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/aa2dd006bc3049c0a9994dfb0f34d627.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">FTG Điện Tử</span>
        </div>
    </div> -->
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="PS" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/6758f86016af48449ef9525dba2ecaa1.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">PS Điện Tử</span>
        </div>
    </div> -->
    <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="PT" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/4e03937687c947b9adcc214b9addcb6e.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">PT Điện Tử</span>
        </div>
    </div>
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="HB" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/eeabedaaf1334ad9b99a2f7c1b6ec02e.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">HB Điện Tử</span>
        </div>
    </div> -->
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="NE" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center"><i _ngcontent-serverapp-c162=""
                class="event icon ng-star-inserted"></i><img _ngcontent-serverapp-c162=""
                class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/c1ba07101753489d88b5a6633341d6da.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">NE Điện Tử</span>
        </div>
    </div> -->
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="SPRIBE" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/9580bf78ef664ad4a58c8413577ab098.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">Spribe Điện Tử</span>
        </div>
    </div> -->
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="RSG" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/ddddfac8da63454e94e46b6fe88ab291.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">RSG Điện Tử</span>
        </div>
    </div> -->
    <!-- <div _ngcontent-serverapp-c162=""
        class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center ng-star-inserted">
        <div data-product="BSP" onclick="openSlotProduct($(this))" _ngcontent-serverapp-c162=""
            class="relative flex h-[64px] items-center justify-center">
            <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                src="/cdn/system-requirement/Multimedia/Navigation/Mobile/Term/1c3134895d994bdb8af4cf59edfef095.jpg">
        </div>
        <div _ngcontent-serverapp-c162=""
            class="bg-customized-bg-quaternary text-customized-text-secondary h-[26%] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
            <span _ngcontent-serverapp-c162="" class="text-xs">BSP Điện Tử</span>
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
            <div data-product="${item.productCode}" data-code="${item.tcgGameCode}" onclick="javascript:launchSlotGame($(this))" _ngcontent-serverapp-c80="" class="text-customized-text-primary game-item relative mx-[1%] mb-3 inline-block w-[30%] text-center align-top text-sm">
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

function openSlotProduct(product) {
    window.location = "/lobby/slot/" + product.attr("data-product");
}

function launchSlotGame(product) {
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
    submitToGameAllCashInOutByProduct( product, 1, code, false).then((result) => {
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
