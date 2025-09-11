const launchgame = (gameID, code, maintenance = false) => {
    if (!isLogin) return Swal.fire({
        icon: 'error',
        title: 'Thất bại!',
        text: 'Vui lòng đăng nhập trước khi khởi chạy trò chơi!',
        showCancelButton: false,
        confirmButtonText: 'Đóng'
    });

    if (maintenance) return Swal.fire({
        icon: 'warning',
        title: 'Thông báo bảo trì!',
        text: 'Trò chơi này đang trong quá trình bảo trì!',
        showCancelButton: false,
        confirmButtonText: 'Đóng'
    });

    //then you can iterate over them and close them all like this:
    for (var i = 0; i < windows.length; i++) {
        windows[i].close();
    }

    $(".loadding").fadeIn();

    var userAgent = window.navigator.userAgent.toLowerCase(),
        ios = /iphone|ipod|ipad/.test(userAgent);
    if (ios) {
        var winRef = window.open();
    } else {
        var anchor = document.createElement('a');
    }

    $.ajax({
        url: `${mainApi}/api/game/launchgame/${gameID.toUpperCase()}?code=${code}&platform=mobile`,
        headers: {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
        type: "get",
        dataType: "json",
        success: function (result) {
            $(".loadding").fadeOut();
            if (result.status) {
                if (ios) {
                    winRef.location = result.data.playUrl;
                } else {
                    anchor.href = result.data.playUrl;
                    anchor.target = "_blank";
                    anchor.click();
                }
            } else {
                Swal.fire({
                    title: result.msg,
                    icon: 'warning',
                })
            }
        },
    });
}   