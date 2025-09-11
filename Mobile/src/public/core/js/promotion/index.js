$(document).ready(function () {
    getListPromotion();
});

function getListPromotion() {
    $.ajax({
        "url": `${mainApi}/api/promotion`,
        "method": "GET",
        "timeout": 0,
        "headers": { "Content-Type": "application/json" }
    }).done(function (response) {
        if (response.status) {
            response.data.forEach(promotion => {
                $("app-promotion").append(`
                    <div _ngcontent-serverapp-c135="" class="pb-4">
                        <div _ngcontent-serverapp-c135="">
                            <section _ngcontent-serverapp-c135="" class="px-4">
                                <div _ngcontent-serverapp-c135="" class="mb-1">
                                    <img _ngcontent-serverapp-c135="" class="img-responsive"
                                        src="${promotion.thumbnail}" alt="${promotion.title}" onclick="getPromotionInfo('${promotion.id}');"">
                                </div>
                            </section>
                        </div>
                    </div>
                `);
            });
        } else {
            alert(response.msg);
        }
    });
}

function getPromotionInfo(id) {
    $.ajax({
        url: `${mainApi}/api/promotion/promotion-info/${id}`,
        headers: {},
        type: "GET",
        dataType: "json",
        success: (result) => {
            if (result.status) {
                initModalPromotion(true, result.data.content, result.data.thumbnail);
            } else {
                alert(result.msg);
            }
        },
    });
}

function initModalPromotion(status, content = "", thumbnail = "") {
    if (status) {
        $(".promotion-content").html(content);
        $('.promotion-thumbnail').attr("src", thumbnail);

        $(".cdk-overlay-container").show();
        $(".cdk-overlay-container").css("top", "-222px");
        $(".cdk-overlay-container").animate({ top: '0px' }, 100, () => { });
    } else {
        $(".cdk-overlay-container").animate({ top: '-222px' }, 200, function () {
            $(".cdk-overlay-container").fadeOut();
        });
    }
}