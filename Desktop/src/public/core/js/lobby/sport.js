
$(document).ready(() => {
    $(".sQpvrcvmGj828N9Fbik97").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".sQpvrcvmGj828N9Fbik97 li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabGame($(this).attr("data-produce"));
    });
});

function changeTabGame(type) {
    switch (type) {
        case "SB":
            $("#bg_logo").attr('class', 'saba');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/b5038850f12428c83fb013b085de76b9.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/b5038850f12428c83fb013b085de76b9.png");
            $("#desc").html("Nhà cung cấp thể thao phổ biến nhất ở Châu Á! Chọn trò chơi yêu thích của bạn");
            $(".playBtn").attr("onclick", "launchGame('SB', 'SB0001')");
            break;
        case "CMD":
            $("#bg_logo").attr('class', 'cmd');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/76af182b33181abbd23d702573ddc320.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/e46517ddd605ad50e4d0ee4a203e6708.png");
            $("#desc").html("Nhà cung cấp thể thao phổ biến nhất ở Châu Á! Chọn trò chơi yêu thích của bạn");
            $(".playBtn").attr("onclick", "launchGame('CMD', 'CMD001')");
            break;
        case "UG":
            $("#bg_logo").attr('class', 'ug');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/ffaf0d089c20d0dc08940b734919dc77.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/d47a2800974540031423e3a1b02486d7.png");
            $("#desc").html("Nhà cung cấp thể thao phổ biến nhất ở Châu Á! Chọn trò chơi yêu thích của bạn");
            $(".playBtn").attr("onclick", "launchGame('UG2', 'UG2001')");
            break;
        case "SBO":
            $("#bg_logo").attr('class', 'sbo');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/76af182b33181abbd23d702573ddc320.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/e46517ddd605ad50e4d0ee4a203e6708.png");
            $("#desc").html("Nhà cung cấp thể thao phổ biến nhất ở Châu Á! Chọn trò chơi yêu thích của bạn");
            $(".playBtn").attr("onclick", "launchGame('SBO', 'SBO041')");
            break;
    }
}



function launchGame(gameProduct, gameCode) {
    const product = gameProduct;
    const code = gameCode;

    if (!isLogin) {
        initAuthNotifyModal(true, "Gợi ý", "Vui lòng đăng nhập trước khi khởi chạy trò chơi!");
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
                initAuthNotifyModal(true, "Gợi ý", result.msg);
            }
        },
    });
}