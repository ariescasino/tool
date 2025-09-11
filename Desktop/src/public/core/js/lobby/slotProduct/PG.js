
'use strict';

let GAME_PRODUCT = "PG";
let GAME_CATEGORY = "RNG";
let GAME_LIST = [];

function launchGame(item) {
    const product = item.attr("data-product");
    const code = item.attr("data-code");
    const dataType = item.attr("data-type");
    console.log(product, code);
    if (!isLogin) {
        alert("Vui lòng đăng nhập trước khi khởi chạy trò chơi!");
        return;
    }

    var userAgent = window.navigator.userAgent.toLowerCase(),
        ios = /iphone|ipod|ipad/.test(userAgent);
    if (ios) {
        var winRef = window.open();
    } else {
        var anchor = document.createElement('a');
    }
    
    //++++ tự động nạp tiền vào game
    submitToGameAllCashInOut(dataType, product, 1, code, false);
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
                } else {
                    anchor.href = "/Redirect?url=" + utoa(result.data.playUrl);
                    anchor.target = "_blank";
                    anchor.click();
                }
            } else {
                alert(result.msg);
            }
        },
    });
}


$(document).ready(() => {
    getGameList();
    $(".input-search").keyup(function () { searchGame($(this).val()) });
});

function getGameList() {
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
            alert(response.msg);
        }
    });
}

function showGameToList(data) {
    $(".game-list").html(``);
    data.forEach((item) => {
        $(".game-list").append(`
            <li class="game-wrapper ng-scope" data-product="${item.productCode}" data-code="${item.tcgGameCode}" data-type="${item.productType}" onclick="javascript:launchGame($(this))">
                <figure class="game-logo">
                    <img src="${item.icon}">
                    <figcaption title="${item.icon}" class="ng-binding">
                        ${item.gameName}
                    </figcaption>
                </figure>
            </li>
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