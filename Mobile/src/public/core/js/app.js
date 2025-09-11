"use strict";

const LIST_PRODUCT_TYPE = [
    'slot',
    'live',
    'fish',
    'sport',
    'lottery',
    'board',
    'cockfighting',
    'livestream'
];


$(document).ready(() => {
    $(".category-list").on('click', 'li', function () {
        $(".category-list li.active").removeClass("active");
        $(this).addClass("active");
        changeTabGame($(this).attr("data-product-type"));
    });
    getFishGameList();
});

function getFishGameList() {
    $.ajax({
        url: `${mainApi}/api/product/fish`,
        headers: {
            "Content-Type": "application/json",
        },
        type: "get",
        dataType: "json",
        success: function (result) {
            if (result.status) {
                $("#list-product-fish").html(``);
                for (var product in result.data) {
                    $("#list-product-fish").append(`
                        <div _ngcontent-serverapp-c162="" onclick="launchGame('${result.data[product].product}', '${product}')"
                            class="third:mr-0 relative mt-[2%] mr-[1%] box-border inline-block min-h-[82px] w-[32%] min-w-[74px] text-center">
                            <div _ngcontent-serverapp-c162="" class="relative flex h-[64px] items-center justify-center">
                                <img _ngcontent-serverapp-c162="" class="max-h-[100%] max-w-[100%] rounded-t"
                                    src="${result.data[product].icon}">
                            </div>
                            <div _ngcontent-serverapp-c162=""
                                class="bg-customized-bg-quaternary text-customized-text-secondary h-[26px] truncate rounded-b text-center text-sm leading-[22px] tracking-tighter">
                                <span _ngcontent-serverapp-c162="" class="text-xs">
                                ${result.data[product].name}
                                </span>
                            </div>
                        </div>
                    `);
                }
            } else { }
        },
    });
}

function hideAllProduct() {
    LIST_PRODUCT_TYPE.forEach((product) => {
        $("#list-product-" + product).hide();
    });
}

function changeTabGame(type) {
    hideAllProduct();
    $("#list-product-" + type).fadeIn();
}

function openSlotProduct(product) {
    window.location = "/lobby/slot/" + product.attr("data-product");
}

function openLiveCasino(product) {
    launchGame(product.attr("data-product"), product.attr("data-code"));
}

function openSportProduct(product) {
    launchGame(product.attr("data-product"), product.attr("data-code"));
}

function openLotteryProduct(product) {
    launchGame(product.attr("data-product"), product.attr("data-code"));
}

function openBoardProduct(product) {
    window.location = "/lobby/board/" + product.attr("data-product");
}


function launchGame(gameProduct, gameCode) {
    const product = gameProduct;
    const code = gameCode;

    if (!isLogin) {
        initAuthNotifyModal( "Vui lòng đăng nhập trước khi khởi chạy trò chơi!");
        return;
    }
    //++++ tự động nạp tiền vào game
    submitToGameAllCashInOutByProduct(product, 1, code, false);

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
                setTimeout(() => {
                    // window.location = "/Redirect?url=" + utoa(result.data.playUrl);
                    var userAgent = window.navigator.userAgent.toLowerCase(),
                        ios = /iphone|ipod|ipad/.test(userAgent);
                    if (ios) {
                        window.location = result.data.playUrl;
                    } else {
                        var anchor = document.createElement('a');
                        anchor.href = "/Redirect?url=" + utoa(result.data.playUrl);
                        anchor.target = "_blank";
                        anchor.click();
                    }
                }, 300);
            } else {
                initAuthNotifyModal(result.msg);
            }
        },
    });
}

// //++++ Rút tất cả số dư về ví chính
// function autoCashOut(currentProvide, currentAmount) {
//     if (currentProvide == null) {
//         console.log(`autoCashOut ${currentProvide} ${currentAmount} - Vui lòng chọn nhà cung cấp trò chơi.`);
//         return;
//     }
//     if (currentAmount < 1) {
//         console.log(`autoCashOut ${currentProvide} ${currentAmount} Số điểm rút phải lớn hơn 0.`);
//         return;
//     }
//     return $.ajax({
//             "url": `${mainApi}/api/game/wallet-transfer`,
//             "method": "POST",
//             "timeout": 0,
//             "headers": {
//                 "Authorization": `Bearer ${bearerToken}`,
//                 "Content-Type": "application/json",
//             },
//             "data": JSON.stringify({
//                 amount: Number(currentAmount),
//                 type: currentProvide,
//                 transferType: 2
//             }),
//         }).done(function (response) {
//             console.log(`autoCashOut ${currentProvide} ${currentAmount}`);
//             console.log(response);
//         });
// }

// const withdrawAllWalletBalance = () => {
//     $.ajax({
//         "url": `${mainApi}/api/game/gameAvalible`,
//         "method": "GET",
//         "timeout": 0,
//         "headers": {
//             "Authorization": `Bearer ${bearerToken}`,
//             "Content-Type": "application/json",
//         },
//     }).done((response) => {
//         if (response.status) {
//             const ListSubname = response.data;
//             for (const item in ListSubname) {
//                 // check balance
//                 setTimeout(() => {
//                     console.log(item);
//                     getWalletBalanceByGame(item.toUpperCase(), ListSubname[item].name.toUpperCase()).done((response) => {
//                         if (response && response.balance * 1 > 0) {
//                             autoCashOut(ListSubname[item].type, response.balance)
//                         }
//                     });
//                 }, 100);
//             }
//             setTimeout(() => {
//                 initAuthNotifyModal( "Thông báo", "Rút tất cả số dư về ví chính thành công!");
//                 reloadBalanceBackground()
//             }, 2000);
//         } else {
//             alert(response.msg);
//         }
//     });
// }

// function reloadBalanceBackground(enableNotify = true) {
//     try {
//         $.ajax({
//             url: `${mainApi}/api/auth/me`,
//             headers: {
//                 "Authorization": `Bearer ${bearerToken}`,
//                 "Content-Type": "application/json",
//             },
//             type: "get",
//             dataType: "json",
//             success: function (result) {
//                 if (result.status) {
//                     const meData = result.user;
//                     $(".balance").html(`${numberWithCommas(meData.coin)}`);
//                 } else {
//                     if (enableNotify) {
//                         initAuthNotifyModal("Gợi ý", "Phiên đăng nhập hết hiệu lực!");
//                     }
//                 }
//             },
//         });
//     } catch (e) {
//         console.log(e);
//         if (enableNotify) {
//             initAuthNotifyModal( "Gợi ý", "Có lỗi xảy ra, vui lòng thử lại!");
//         }
//     }
// }

// const getWalletBalanceByGame = (gameID, gameName) => {
//     console.log(`getWalletBalanceByGame ${gameID} ${gameName}`);
//     return $.ajax({
//         "url": `${mainApi}/api/game/wallets/${gameID.toUpperCase()}`,
//         "method": "GET",
//         "timeout": 0,
//         "headers": {
//             "Authorization": `Bearer ${bearerToken}`,
//             "Content-Type": "application/json",
//         },
//     }).done((response) => {
//         if (response.status) {
//             return response;
//         } else {
//             return -1;
//         }
//     });
// }

// setInterval(() => {
//     reloadBalanceBackground(false)
// }, 3000);

// Detect Device To Redict
// (!isMobile.any()) ? window.location = "https://www." + (new URL(window.location.href)).hostname.replace('m.', '') : null;