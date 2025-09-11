'use strict';

let DEBUG_APP = !true;

let IS_OFFSOUND = false;
let IS_ALLOW_BET = false;
let TASK_TIMER = {
    CONNECT_SOCKET: null,
    BET_TIME: null
};
let IS_RECONNECT = false;
let IS_AUTH = false;
let AUTH_DATA = null;

let WIN_TYPE = {
    PLAYER: "player",
    PLAYER_DOUBLE: "player_double",
    BANKER: "banker",
    BANKER_DOUBLE: "banker_double",
    DRAW: "draw",
    SUPER: "super",
};

let RESULT_TEXT_ENUM = {
    "player": "PLAYER",
    "player_double": "PLAYER ĐÔI",
    "banker": "BANKER",
    "banker_double": "BANKER Đôi",
    "draw": "HÒA",
    "super": "SUPER 6"
};

function onSetCurrentSessionId(sessionId) {
    $("#txt-round-id").html("#" + sessionId);
}

function onSetCurrentSessionStatus(status) {
    $("#txt-status").html(status);
}

function onSetCurrentData(data) {
    if (void 0 !== data.session) {
        onSetCurrentSessionId(data.session);
    }
    if (void 0 !== data.config_result) {
        setConfigResultCurrentValue(data.config_result);
    }
    if (void 0 !== data.users) {
        $("#txt-total-user-online").html(data.users.length);
    }
    if (void 0 !== data.bet_list) {
        $("#txt-total-user-bet").html(data.bet_list.length);
        setDataCurrentBet(data.bet_list);
    }
}

function setDataCurrentBet(betList) {
    let betDoorList = {
        PLAYER: [],
        PLAYER_DOUBLE: [],
        BANKER: [],
        BANKER_DOUBLE: [],
        DRAW: [],
        SUPER: [],
    }
    betList.forEach(betData => {
        if (betData.bet.player > 0) betDoorList.PLAYER.push({ username: betData.username, amount: betData.bet.player, time: betData.bet_time });
        if (betData.bet.player_double > 0) betDoorList.PLAYER_DOUBLE.push({ username: betData.username, amount: betData.bet.player_double, time: betData.bet_time });
        if (betData.bet.banker > 0) betDoorList.BANKER.push({ username: betData.username, amount: betData.bet.banker, time: betData.bet_time });
        if (betData.bet.banker_double > 0) betDoorList.BANKER_DOUBLE.push({ username: betData.username, amount: betData.bet.banker_double, time: betData.bet_time });
        if (betData.bet.draw > 0) betDoorList.DRAW.push({ username: betData.username, amount: betData.bet.draw, time: betData.bet_time });
        if (betData.bet.super > 0) betDoorList.SUPER.push({ username: betData.username, amount: betData.bet.super, time: betData.bet_time });
    });

    createUiViewBetDooor("node-betdoor-" + WIN_TYPE.PLAYER, betDoorList.PLAYER);
    createUiViewBetDooor("node-betdoor-" + WIN_TYPE.PLAYER_DOUBLE, betDoorList.PLAYER_DOUBLE);
    createUiViewBetDooor("node-betdoor-" + WIN_TYPE.BANKER, betDoorList.BANKER);
    createUiViewBetDooor("node-betdoor-" + WIN_TYPE.BANKER_DOUBLE, betDoorList.BANKER_DOUBLE);
    createUiViewBetDooor("node-betdoor-" + WIN_TYPE.DRAW, betDoorList.DRAW);
    createUiViewBetDooor("node-betdoor-" + WIN_TYPE.DRAW, betDoorList.DRAW);

    function createUiViewBetDooor(node, arrBet) {
        $("#" + node).html(``);
        if (arrBet.length > 0) {
            let body = "";
            let totalBet = 0;
            arrBet.forEach(data => {
                totalBet += data.amount;
                body += `
                    <li class="list-group-item d-flex align-items-center">
                        <i class="fa-solid fa-user fa-fw"></i> <span class="mr-5">${data.username}</span>
                        <span class="badge bg-light-danger text-danger font-weight-medium rounded-pill ms-auto">${numberWithCommas(data.amount)}</span>
                    </li>
                `;
            });
            let bodyAppend = `
                <li class="list-group-item d-flex align-items-center">
                    <i class="fa-solid fa-coins fa-fw"></i> <span class="mr-5" style="font-weight: 600;">TỔNG CƯỢC</span>
                    <span class="badge bg-light-info text-info font-weight-medium rounded-pill ms-auto">${numberWithCommas(totalBet)}</span>
                </li>
            ` + body;
            $("#" + node).html(bodyAppend);
        }
    }
}

function resetBgResultNodeWin() {
    for (var key in WIN_TYPE) {
        if (WIN_TYPE.hasOwnProperty(key)) {
            $("#node-result-" + WIN_TYPE[key]).css("background-color", "#fff");
        }
    }
}

function setDataResult(resultType) {
    let txtResult = "";
    switch (resultType) {
        case WIN_TYPE.PLAYER:
            txtResult = "CON"
            break;
        case WIN_TYPE.PLAYER_DOUBLE:
            txtResult = "CON ĐÔI"
            break;
        case WIN_TYPE.BANKER:
            txtResult = "CÁI"
            break;
        case WIN_TYPE.BANKER_DOUBLE:
            txtResult = "CÁI ĐÔI"
            break;
        case WIN_TYPE.DRAW:
            txtResult = "HÒA"
            break;
        case WIN_TYPE.SUPER:
            txtResult = "SUPER"
            break;
        default:
            break;
    }
    $("#txt-result").html(txtResult);
    $("#node-result-" + resultType).css("background-color", "#ffe214a3");
}

function startActionBet() {
    $("#txt-result").html("....");
    document.getElementById("txt-time-remain").innerHTML = "20";
    var timeleft = 19;
    TASK_TIMER.BET_TIME = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(TASK_TIMER.BET_TIME);
            document.getElementById("txt-time-remain").innerHTML = "0";
        } else {
            document.getElementById("txt-time-remain").innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}

function setDotLineResult(data, limitDot = 30) {
    data.splice(limitDot - 1);
    // console.log(data);
    const dataResult = data.reverse();
    let body = "";
    dataResult.forEach((dotNode, index, array) => {
        let dotColor = "";
        let dotText = "";
        let dotSession = dotNode.session;
        let dotPoint = 0;
        let dotPair = "none";
        let classLastDot = (index === array.length - 1) ? "fa-beat-fade" : "";

        if (dotNode.result == "player") {
            dotText = "Con";
            dotColor = "#fbc72a";
            dotPoint = dotNode.player_point;
        } else if (dotNode.result == "player_double") {
            dotText = "Con Đôi";
            dotColor = "#fbc72a";
            dotPair = "underline";
            dotPoint = dotNode.player_point;
        } else if (dotNode.result == "banker") {
            dotText = "Cái";
            dotColor = "#f75a3f";
            dotPoint = dotNode.banker_point;
        } else if (dotNode.result == "banker_double") {
            dotText = "Cái Đôi";
            dotColor = "#f75a3f";
            dotPair = "underline";
            dotPoint = dotNode.banker_point;
        } else if (dotNode.result == "draw") {
            dotText = "Hòa";
            dotColor = "#54beffcc";
            dotPoint = (Math.random() < 0.5) ? dotNode.banker_point : dotNode.player_point;
        } else if (dotNode.result == "super") {
            dotText = "Super";
            dotColor = "#a53ee3cc";
            dotPoint = (Math.random() < 0.5) ? dotNode.banker_point : dotNode.player_point;
        }

        body += `<i style="color: ${dotColor};text-decoration: ${dotPair}" class="fa-solid fa-circle fa-xl ${classLastDot} fa-fw" data-bs-toggle="tooltip" title="#${dotSession} | ${dotText}"></i>`;
    });
    $("#dotline-last-result").html(body);
    // init tooltip
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
}

function onPostSetResultValue(value) {
    ws.red({
        game: {
            baccarat: {
                event: EVENT_NAME.CLIENT.SET_RESULT_SESSION,
                data: {
                    result: value
                }
            }
        }
    });
    setConfigResultCurrentValue(value);
}

function setConfigResultCurrentValue(value) {
    for (var key in WIN_TYPE) {
        if (WIN_TYPE.hasOwnProperty(key)) {
            $("input[name=config-result-" + WIN_TYPE[key] + "]").prop("checked", false);
        }
    }
    $("input[name=config-result-" + value + "]").prop("checked", true);
}

function onGetDetailBetSession(session, page = 1, kmess = 15) {
    ws.red({
        game: {
            baccarat: {
                event: EVENT_NAME.CLIENT.GET_HISTORY_BET_SESSION,
                data: {
                    session,
                    page,
                    kmess
                }
            }
        }
    });
}

function onHandleHistoryBetSession(data) {
    console.log(data);
    $("#history-bet-session-container").fadeIn();
    window.location = "#history-bet-session-container";
    
    $("#table-history-bet-session").html(``);
    $("#txt-view-bet-session-id").html(data.session);
    if (data.data.length > 0) {
        let body = "";
        data.data.forEach(data => {
            body += `<tr>
            <th class="" style="font-size: 14px;">
                #${data.userInfo.username}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.player)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.player_double)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.banker)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.banker_double)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.draw)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.super)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_bet)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${RESULT_TEXT_ENUM[data.result]}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_win)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_lose)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_refurn)}
            </th>
            <th class="text-center" style="font-size: 14px;">
                ${moment(data.bet_time).format("DD/MM/YYYY HH:mm:ss")}
            </th>
        </tr>`;
        });
        $("#table-history-bet-session").html(body);

        let phantrangBody = '';
        const phantrang = Pagination(data.page, data.total, data.kmess);
        phantrang.forEach((page) => {
            $("#history-bet-session-pagination").html(phantrangBody);
            let active = (data.page == page) ? "active" : "";
            const urlToPage = (page !== "...") ? `javascript:void(onGetDetailBetSession(${data.session},${page}, ${data.kmess}))` : `javascript:void(0)`;
            phantrangBody += `
            <li class="page-item ${active}">
                <a href="${urlToPage}" class="page-link"><b>${page}</b></a>
            </li>
            `;
            $("#history-bet-session-pagination").html(phantrangBody);
        });
    }
}

function onGetHistorySession(page = 1, kmess = 15) {
    const session = ($("#txt-session-view").val() >> 0 == 0) ? null : $("#txt-session-view").val() >> 0;
    ws.red({
        game: {
            baccarat: {
                event: EVENT_NAME.CLIENT.GET_HISTORY_SESSION,
                data: {
                    session,
                    page,
                    kmess
                }
            }
        }
    });
}

function onHandleHistorySession(data) {
    $("#table-history-session").html(``);
    if (data.data.length > 0) {
        let body = "";
        data.data.forEach(data => {
            body += `<tr>
            <td class="text-center" style="font-size: 14px;">
                #${(data.session) ? data.session : ""}
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${RESULT_TEXT_ENUM[data.result]}
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.player_point)} điểm - [c1: ${numberWithCommas(data.player_card.card1.point)}, c2: ${numberWithCommas(data.player_card.card2.point)}, c3: ${numberWithCommas(data.player_card.card3.point)}]
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.banker_point)} điểm - [c1: ${numberWithCommas(data.banker_card.card1.point)}, c2: ${numberWithCommas(data.banker_card.card2.point)}, c3: ${numberWithCommas(data.banker_card.card3.point)}]
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_bet)}
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_win)}
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${numberWithCommas(data.total_lose)}
            </td>
            <td class="text-center" style="font-size: 14px;">
                ${moment(data.createdAt).format("DD/MM/YYYY HH:mm:ss")}
            </td>
            <td class="text-center" style="font-size: 14px;">
                <button type="button" class="btn btn-sm btn-outline-primary" onclick="onGetDetailBetSession(${data.session})">Chi tiết cược</button>
            </td>
        </tr>`;
        });
        $("#table-history-session").html(body);

        let phantrangBody = '';
        const phantrang = Pagination(data.page, data.total, data.kmess);
        phantrang.forEach((page) => {
            $("#history-session-pagination").html(phantrangBody);
            let active = (data.page == page) ? "active" : "";
            const urlToPage = (page !== "...") ? `javascript:void(onGetHistorySession(${page}, ${data.kmess}))` : `javascript:void(0)`;
            phantrangBody += `
            <li class="page-item ${active}">
                <a href="${urlToPage}" class="page-link"><b>${page}</b></a>
            </li>
            `;
            $("#history-session-pagination").html(phantrangBody);
        });
    }
}

function fastNotifyClient(type, text) {
    if (type == "success") {
        toastr.success(
            text,
            "Thành công.",
        );
    } else if (type == "warning") {
        toastr.warning(
            text,
            "Cảnh báo."
        );
    } else if (type == "error") {
        toastr.error(
            text,
            "Thất bại!"
        );
    } else if (type == "info") {
        toastr.info(
            text,
            "Nhắc nhở"
        );
    }
}