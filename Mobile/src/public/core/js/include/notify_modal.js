function initAuthNotifyModal(status, message = "") {
    if (status) {
        $("#modal-content").html(message);
        $("#modal-notify").show();
        $("#modal-notify").css("top", "-222px");
        $("#modal-notify").animate({ top: '0px' }, 100, () => {
            $(".cdk-overlay-backdrop").show();
        });
    } else {
        $(".cdk-overlay-backdrop").hide();
        $("#modal-notify").animate({ top: '-500px' }, 200, function () {
            $("#modal-notify").fadeOut();
        });
    }
}
