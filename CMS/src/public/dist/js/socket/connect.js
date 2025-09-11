let isSocketLogin = false;
let authData = null;
let ws = null;
let socketSend = (data) => {
    try {
        setTimeout(() => {
            if (isSocketLogin) {
                ws.send(JSON.stringify(data));
            }
        }, 1500);
    } catch (e) {
        console.log(e);
    }
};

$(document).ready(() => {
    // SOCKET CHECK BROWSER
    if ("WebSocket" in window) { } else {
        alert("Trình duyệt của bạn không được hỗ trợ Websocket vui lòng đổi trình duyệt khác để sử dụng!");
    }

    // Let us open a web socket
    ws = new WebSocket(`${mainSocket}/socket/cms`);

    ws.onopen = function () {
        console.log("Socket Connected!");

        // init send message function
        socketSend = (data) => {
            try {
                ws.send(JSON.stringify(data));
            } catch (e) {
                console.log(e);
            }
        }

        if (isLogin) {
            const dataAuthen = { token: bearerToken };
            socketSend({ authentication: dataAuthen });
        }
    }

    // SOCKET NHẬN TỪ SV VỀ
    ws.onmessage = (_data) => {
        var data = JSON.parse(_data.data);
        // error login 
        if (void 0 !== data.unauth) {
            console.log(`Socket Login Failed!`);
        }
        // login success
        if (void 0 !== data.Authorized) {
            isSocketLogin = true;
            authData = data;
        }
        if (void 0 !== data.user) {
            //updateCoin(data.user.coin);
        }
        if (void 0 !== data.action) {
            // dashboard
            if (void 0 !== data.action.dashboard) {
                // online
                if (void 0 !== data.action.dashboard.online) {
                    const online = data.action.dashboard.online;
                    if (void 0 !== online.users) {
                        $("#users-online").html(numberWithCommas(online.users.online));
                    }
                    if (void 0 !== online.agents) {
                        $("#agency-online").html(numberWithCommas(online.agents.online));
                    }
                }
            }
        }
        // notif
        if (void 0 !== data.notify) {
            if (data.notify.type == "recharge") {
                modalHid();
                $(".titlePop").html(data.notify.title);
                $(".ctpop").html(`
                <div class="al_ndugpop">
                    <h6 class="logo_alpop"></h6>
                    ${data.notify.message}
                </div>
                `);
                modalShow();
            }
        }
    };

    ws.onerror = (err) => {
        console.error('Socket encountered error: ', err.message, 'Closing socket');
        ws.close();
    };
});