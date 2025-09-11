
$(document).ready(() => {
    $("._2DD0Jwig5tgNkOBPtpcM_W").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $("._2DD0Jwig5tgNkOBPtpcM_W li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabGame($(this).attr("data-produce"));
    });
});

function changeTabGame(type) {
    switch (type) {
        case "SE":
            $("#bg_logo").attr('class', 'se');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/6fe3ee034cbfca330e64f11585845f1b.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/6fe3ee034cbfca330e64f11585845f1b.png");
            $("#desc").html("Nhà cung cấp baccarat thời gian thực, Trực tiếp từ Sòng bạc");
            $(".playBtn").attr("onclick", "launchGame('SEX', 'SEX001')");
            break;
        case "SA":
            $("#bg_logo").attr('class', 'sa');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/273e26f2f97b1f5c07cd7bba413ce5aa.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/273e26f2f97b1f5c07cd7bba413ce5aa.png");
            $("#desc").html("Trải nghiệm chơi game sang trọng với nhiều trò chơi sòng bạc trực tiếp.");
            $(".playBtn").attr("onclick", "launchGame('SA', 'SA0001')");
            break;
        case "EG":
            $("#bg_logo").attr('class', 'evo');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/fe5b0bf024ab5cc22775661ef54b6590.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/fe5b0bf024ab5cc22775661ef54b6590.png");
            $("#desc").html("Trò chơi casino trực tuyến phổ biến với video chất lượng cao!");
            $(".playBtn").attr("onclick", "launchGame('EG5', 'EG5001')");
            break;
        case "TP":
            $("#bg_logo").attr('class', 'tp');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/9604d205e3460f486531a9e6a912a4d8.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/9604d205e3460f486531a9e6a912a4d8.png");
            $("#desc").html("Cung cấp các tính năng, chức năng và phân khúc vượt trội.");
            //$(".playBtn").attr("", "");
            break;
        case "BG":
            $("#bg_logo").attr('class', 'bg');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/622430fc0f5864b89bbc90b720ff53ee.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/6a98604edd1efa1c5af7912b008c5985.png");
            $("#desc").html("Mang trải nghiệm sòng bạc trực tuyến lớn nhất đến nhà bạn với BIG Gaming!");
            //$(".playBtn").attr("", "");
            break;
        case "SA":
            $("#bg_logo").attr('class', 'sa');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/273e26f2f97b1f5c07cd7bba413ce5aa.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/273e26f2f97b1f5c07cd7bba413ce5aa.png");
            $("#desc").html("Trải nghiệm chơi game sang trọng với nhiều trò chơi sòng bạc trực tiếp.");
            //$(".playBtn").attr("", "");
            break;
        case "MG":
            $("#bg_logo").attr('class', 'mg');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/f1913bcdb6661b23da61486c3904652e.png");
            $("#item_2").attr("src", "/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/43effadcb94e09a0828997c2c15268a1.png");
            $("#desc").html("Trò chơi sòng bạc trực tiếp trong thời gian thực mượt mà với giao diện tinh vi.");
            //$(".playBtn").attr("", "");
            break;
        case "XG":
            $("#bg_logo").attr('class', 'xg');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/cf720ece4b2c2b7b7e384917a647f3ad.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/ca470dc66b7ceb03e49add95d3a4d773.png");
            $("#desc").html("Dễ dàng đặt cược! Tương tác với các sexy dealer mọi lúc, mọi nơi.");
            //$(".playBtn").attr("", "");
            break;
        case "AB":
            $("#bg_logo").attr('class', 'ab');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/9f7f0a8bb0332ce617d8c5903db7538d.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/82470c59a07e4117221c2b166d05f2cc.png");
            $("#desc").html("Chọn những gì bạn muốn chơi! Các trò chơi cá cược sáng tạo và đích thực nhất đều có ở đây!");
            //$(".playBtn").attr("", "");
            break;
        case "PT":
            $("#bg_logo").attr('class', 'pt');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/0311d2e820d3aa67b002522b83c23e5c.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/10cfbe333e46456156e880936c3eb6d8.png");
            $("#desc").html("Trải nghiệm cao cấp mang đến giao diện của một VIP thực thụ!");
            $(".playBtn").attr("onclick", "launchGame('PT', 'PTU002')");
            break;
        case "DG":
            $("#bg_logo").attr('class', 'dg');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/6d27acc818852f40fb765793cedd02c0.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/b1173775b4db524b921d0a38f7ec09e0.png");
            $("#desc").html("Mang đến cho người chơi trải nghiệm tuyệt vời");
            $(".playBtn").attr("onclick", "launchGame('DG', 'DG0013')");
            break;
        case "WM":
            $("#bg_logo").attr('class', 'wm');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/6817d6690c6b8dbc3982457fbd699915.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/f5a33b41186fcf9614eb9401b56149f8.png");
            $("#desc").html("Cung cấp các tính năng, chức năng và phân khúc vượt trội.");
            $(".playBtn").attr("onclick", "launchGame('WM', 'WM0001')");
            break;
        case "AG":
            $("#bg_logo").attr('class', 'ag');
            $("#item_1").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/c7d564044d0f43d600f119bbf506cf37.png");
            $("#item_2").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/51b5ed5e5da408abe239fab9862450e6.png");
            $("#desc").html("Trò chơi sòng bạc sáng tạo với người chia bài trực tiếp Châu Á!");
            $(".playBtn").attr("onclick", "launchGame('AG', 'A00070')");
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