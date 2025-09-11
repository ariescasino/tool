
$(document).ready(() => {
    $("._1WeZEgZzeWtrmxWFpNPhXq").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $("._1WeZEgZzeWtrmxWFpNPhXq li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabGame($(this).attr("data-produce"));
    });
});

function changeTabGame(type) {
    switch (type) {
        case "tp":
            $("#lotterty-thumb").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/fb248257f81d97715d9b8e7acff4488b.jpg");
            $("#lotterty-title").html("RgLottery");
            //$("button .playBtn").attr("", "");
            break;
        case "TCG_VNLOTT":
            $("#lotterty-thumb").attr("src", "/cdn/system-requirement/Web.PortalNew/UA531-01/c8e37fbb36/images/4fe19b089b23437c62bdbcb4ad92a5d9.jpg");
            $("#lotterty-title").html("VR Xổ Số");
            $("#productElement").attr("onclick", "launchGame('TCG_VNLOTT', 'TCG_VNLOTT_01')");
            break;
    }
}