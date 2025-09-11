"use strict";

let PAGE_DEFAULT = 1;
let KMESS_DEFAULT = 10;
let DATE_START_DEFAULT = moment().startOf("year").format("DD/MM/YYYY");
let DATE_END_DEFAULT = moment().format("DD/MM/YYYY");
let FILTER_DEFAULT = {};

let RECORD_TEXT_ENUM = {
    LOADING: "Đang tải nội dung...",
    LOADED: "Toàn bộ đã được tải",
    NO_RECORD_FOUND: "Không có dữ liệu nào"
}

$(document).ready(() => {
    loadListTransactions(PAGE_DEFAULT, KMESS_DEFAULT);
    $(".filter-category").on('change', (e) => filterInputChanger());

    // tab click
    $(".date-fillter").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".date-fillter li.text-red-600").removeClass("text-red-600");
        // adding classname 'active' to current click li 
        $(this).addClass("text-red-600");
        filterTimeChanger($(this).attr("data-date"));
    });
});


function recordCounter(text) {
    $("#record-counter").html(text);
}

function loadListTransactions(page, limit) {
    recordCounter(RECORD_TEXT_ENUM.LOADING);

    const filterObj = cleanObjectEmpty(FILTER_DEFAULT);
    const filterQueryString = (buildQuery(filterObj).length > 0) ? "&" + buildQuery(filterObj) : "";

    $.ajax({
        "url": `${mainApi}/api/game/history?page=${page}&limit=${limit}&from=${DATE_START_DEFAULT}&to=${DATE_END_DEFAULT}${filterQueryString}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            const ListBankDeposit = response.data;
            handleData(ListBankDeposit);
        } else {
            initAuthNotifyModal(true, `${response.msg}`);
        }
    });
}

function handleData(dataTransaction) {
    $("#transaction-content").html(``);
    $("#phantrangElement").html(``);

    if (dataTransaction.dataExport.length > 0) {
        let body = "";

        dataTransaction.dataExport.forEach(data => {
            body += `<table _ngcontent-serverapp-c131="" class="table ng-star-inserted">
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">Phiên cược:</th>
                            <td _ngcontent-serverapp-c131="">${data.betOrderNo}</td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">Loại trò
                                chơi
                            </th>
                            <td _ngcontent-serverapp-c131="">
                                <span _ngcontent-serverapp-c131="" class="ng-star-inserted">
                                    ${(data.gameCategory) ? data.gameCategory.toUpperCase(): ""}
                                </span>
                            </td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">Tên trò
                                chơi
                            </th>
                            <td _ngcontent-serverapp-c131="">
                                ${(data.gameName) ? data.gameName: ""}
                            </td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">
                                Thời gian cược
                            </th>
                            <td _ngcontent-serverapp-c131="">
                                <div _ngcontent-serverapp-c131="" class="time">
                                    <span _ngcontent-serverapp-c131="">
                                        ${moment(data.betTime).format("DD/MM/YYYY HH:mm:ss")}
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">
                                Trả thưởng
                            </th>
                            <td _ngcontent-serverapp-c131="">
                                <div _ngcontent-serverapp-c131="" class="time">
                                    <span _ngcontent-serverapp-c131="" class="ng-star-inserted">
                                        <span _ngcontent-serverapp-c131="">
                                            ${moment(data.transactionTime).format("DD/MM/YYYY HH:mm:ss")}
                                        </span>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">
                                Số tiền cược
                            </th>
                            <td _ngcontent-serverapp-c131="">${numberWithCommas(data.betAmount)}</td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">
                                Cược hợp lệ
                            </th>
                            <td _ngcontent-serverapp-c131="">
                                <span _ngcontent-serverapp-c131="" class="ng-star-inserted">
                                    ${numberWithCommas(data.validBetAmount)}
                                </span>
                            </td>
                        </tr>
                        <tr _ngcontent-serverapp-c131="">
                            <th _ngcontent-serverapp-c131="">
                                Thanh toán
                            </th>
                            <td _ngcontent-serverapp-c131="">
                                <span _ngcontent-serverapp-c131="" class="ng-star-inserted">
                                    ${numberWithCommas(data.netPnl)}
                                </span>
                            </td>
                        </tr>
                    </table>`;
        });

        $("#transaction-content").html(body);

        let phantrangBody = '';
        const phantrang = Pagination(dataTransaction.page, dataTransaction.total, dataTransaction.kmess);
        phantrang.forEach((page) => {
            $("#phantrangElement").html(phantrangBody);
            let active = (dataTransaction.page == page) ? "text-red-600" : "";
            const urlToPage = (page !== "...") ? `javascript:void(loadListTransactions(${page}, ${dataTransaction.kmess}))` : `javascript:void(0)`;
            phantrangBody += `
                <li onclick="${urlToPage}" _ngcontent-serverapp-c138="" class="${active} flex items-center justify-center border border-[#ccc] bg-white py-1 px-3 text-xs text-black ng-star-inserted">
                    ${page}
                </li>
            `;
            $("#phantrangElement").html(phantrangBody);
        });

        recordCounter(RECORD_TEXT_ENUM.LOADED);
    } else {
        recordCounter(RECORD_TEXT_ENUM.NO_RECORD_FOUND);
    }
}

function filterTimeChanger(day) {
    switch (day) {
        case "today":
            DATE_START_DEFAULT = moment().startOf("day").format("DD/MM/YYYY");
            DATE_START_DEFAULT = moment().endOf("day").format("DD/MM/YYYY");
            break;
        case "yesterday":
            DATE_START_DEFAULT = moment().subtract(1, "days").startOf("day").format("DD/MM/YYYY");
            DATE_START_DEFAULT = moment().subtract(1, "days").endOf("day").format("DD/MM/YYYY");
            break;
        case "7dayago":
            DATE_START_DEFAULT = moment().subtract(7, "days").startOf("day").format("DD/MM/YYYY");
            DATE_START_DEFAULT = moment().subtract(7, "days").endOf("day").format("DD/MM/YYYY");
            break;
        case "30dayago":
            DATE_START_DEFAULT = moment().subtract(30, "days").startOf("day").format("DD/MM/YYYY");
            DATE_START_DEFAULT = moment().subtract(30, "days").endOf("day").format("DD/MM/YYYY");
            break;
        default:
            break;
    }
    loadListTransactions(PAGE_DEFAULT, KMESS_DEFAULT);
}

function filterInputChanger() {
    FILTER_DEFAULT["gameCategory"] = $(".filter-category").val();
    loadListTransactions(PAGE_DEFAULT, KMESS_DEFAULT);
}
