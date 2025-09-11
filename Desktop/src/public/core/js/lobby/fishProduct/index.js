
'use strict';

let GAME_PRODUCT = "FISH";
let GAME_CATEGORY = "FISH";
let GAME_LIST = [];

function launchGame(item) {
    const product = item.attr("data-product");
    const code = item.attr("data-code");
    const dataType = item.attr("data-type");
    
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
        "url": `${mainApi}/api/product/fish`,
        "method": "GET",
        "timeout": 0,
        "headers": {}
    }).done(function (response) {
        if (response.status) {
            GAME_LIST = response.data;
            showGameToList(GAME_LIST);
        } else {
            alert(response.msg);
        }
    });
}

function showGameToList(data) {
    $(".game-list").html(``);
    for (var product in data) {
        $(".game-list").append(`
            <li class="game-wrapper ng-scope" data-product="${data[product].product}" data-code="${product}" onclick="javascript:launchGame($(this))">
                <figure class="game-logo">
                    <img src="${data[product].icon}">
                    <figcaption title="${data[product].name}" class="ng-binding">
                        ${data[product].name}
                    </figcaption>
                </figure>
            </li>
        `);    
    }
}

function searchGame(name) {
    const gameFiltered = [];
    for (var product in GAME_LIST) {
        if (GAME_LIST[product].name.includes(name)) {
            gameFiltered.push(GAME_LIST[product]);
        }
    }
    showGameToList(gameFiltered);
}