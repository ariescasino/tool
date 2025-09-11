'use strict';

let SOCKET_URL = (DEBUG_APP) ? "ws://localhost:8009/socket/game/baccarat" : "wss://api.kb686.net/socket/game/baccarat";

let ws = null;

// bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAxODk3NDgzLCJleHAiOjE3MDE5ODM4ODN9.0mksThybBo3bGq-e7H14dnTxgn-d4sR3HhGvfXWxpYk";

let EVENT_NAME = {
    CLIENT: {
        AUTHENTICATION: "authentication",
        UPDATE_BALANCE: "update_balance",
        GET_CURRENT_SESSION: "get_current_session",
        GET_CURRENT_BET: "get_current_bet",
        CONFIRM_BET: "confirm_bet",
        GET_HISTORY_BET: "get_history_bet",
        GET_LAST_RESULT_BET: "get_last_result_bet",
        SET_RESULT_SESSION: "set_result_session",
        GET_HISTORY_SESSION: "get_history_session",
        GET_HISTORY_BET_SESSION: "get_history_bet_session"
    },
    SERVER: {
        AUTHENTICATION: "authentication",
        NOTIFY: "notify",
        UPDATE_BALANCE: "update_balance",
        CURRENT_SESSION: "current_session",
        CURRENT_DATA: "current_data",
        NEW_GAME: "new_game",
        WAIT_RESULT: "wait_result",
        RESULT: "result",
        CURRENT_BET: "current_bet",
        RESULT_BET: "result_bet",
        HISTORY_BET: "history_bet",
        LAST_RESULT_BET: "last_result_bet",
        HISTORY_SESSION: "history_session",
        HISTORY_BET_SESSION: "history_bet_session"
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
                if (void 0 !== data.game.baccarat) Baccarat(data.game.baccarat);
            }
        };

        // SOCKET CLOSE BY SERVER
        ws.onclose = (e) => {
            console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
            IS_RECONNECT = true;
            fastNotifyClient("error", "Mất kết nối, đang kết nối lại!");
            TASK_TIMER.CONNECT_SOCKET = setInterval(() => {
                // reconnect to server
                // connect(SOCKET_URL, IS_RECONNECT);
            }, 10000);
        };
    }

    // connect to server
    connect(SOCKET_URL, IS_RECONNECT);


    function Baccarat(data) {
        if (void 0 !== data.event) {
            if (data.event == EVENT_NAME.SERVER.AUTHENTICATION) {
                if (void 0 !== data.data) {
                    const authData = data.data;
                    if (authData.status) {
                        const userData = authData.user;
                        IS_AUTH = true;
                        AUTH_DATA = userData;
                        console.log("authen: ", authData);
                    } else {
                        alert("Phiên đang nhập đã hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại!");
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
                    //  initContentHistoryBet(data.data);
                    console.log("history: ", data.data);
                }
            }

            if (data.event == EVENT_NAME.SERVER.CURRENT_DATA) {
                if (void 0 !== data.data) {
                    onSetCurrentData(data.data);
                    // console.log("current data: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.LAST_RESULT_BET) {
                if (void 0 !== data.data) {
                    setDotLineResult(data.data);
                    console.log("last result: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.HISTORY_SESSION) {
                if (void 0 !== data.data) {
                    onHandleHistorySession(data.data);
                    console.log("history session: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.HISTORY_BET_SESSION) {
                if (void 0 !== data.data) {
                    onHandleHistoryBetSession(data.data);
                    console.log("history bet session: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.CURRENT_SESSION) {
                if (void 0 !== data.data) {
                    const sessionId = data.data.session;
                    onSetCurrentSessionId(sessionId);
                    console.log("get_session: ", data.data);
                }
            }
            if (data.event == EVENT_NAME.SERVER.NEW_GAME) {
                IS_ALLOW_BET = true;
                if (void 0 !== data.data) {
                    const sessionId = data.data.session;
                    onSetCurrentSessionId(sessionId);
                }
                onSetCurrentSessionStatus("Đang Cược");
                resetBgResultNodeWin();
                startActionBet();
            }
            if (data.event == EVENT_NAME.SERVER.WAIT_RESULT) {
                IS_ALLOW_BET = false;
                onSetCurrentSessionStatus("Chờ Kết Quả");
            }
            if (data.event == EVENT_NAME.SERVER.RESULT) {
                IS_ALLOW_BET = false;
                const result = data.data;
                const card = result.card;
                const point = result.point;
                if (point.player > point.banker) { // player win
                    if (card.player.card1.card == card.player.card2.card) {
                        setDataResult(WIN_TYPE.PLAYER_DOUBLE);
                        setDataResult(WIN_TYPE.PLAYER);
                    } else if (card.player.card1.card != card.player.card2.card) {
                        setDataResult(WIN_TYPE.PLAYER);
                    }
                } else if (point.player < point.banker) { // banker win
                    if (card.banker.card1.card == card.banker.card2.card) {
                        setDataResult(WIN_TYPE.BANKER_DOUBLE);
                        setDataResult(WIN_TYPE.BANKER);
                    } else if (card.banker.card1.card != card.banker.card2.card) {
                        setDataResult(WIN_TYPE.BANKER);
                    }
                } else if (point.player == point.banker) { // hòa
                    setDataResult(WIN_TYPE.DRAW);
                }

                // setCardResult(true, result);
                onSetCurrentSessionStatus("Trả thưởng");
            }
        }
    }

})();