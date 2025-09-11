
function launchLotteryGame(product) {
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
