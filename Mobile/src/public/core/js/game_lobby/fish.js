$(document).ready(() => {
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
                $(".list-product-fish").html(``);
                for (var product in result.data) {
                    $(".list-product-fish").append(`
                        <app-game-item _ngcontent-serverapp-c185="" _nghost-serverapp-c80="" class="ng-star-inserted">
                            <div _ngcontent-serverapp-c80=""
                                class="text-customized-text-primary game-item relative mx-[1%] mb-3 inline-block w-[30%] text-center align-top text-sm">
                                <div _ngcontent-serverapp-c80="" class="relative mx-auto max-w-[108px]">
                                    <div _ngcontent-serverapp-c80="" onclick="launchGame('${result.data[product].product}', '${product}')">
                                        <img _ngcontent-serverapp-c80="" class="w-full"
                                            src="${result.data[product].icon}">
                                        <div _ngcontent-serverapp-c80="" class="icon">
                                            <i _ngcontent-serverapp-c80="" class="icon1"></i>
                                            <i _ngcontent-serverapp-c80="" class="icon2"></i>
                                            <i _ngcontent-serverapp-c80="" class="icon3"></i>
                                            <i _ngcontent-serverapp-c80="" class="icon4"></i>
                                        </div>
                                    </div>
                                    <app-game-favorite _ngcontent-serverapp-c80="" _nghost-serverapp-c79="" class="ng-star-inserted">
                                        <div _ngcontent-serverapp-c79="" class="text-xs favorite ng-star-inserted">
                                            <i _ngcontent-serverapp-c79="" class="fal fa-heart ng-star-inserted"></i>
                                        </div>
                                    </app-game-favorite>
                                </div>
                                <div _ngcontent-serverapp-c80="" class="text">
                                    ${result.data[product].name}
                                </div>
                            </div>
                        </app-game-item>
                    `);                    
                }
            } else {}
        },
    });
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
