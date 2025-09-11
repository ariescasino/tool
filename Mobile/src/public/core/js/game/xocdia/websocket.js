'use strict';

let SOCKET_URL = (DEBUG_APP) ? "ws://192.168.2.2:8009/socket/game/xocdia" : "wss://api.bidv88.net/socket/game/xocdia";

let ws = null;

// bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJpYXQiOjE3MDA1Njc2ODgsImV4cCI6MTcwMDY1NDA4OH0.wN9rCp0R9_hQ-XLoEgh1ZAqCwnXDlvqvxU7rMhGxGiE";

let EVENT_NAME = {
    CLIENT: {
        AUTHENTICATION: "authentication",
        UPDATE_BALANCE: "update_balance",
        GET_CURRENT_SESSION: "get_current_session",
        GET_CURRENT_BET: "get_current_bet",
        CONFIRM_BET: "confirm_bet",
        GET_HISTORY_BET: "get_history_bet",
        GET_LAST_RESULT_BET: "get_last_result_bet"
    },
    SERVER: {
        AUTHENTICATION: "authentication",
        NOTIFY: "notify",
        UPDATE_BALANCE: "update_balance",
        CURRENT_SESSION: "current_session",
        NEW_GAME: "new_game",
        WAIT_RESULT: "wait_result",
        RESULT: "result",
        CURRENT_BET: "current_bet",
        RESULT_BET: "result_bet",
        HISTORY_BET: "history_bet",
        LAST_RESULT_BET: "last_result_bet"
    }
};

(function () {
    // SOCKET CHECK BROWSER
    if ("WebSocket" in window) { } else {
        alert("Trình duyệt của bạn không được hỗ trợ Websocket vui lòng đổi trình duyệt khác để sử dụng!");
        return;
    }

    function connect(url, isReconnect) {
        ws = new WebSocket(url);
        ws.red = function (data) { ws.send(JSON.stringify(data)); };

        ws.onopen = function () {
            if (isReconnect) {
                IS_RECONNECT = false;
                clearInterval(TASK_TIMER.CONNECT_SOCKET);
                fastNotifyClient("success", "Đã khôi phục kết nối!");
            }

            // get round id
            ws.red({
                game: {
                    baccarat: {
                        event: EVENT_NAME.CLIENT.GET_CURRENT_SESSION
                    }
                }
            });

            if (bearerToken) {
                const data = {
                    auth_type: "access_token",
                    access_token: bearerToken,
                    ip: null
                }
                ws.red({
                    event: EVENT_NAME.CLIENT.AUTHENTICATION,
                    data
                });
            }

        }

        // SOCKET MESSAGE
        ws.onmessage = function (_data) {
            var data = JSON.parse(_data.data);

            // error login 
            if (void 0 !== data.unauth) {
                localStorage.removeItem("access_token"); // remove access token
                cuteToast({
                    type: "error", // or 'info', 'error', 'warning'
                    message: data.unauth.text,
                    timer: 3000
                });
            }


            if (void 0 !== data.game) {
                if (void 0 !== data.game.xocdia) Xocdia(data.game.xocdia);
            }
        };

        // SOCKET CLOSE BY SERVER
        ws.onclose = (e) => {
            console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
            IS_RECONNECT = true;
            fastNotifyClient("error", "Mất kết nối, đang kết nối lại!");
            TASK_TIMER.CONNECT_SOCKET = setInterval(() => {
                // reconnect to server
                connect(SOCKET_URL, IS_RECONNECT);
            }, 3000);
        };
    }

    // connect to server
    connect(SOCKET_URL, IS_RECONNECT);


    function Xocdia(data) {
        if (void 0 !== data.event) {
            if (data.event == EVENT_NAME.SERVER.AUTHENTICATION) {
                if (void 0 !== data.data) {
                    const authData = data.data;
                    if (authData.status) {
                        const userData = authData.user;
                        IS_AUTH = true;
                        AUTH_DATA = userData;
                        onSetCurrentBalance(userData.coin);
                        console.log("authen: ", authData);
                    } else {
                        alert("Có lỗi xảy ra! Vui lòng thử lại!");
                    }
                }
            }
            if (data.event == EVENT_NAME.SERVER.NOTIFY) {
                if (void 0 !== data.data) {
                    fastNotifyClient(data.data.type, data.data.text);
                    console.log("notify: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.HISTORY_BET) {
                if (void 0 !== data.data) {
                    initContentHistoryBet(data.data);
                    console.log("history: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.LAST_RESULT_BET) {
                if (void 0 !== data.data) {
                    handleContentNodeDotLine(true, data.data);
                    // handleContentNodeDotLine(2, data.data);
                    // console.log("last result: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.CURRENT_SESSION) {
                if (void 0 !== data.data) {
                    const sessionId = data.data.session;
                    onSetCurrentSessionId(sessionId);
                    console.log("get_session: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.RESULT_BET) {
                if (void 0 !== data.data) {
                    const resultBet = data.data;
                    if (resultBet.status == "win") {
                        fastNotifyClient("success", "Bạn thắng: +" + numberWithCommas(resultBet.amount));
                    } else if (resultBet.status == "lose") {
                        fastNotifyClient("error", "Bạn thua: -" + numberWithCommas(resultBet.amount));
                    }
                    console.log("result_bet: ", resultBet);
                }
            }
            if (data.event == EVENT_NAME.SERVER.UPDATE_BALANCE) {
                if (void 0 !== data.data) {
                    CURRENT_BALANCE = data.data.coin;
                    onSetCurrentBalance(CURRENT_BALANCE);
                    console.log("update_balance: ", data.data.coin);
                }
            }
            if (data.event == EVENT_NAME.SERVER.CURRENT_BET) {
                if (void 0 !== data.data) {
                    console.log("current_bet: ", data.data);
                    const currentBetAmount = data.data;
                    if (currentBetAmount.white4 > 0) onSaveBetToNode(BET_NODE.PLAYER, currentBetAmount.white4);
                    if (currentBetAmount.white3 > 0) onSaveBetToNode(BET_NODE.PLAYER_DOUBLE, currentBetAmount.white3);
                    if (currentBetAmount.red4 > 0) onSaveBetToNode(BET_NODE.BANKER, currentBetAmount.red4);
                    if (currentBetAmount.red3 > 0) onSaveBetToNode(BET_NODE.BANKER_DOUBLE, currentBetAmount.red3);
                    if (currentBetAmount.even > 0) onSaveBetToNode(BET_NODE.DRAW, currentBetAmount.even);
                    if (currentBetAmount.odd > 0) onSaveBetToNode(BET_NODE.SUPER, currentBetAmount.odd);
                }
            }
            if (data.event == EVENT_NAME.SERVER.NEW_GAME) {
                IS_ALLOW_BET = true;
                setNodeBetResult(false);
                initNodeResultCard(false);
                disableClickBetNode(false);
                resetCurrentAmount(true);
                if (void 0 !== data.data) {
                    const sessionId = data.data.session;
                    onSetCurrentSessionId(sessionId);
                }
                fastNotify("Bắt đầu đặt cược");
                startActionBet("node-text-time-remain");
                // setTimeout(() => { clickShowDotBoard(true); }, 2000);
            }
            if (data.event == EVENT_NAME.SERVER.WAIT_RESULT) {
                IS_ALLOW_BET = false;
                disableClickBetNode(true);
                initNodeResultCard(true);
                resetCurrentAmount();
                ws.red({ game: { xocdia: { event: EVENT_NAME.CLIENT.GET_CURRENT_BET } } });
                fastNotify("Chờ mở thưởng");
                // setTimeout(() => { clickShowDotBoard(false); }, 1000);
            }
            if (data.event == EVENT_NAME.SERVER.RESULT) {
                IS_ALLOW_BET = false;
                const result = data.data;

                const dices = [
                    result["dices"]["dice1"], 
                    result["dices"]["dice2"], 
                    result["dices"]["dice3"], 
                    result["dices"]["dice4"]
                ];

                setNodeBetResult(true, result.winType);
                setCardResult(true, dices);
                fastNotify("Kết quả");
            }
        }
    }

})();