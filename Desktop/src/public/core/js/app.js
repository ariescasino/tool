"use strict";
let USER_ACTION_MENU_SHOW = false;

let APP_DOWNLOAD = {
    IOS: "https://www.789clubs.world/account/withdraw",
    ANDROID: "https://www.789clubs.world/account/deposit"
};

const LIST_URL_ENUM = {
    "home": "/",
    "slot": "/Lobby/Game",
    "live": "/Lobby/Live",
    "fish": "/Lobby/Fish",
    "sport": "/Lobby/Sport",
    "lottery": "/Lobby/Game",
    "cock": "/Lobby/CockFighting",
    "board": "/Lobby/Board",
    "promotion": "/Promotion",
    "download": "/Download",
    "support": "/Support"
};

$(document).ready(function () {
    $("nav._4GFFQME3VxQOLaxRzBxeQ ul li").each(function (index) {
        if ($(this).attr("class") == "ng-scope") {
            addSubClick($(this).children("a").children("span"));
        };
    });
});


(function () {
    // Login Button Click Show
    $("._2mBNgBjbvImj-b_6WuwAFm").on('click', function () { initAuthModal(true, true) });
    // Login Button Click Hide
    $("._38xNbPhu8VneFOc5oh78Hr").on('click', function () { initAuthModal(true, false) });
    // Register Button Click Show
    $(".ppUNnOlkVUpue-NNt6vxo").on('click', function () { initAuthModal(false, true) });
    // Register Button Click Hide
    $("._2ZxfNIqB8ZGUvf62lMlRii").on('click', function () { initAuthModal(false, false) });

    // Login In Register Modal Click
    $("._3eN8dYJXCF83-Dh1qe5MAc").on('click', function () { initAuthModal(true, true, true) });
    // Register In Login Modal Click
    $("._3bcYJCzylw0eAO3uq2kJMq").on('click', function () { initAuthModal(false, true, true) });

    // Login Form btn click 
    $("#loginForm").on('submit', function (event) { loginPOST(event) });
    // Resgiter Form btn click 
    $("#registerForm").on('submit', function (event) {
         registerPOST(event) 
    });

    // Close Modal Notify 
    $(".ze8tEtJj_ZjnERvE_Rkerclose").on('click', function () { initAuthNotifyModal(false) });
    // add phone and email to form register
    $('#registerForm input#email').val(`guest000${RandomUserName(8).toLowerCase()}@gmail.com`);
    //$('#registerForm input#phone').val(randomPhone());


    // nav menu 
    $("._2pgWcte96LWeLJIJSxtBYd").on("click", function () {
        USER_ACTION_MENU_SHOW = (USER_ACTION_MENU_SHOW == false) ? true : false;
        if (USER_ACTION_MENU_SHOW) {
            $("._1_C5B74ifan6TN0Qu5DRDU").removeClass("ng-hide").addClass("ng-show");
        } else {
            $("._1_C5B74ifan6TN0Qu5DRDU").removeClass("ng-show").addClass("ng-hide");
        }
    });

    // game hot
    initGameRecommended();
    // dowwnload
    makeDiviceAppDownload();

    // Resgiter Form btn click 
    $("#reloadBalanceBtn").on('click', function (event) { reloadBalance(event) });

})();

function addSubClick(element) {
    element.on('click', function (event) {
        let gameType = null;
        let gameCode = null;

        if ($(this).attr("data-game").includes(" Điện Tử")) {
            gameType = "Slot";
            gameCode = $(this).attr("data-game").split(" ")[0];
        } else if ($(this).attr("data-game").includes(" Trực Tuyến")) {
            gameType = "Live";
            gameCode = $(this).attr("data-game").split(" ")[0];
        } else if ($(this).attr("data-game").includes(" Thể Thao")) {
            gameType = "Sport";
            gameCode = $(this).attr("data-game").split(" ")[0];
        } else if ($(this).attr("data-game").includes(" Xổ Số")) {
            gameType = "Lottery";
            gameCode = $(this).attr("data-game").split(" ")[0];
        } else if ($(this).attr("data-game").includes(" Đá Gà")) {
            gameType = "CockFighting";
            gameCode = $(this).attr("data-game").split(" ")[0];
        } else if ($(this).attr("data-game").includes(" Game Bài")) {
            gameType = "Board";
            gameCode = $(this).attr("data-game").split(" ")[0];
        }

        // open game
        createGameWindow(gameType, gameCode);

        // stop all propagation
        event.stopPropagation();
    });
}

function createGameWindow(gameType, gameProduct) {
    if (gameType == "Slot") {
        window.open(
            '/Lobby/Game/' + gameProduct,
            'popUpWindow',
            'height=800,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
        );
    } else if (gameType == "Live") {

        let product = null;
        let code = null;

        switch (gameProduct) {
            case "SE":
                product = "SEX";
                code = "SEX001";
                break;
            case "SA":
                product = "SA";
                code = "SA0001";
                break;
            case "EG5":
                product = "EG5";
                code = "EG5001";
                break;
            case "TP":
                break;
            case "BG":
                break;
            case "MG":
                product = "MG";
                code = "MG0001";
                break;
            case "PP":
                product = "PP";
                code = "PP0141";
                break;
            case "OB":
                product = "OB";
                code = "OB0001";
                break;
            case "PT":
                product = "PTU";
                code = "PTU002";
                break;
            case "DG":
                product = "DG";
                code = "DG0013";
                break;
            case "WM":
                product = "WM";
                code = "WM0001";
                break;
            case "AG":
                product = "AG";
                code = "A00070";
                break;
            case "GPI":
                product = "GPI";
                code = "GPI001";
                break;
        }

        if (product && code) launchGame(product, code);
    } else if (gameType == "Sport") {

        let product = null;
        let code = null;

        switch (gameProduct) {
            case "SB":
                product = "SB";
                code = "SB0001";
                break;
            case "CMD":
                product = "CMD";
                code = "CMD001";
                break;
            case "UG2":
                product = "UG2";
                code = "UG2001";
                break;
            case "SBO":
                product = "SBO";
                code = "SBO0001";
                break;
        }

        if (product && code) launchGame(product, code);
    } else if (gameType == "Lottery") {

        let product = null;
        let code = null;

        switch (gameProduct) {
            case "TP":
                break;
            case "VR":
                break;
        }
        if (product && code) launchGame(product, code);
    } else if (gameType == "CockFighting") {

        let product = null;
        let code = null;

        switch (gameProduct) {
            case "WS168":
                product = "WS168";
                code = "WS1682";
                break;
        }
        if (product && code) launchGame(product, code);
    } else if (gameType == "Board") {

        let product = null;
        let code = null;

        window.open(
            "/Redirect?url=" + utoa('/Lobby/Board/' + gameProduct),
            'popUpWindow',
            'height=800,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
        );

        switch (gameProduct) {
            case "V8":
                break;
            case "JILI":
                break;
            case "TP":
                break;
            case "RICH88":
                break;
            case "KM":
                break;
            case "MG":
                break;
            case "FTG":
                break;
        }
        if (product && code) launchGame(product, code);
    }
}

function initGameRecommended() {
    if ($("._3ppcwOkSyQWl-WAP_h_oej").length) {
        const GAME_CODE = "R88";
        $.ajax({
            url: `${mainApi}/api/product/${GAME_CODE}/RNG`,
            headers: { "Content-Type": "application/json" },
            type: "get",
            dataType: "json",
            success: function (result) {
                if (result.status) {
                    const gameList = result.data.games;
                    if (gameList.length > 0) {
                        shuffle(gameList);
                        // add tab game recommed
                        for (let i = 0; i < 10; i++) {
                            $("#propose").append(`
                                <li ng-repeat="game class="ng-scope" onclick="launchGame('${gameList[i].productCode}', '${gameList[i].tcgGameCode}')" style="">
                                    <img src="${gameList[i].icon}">
                                    <div class="ng-binding _3BWGcllC2hbMA9nLJl5G7Y">${gameList[i].gameName}</div>
                                    <i></i>
                                </li>
                            `);
                        }

                        // add tab game hot
                        for (let i = 10; i < 20; i++) {
                            $("#hot").append(`
                            <li ng-repeat="game class="ng-scope" onclick="launchGame('${gameList[i].productCode}', '${gameList[i].tcgGameCode}')" style="">
                                <img src="${gameList[i].icon}">
                                <div class="ng-binding _3BWGcllC2hbMA9nLJl5G7Y">${gameList[i].gameName}</div>
                                <i></i>
                            </li>
                        `);
                        }
                    }
                }
            },
        });
    }
}
// CHUYEN QUY V2
function launchGame(gameProduct, gameCode) {
    const product = gameProduct;
    const code = gameCode;
    let dataType = 0;

    if (!isLogin) {
        initAuthModal(true, true);
        return;
        initAuthNotifyModal(true, "Gợi ý", "Vui lòng đăng nhập trước khi khởi chạy trò chơi!");
        return;
    }

    // ++++ Ẩn popup ko cần thiết 
    // Xay dung modal chuyen quy ngay tai day
//     const modalHtml = `
//     <div class="game-transfer-wallet-modal-v2 undefined open">
//     <div class="game-transfer-wallet-modal-v2__main">
//       <div class="game-transfer-wallet-modal-v2__header">
//         <div class="game-transfer-wallet-modal-v2__title">Thông Báo Xác Nhận Tự Động Chuyển Quỹ Liên Minh 68BET
//           <button class="game-transfer-wallet-modal-v2__close">X
//           </button>
//         </div>
//       </div>
// 	  <img src="/images/banner-slide/logo_login.png" style="width: 150px;height:auto;margin-left: 150;">
//       <div class="game-transfer-wallet-modal-v2__content">
//         <div class="game-transfer-wallet-modal-v2__item"><span>Ví chính</span>
//           <div><span class="game-transfer-wallet-modal-v2__item-amount">0 K</span><button>Chuyển Nhanh</button></div>
//         </div>
//         <div class="game-transfer-wallet-modal-v2__item"><span class="game-transfer-wallet-modal-v2__wallet-title" color="danger">${product}</span>
//           <div><span class="game-transfer-wallet-modal-v2__item-amount">0 K</span><button>Rút Nhanh</button></div>
//         </div>       
//       </div>
//       <div class="game-transfer-wallet-modal-v2__footer">
//         <button color="danger">Vào game</button>
//         <button style="display: none" color="danger">Nạp hết &amp; Vào game</button>
//       </div>
//     </div>
//   </div>
//     `
    // Thêm sự kiện click vào phần tử .game-transfer-wallet-modal-container
    // ++++ Ẩn popup ko cần thiết 
    // $('#game-transfer-wallet-modal-container').html(modalHtml);
	// ---- Ẩn popup ko cần thiết 
    // Sự kiện để đóng modal khi nhấn vào nút HỦY
    // $('#game-transfer-wallet-modal-container').on('click', '.game-transfer-wallet-modal-v2__close', function () {
    //     $('#game-transfer-wallet-modal-container').empty();
    // });

    $.ajax({
        "url": `${mainApi}/api/game/gameAvalible`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            const ListSubname = response.data;
            for (const item in ListSubname) {
                if (ListSubname.hasOwnProperty(item) && item === product) {
                    dataType = ListSubname[item].type;
                    break;
                }
            }
            // ++++ Ẩn popup ko cần thiết 
            submitAllCashInOut(dataType, product, 1, code, false);
            startGame(product, code);
        } else {
            alert(response.msg);
        }
    });


    // // Call getWalletV2 with the gameID (which is the same as the product)
    // getWalletV2(product);
    // // Call balance of user
    // reloadBalanceV2();
	// ---- Ẩn popup ko cần thiết 
    // all cast in
    $('.game-transfer-wallet-modal-v2__item').eq(0).find('button').on('click', function () {
        submitAllCashInOut(dataType, product, 1, code, false);
    });
    // all cast out
    $('.game-transfer-wallet-modal-v2__item').eq(1).find('button').on('click', function () {
        submitAllCashInOut(dataType, product, 2, code, false);
    });
    // cast in optional
    $('#game-transfer-wallet-optional').on('click', function () {
        // Lấy giá trị từ ô input
        const amount = $('input[name="amount"]').val();
        // Kiểm tra xem giá trị nhập vào có hợp lệ không
        if (isNaN(amount) || amount <= 0) {
            // Hiển thị thông báo lỗi nếu giá trị không hợp lệ
            initAuthNotifyModal(true, `Gợi ý`, `Vui lòng nhập số tiền hợp lệ.`);
            return;
        }
        // Gọi hàm xử lý nạp tiền với giá trị nhập vào
        submitCashInOptional(dataType, product, amount);
    });

    // start game
    $('.game-transfer-wallet-modal-v2__footer').eq(0).find('button').on('click', function () {
        //++++ tự động nạp tiền vào game
        submitAllCashInOut(dataType, product, 1, code, false);
        startGame(product, code);
    });

    // all-in and start game
    $('.game-transfer-wallet-modal-v2__footer').find('button:last-child').on('click', function () {
        submitAllCashInOut(dataType, product, 1, code, true);
    });

}

function startGame(product, code ) {
    var userAgent = window.navigator.userAgent.toLowerCase(),
        ios = /iphone|ipod|ipad/.test(userAgent);
    if (ios) {
        var winRef = window.open();
    } else {
        var anchor = document.createElement('a');
    }

    $.ajax({
        url: `${mainApi}/api/game/launchgame/${product.toUpperCase()}?code=${code}`,
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
        type: "get",
        dataType: "json",
        success: function (result) {
            if (result.status) {
                if (ios) {
                    winRef.location = "/Redirect?url=" + utoa(result.data.playUrl);
                    $('#game-transfer-wallet-modal-container').empty();
                } else {
                    anchor.href = "/Redirect?url=" + utoa(result.data.playUrl);
                    anchor.target = "_blank";
                    anchor.click();
                    $('#game-transfer-wallet-modal-container').empty();
                }
            } else {
                initAuthNotifyModal(true, "Gợi ý", result.msg);
            }
        },
    });
}


function reloadBalanceV2() {
    try {
        $.ajax({
            url: `${mainApi}/api/auth/me`,
            headers: {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            type: "get",
            dataType: "json",
            success: function (result) {
                if (result.status) {
                    const meData = result.user;
                    const readableCoin = Math.round(meData.coin / 1000);
                    $('.game-transfer-wallet-modal-v2__item-amount').first().text(`${numberWithCommas(readableCoin)} K`);
                } else {
                    initAuthNotifyModal(true, "Gợi ý", "Phiên đăng nhập hết hiệu lực!");
                }
            },
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, "Gợi ý", "Có lỗi xảy ra, vui lòng thử lại!");
    }
}

const getWalletV2 = (gameID) => {
    $.ajax({
        "url": `${mainApi}/api/game/wallets/${gameID.toUpperCase()}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            $('.game-transfer-wallet-modal-v2__item-amount').eq(1).text(`${response.balance} K`);
        } else {
            console.error('Failed to retrieve balance');
        }
    }).fail((jqXHR, textStatus, errorThrown) => {
        console.error('AJAX call failed: ', textStatus, errorThrown);
    });
}

function submitAllCashInOut(currentProvide, gameID, transferType, code, isStartGame) {
    let currentAmount = 0;

    // Function to handle submitting cash in after getting user data
    const handleCashIn = function () {
        // Kiểm tra xem số tiền hiện tại có hợp lệ không
        if (currentAmount < 1000) {
            initAuthNotifyModal(true, `Gợi ý`, `Số tiền phải lớn hơn 1000 VND.`);
            return;
        }

        try {
            // Gọi API để chuyen quy / rut quy
            $.ajax({
                url: `${mainApi}/api/game/wallet-transfer`,
                method: "POST",
                timeout: 0,
                headers: {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    amount: Number(currentAmount),
                    type: currentProvide,
                    transferType: transferType
                }),
            }).done(function (response) {
                if (response.status) {
                    if (isStartGame) {
                        console.log("response", response)
                        startGame(gameID, code )
                    } else {
                        reloadBalanceV2()
                        getWalletV2(gameID)
                    }
                } else {
                    initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
                }
            });
        } catch (e) {
            console.log(e);
            initAuthNotifyModal(true, `Gợi ý`, `Có lỗi xảy ra vui lòng thử lại.`);
        }
    };

    const handleCashOut = function () {
        // Kiểm tra xem số tiền hiện tại có hợp lệ không
        if (currentAmount < 1) {
            initAuthNotifyModal(true, `Gợi ý`, `Số tiền phải lớn hơn 1K.`);
            return;
        }

        try {
            // Gọi API để chuyen quy / rut quy
            $.ajax({
                url: `${mainApi}/api/game/wallet-transfer`,
                method: "POST",
                timeout: 0,
                headers: {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    amount: Number(currentAmount),
                    type: currentProvide,
                    transferType: transferType
                }),
            }).done(function (response) {
                if (response.status) {
                    reloadBalanceV2()
                    getWalletV2(gameID)
                } else {
                    initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
                }
            });
        } catch (e) {
            console.log(e);
            initAuthNotifyModal(true, `Gợi ý`, `Có lỗi xảy ra vui lòng thử lại.`);
        }
    };

    if (transferType == 1) {
        // Gọi API để lấy dữ liệu người dùng
        $.ajax({
            url: `${mainApi}/api/auth/me`,
            headers: {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            type: "get",
            dataType: "json",
            success: function (result) {
                if (result.status) {
                    const meData = result.user;
                    currentAmount = meData.coin;
                    // Gọi hàm xử lý chuyển tiền sau khi nhận dữ liệu người dùng
                    handleCashIn();
                } else {
                    initAuthNotifyModal(true, "Gợi ý", "Phiên đăng nhập hết hiệu lực!");
                }
            },
        });
    }
    if (transferType == 2) {
        $.ajax({
            "url": `${mainApi}/api/game/wallets/${gameID.toUpperCase()}`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                currentAmount = response.balance
                handleCashOut()
            } else {
                console.error('Failed to retrieve balance');
            }
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.error('AJAX call failed: ', textStatus, errorThrown);
        });
    }

}
function submitCashInOptional(currentProvide, gameID, numericAmount) {
    let currentAmount = 0;

    // Function to handle submitting cash in after getting user data
    const handleCashIn = function () {
        // Kiểm tra xem số tiền hiện tại có hợp lệ không
        if (currentAmount < 1000) {
            initAuthNotifyModal(true, `Gợi ý`, `Số tiền phải lớn hơn 1000 VND.`);
            return;
        }
        if (numericAmount > currentAmount) {
            initAuthNotifyModal(true, `Gợi ý`, `Số tiền không hợp lệ.`);
            return;
        }

        try {
            // Gọi API để chuyen quy
            $.ajax({
                url: `${mainApi}/api/game/wallet-transfer`,
                method: "POST",
                timeout: 0,
                headers: {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    amount: Number(numericAmount),
                    type: currentProvide,
                    transferType: 1
                }),
            }).done(function (response) {
                if (response.status) {
                    reloadBalanceV2()
                    getWalletV2(gameID)
                    $('input[name="amount"]').val("0");
                } else {
                    initAuthNotifyModal(true, `Ops!`, `${response.msg}`);
                }
            });
        } catch (e) {
            console.log(e);
            initAuthNotifyModal(true, `Gợi ý`, `Có lỗi xảy ra vui lòng thử lại.`);
        }
    };

    // Gọi API để lấy dữ liệu người dùng
    $.ajax({
        url: `${mainApi}/api/auth/me`,
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
        type: "get",
        dataType: "json",
        success: function (result) {
            if (result.status) {
                const meData = result.user;
                currentAmount = meData.coin;
                handleCashIn();
            } else {
                initAuthNotifyModal(true, "Gợi ý", "Phiên đăng nhập hết hiệu lực!");
            }
        },
    });
}

// END CHUYEN QUY V2

function getCaptcha() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            "url": `${mainApi}/api/captcha`,
            "method": "GET",
            "timeout": 0,
            "headers": { "Content-Type": "application/json" },
        }).done(function (response) {
            if (response.status) {
                resolve(response.captcha);
            } else {
                resolve("");
            }
        });
    });
}

async function initCaptcha(captchaSrcId) {
    const captcha = await getCaptcha();
    $("#" + captchaSrcId).attr("src", captcha);
}

function showBackdropModal(status) {
    if (status) $(".modal-backdrop").show();
    if (!status) $(".modal-backdrop").hide();
}

function initAuthModal(type, status, dump = false) {
    if (dump) {
        $("._2fMGqDLeVdueHNrY6jh1tZ").hide();
        $("._1M8UeeUNQsZy4H6GAA2ah3").hide();
    }

    if (type) { // login
        if (status) {
            showBackdropModal(true);
            // initCaptcha("_3kf2U2RqwnANN5VYWFRt8Xcaptcha");
            $("._2fMGqDLeVdueHNrY6jh1tZ").css("top", "-100px");
            $("._2fMGqDLeVdueHNrY6jh1tZ").show();
            $("._2fMGqDLeVdueHNrY6jh1tZ").animate({ top: '0' }, 100, () => { });
        } else {
            $("._2fMGqDLeVdueHNrY6jh1tZ").animate({ top: '-700px' }, 200, function () {
                $(this).fadeOut();
                showBackdropModal(false);
            });
        }
    } else { // register
        if (status) {
            showBackdropModal(true);
            $("._1M8UeeUNQsZy4H6GAA2ah3").css("top", "0");
            $("._1M8UeeUNQsZy4H6GAA2ah3").show();
            $("._1M8UeeUNQsZy4H6GAA2ah3").animate({ top: '-120px' }, 100, () => { });
        } else {
            $("._1M8UeeUNQsZy4H6GAA2ah3").animate({ top: '-1300px' }, 200, function () {
                $(this).fadeOut();
                showBackdropModal(false);
            });
        }
    }
}

function initAuthNotifyModal(status, title = "", message = "") {
    if (status) {
        $(".ze8tEtJj_ZjnERvE_Rkertitle").html(title);
        $(".ze8tEtJj_ZjnERvE_Rkercontent").html(message);
        $("._1M8UeeUNQsZy4H6GAA2notify").css({
            "z-index": "10000",
            "top": "-222px",
        }).show().animate({ top: '0px' }, 100);
    } else {
        $("._1M8UeeUNQsZy4H6GAA2notify").animate({ top: '-222px' }, 200, function () {
            $("._1M8UeeUNQsZy4H6GAA2notify").fadeOut();
        });
    }
}


function loginPOST(element) {
    /// stop all action form
    element.preventDefault();
    try {
        const username = $('#loginForm input#username').val();
        const password = $('#loginForm input#password').val();
        // const captcha = $('#loginForm input#captcha').val();

        if (!username || !password) {
            initAuthNotifyModal(true, "Gợi ý", "Vui lòng đầy đủ thông tin");
            return;
        }
        $.ajax({
            "url": "/auth/login",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "username": username,
                "password": password,
                "captcha": "123"
            }),
        }).done(function (response) {
            if (response.status) {
                setTimeout(() => {
                    window.location = "/";
                }, 200);
            } else {
                initAuthNotifyModal(true, "Gợi ý", response.msg);
            }
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, "Gợi ý", "Có lỗi xảy ra, vui lòng thử lại!");
    }
}

function registerPOST(element) {
    /// stop all action form
    element.preventDefault();
    try {

        if (!$('#registerForm input#username').val() ||
            !$('#registerForm input#password').val() ||
            !$('#registerForm input#password_cf').val() ||
            !$('#registerForm input#name').val() ||
            !$('#registerForm input#phone').val() ||
            !$('#registerForm input#email').val()) {
            initAuthNotifyModal(true, "Gợi ý", "Vui lòng đầy đủ thông tin");
            return;
        }

        const testUsername = new RegExp('^[a-zA-Z0-9]+$');
        const testName = new RegExp("^[a-zA-Z \s\.\!\?\"\-]+$");
        const testEmail = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");

        // validate input type  
        if (!testUsername.test($('#registerForm input#username').val())) {
            initAuthNotifyModal(true, "Gợi ý", "Tên tài khoản không hợp lệ!");
            return;
        }
        if (!testName.test($('#registerForm input#name').val())) {
            initAuthNotifyModal(true, "Gợi ý", "Họ và tên không hợp lệ!");
            return;
        }
        if (!testEmail.test($('#registerForm input#email').val())) {
            initAuthNotifyModal(true, "Gợi ý", "Email không hợp lệ");
            return;
        }

        // validate string length
        if ($('#registerForm input#username').val().length < 5 || $('#registerForm input#username').val().length > 20) {
            initAuthNotifyModal(true, "Gợi ý", "Tên tài khoản không được nhỏ hơn 5 và lớn hơn 20 ký tự!");
            return;
        }
        if ($('#registerForm input#name').val().length <= 5 || $('#registerForm input#name').val().length > 50) {
            initAuthNotifyModal(true, "Gợi ý", "Họ và tên không được nhỏ hơn 5 và lớn hơn 50 ký tự!");
            return;
        }
        if ($('#registerForm input#email').val().length < 5 || $('#registerForm input#email').val().length > 50) {
            initAuthNotifyModal(true, "Gợi ý", "Email không hợp lệ");
            return;
        }
        if ($('#registerForm input#phone').val().length < 9 || $('#registerForm input#phone').val().length > 15) {
            initAuthNotifyModal(true, "Gợi ý", "Số điện thoại không hợp lệ!");
            return;
        }
        if ($('#registerForm input#password').val().length < 5 || $('#registerForm input#password').val().length > 30) {
            initAuthNotifyModal(true, "Gợi ý", "Mật khẩu không được nhỏ hơn 8 và lớn hơn 20 ký tự");
            return;
        }
        if ($('#registerForm input#password').val() !== $('#registerForm input#password_cf').val()) {
            initAuthNotifyModal(true, "Gợi ý", "2 mật khẩu không trùng khớp!");
            return;
        }

        $.ajax({
            "url": "/auth/register",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "name": $('#registerForm input#name').val(),
                "username": $('#registerForm input#username').val(),
                "refcode": (!$('#registerForm input#refcode').val()) ? null : $('#registerForm input#refcode').val(),
                "email": $('#registerForm input#email').val(),
                "phone": $('#registerForm input#phone').val(),
                "password": $('#registerForm input#password').val()
            }),
        }).done(function (response) {
            if (response.status) {
                setTimeout(() => {
                    window.location = "/";
                }, 200);
            } else {
                initAuthNotifyModal(true, "Gợi ý", response.msg);
            }
        });

    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, "Gợi ý", "Có lỗi xảy ra, vui lòng thử lại!");
    }
}

function reloadBalance(element) {
    $("span#reloadBalanceBtn").html(`<i class="fa fa-refresh fa-spin"></i>`);
    try {
        $.ajax({
            url: `${mainApi}/api/auth/me`,
            headers: {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            type: "get",
            dataType: "json",
            success: function (result) {
                if (result.status) {
                    const meData = result.user;
                    setTimeout(() => {
                        $("span.header-balance").text(numberWithCommas(meData.coin));
                        $("span#reloadBalanceBtn").html(`<i class="fa fa-refresh"></i>`);
                    }, 1000);
                } else {
                    initAuthNotifyModal(true, "Gợi ý", "Phiên đăng nhập hết hiệu lực!");
                }
            },
        });
    } catch (e) {
        console.log(e);
        initAuthNotifyModal(true, "Gợi ý", "Có lỗi xảy ra, vui lòng thử lại!");
    }
}

function makeDiviceAppDownload() {
    $("#app-download-android").attr("href", APP_DOWNLOAD.ANDROID);
    $("#app-download-ios").attr("href", APP_DOWNLOAD.IOS);
}

function initClock() {
    //Khởi tạo đối tượng timer sử dụng Date Object
    var timer = new Date();
    var hour = timer.getHours();  //Lấy giờ hiện tại (giá trị từ 0 - 23)
    var minute = timer.getMinutes();  //Lấy phút hiện tại
    var second = timer.getSeconds();  //Lấy giây  hiện tại
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    const timeCurrent = hour + ":" + minute + ":" + second;
    const dateCurrent = `${moment().format("YYYY/MM/DD")} (T${moment().day()})`;
    $("._1V92G6pCR9QlefaMtJzebU").html(`${dateCurrent} ${timeCurrent}`);
}

//Thực hiện hàm clock theo chu kỳ 1 giây
setInterval("initClock()", 1000);

// Detect Device To Redict
// (isMobile.any()) ? window.location = "https://m." + (new URL(window.location.href)).hostname.replace('www.', '') : null;