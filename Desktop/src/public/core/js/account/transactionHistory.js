"use strict";
let PAGE_DEFAULT = 1;
let KMESS_DEFAULT = 10;
let DATE_START_DEFAULT = moment().startOf("year").format("DD/MM/YYYY");
let DATE_END_DEFAULT = moment().format("DD/MM/YYYY");
let FILTER_DEFAULT = {};


let IS_FULL = false;
let STATUS_ENUM = {
    "success": "<span style='color: #0033fb;'>Thành công</span>",
    "pending": "<span style='color: #fe4d01;'>Đang xử lý</span>",
    "error": "<span style='color: #f00;'>Lỗi</span>",
    "timeout": "<span style='color: #f00;'>Hết hạn</span>"
};

$(document).ready(() => {
    $("#showHideFullIcon").on("click", function () { initSideBar($(this)) });
    loadListTransactions(PAGE_DEFAULT, KMESS_DEFAULT);
    $(".filter-type").on('change', (e) => filterInputChanger());
});


function initSideBar(element) {
    if (IS_FULL) {
        IS_FULL = false;
        element.removeClass("fa-chevron-left");
        element.addClass("fa-chevron-right");
        $("#sidebar-right").hide();
    } else {
        IS_FULL = true;
        element.removeClass("fa-chevron-right");
        element.addClass("fa-chevron-left");
        $("#sidebar-right").show();
    }
}


function loadListTransactions(page, limit) {
    const filterObj = cleanObjectEmpty(FILTER_DEFAULT);
    const filterQueryString = (buildQuery(filterObj).length > 0) ? "&" + buildQuery(filterObj) : "";

    $.ajax({
        "url": `${mainApi}/api/payment/history?page=${page}&limit=${limit}&from=${DATE_START_DEFAULT}&to=${DATE_END_DEFAULT}${filterQueryString}`,
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
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
        }
    });
}

function handleData(dataTransaction) {
    $("#transaction-content").html(``);

    if (dataTransaction.dataExport.length > 0) {
        $("#no-record-found").hide();
        let body = "";

        dataTransaction.dataExport.forEach(data => {
            body += `<tr>
                <th class="text-center">
                    ${(data.type == "recharge") ? "Nạp tiền" : (data.type == "cashout") ? "Rút tiền" : ""}
                </th>
                <th class="text-center">
                    ${numberWithCommas(data.amount)}
                </th>
                <th class="text-center">
                    ${STATUS_ENUM[data.status]}
                </th>
                <th class="text-center">
                ${moment(data.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                </th>
            </tr>`;

        });
        $("#transaction-content").html(body);

        let phantrangBody = '';
        const phantrang = Pagination(dataTransaction.page, dataTransaction.total, dataTransaction.kmess);
        phantrang.forEach((page) => {
            $("#phantrangElement").html(phantrangBody);
            let active = (dataTransaction.page == page) ? "active" : "";
            const urlToPage = (page !== "...") ? `javascript:void(loadListTransactions(${page}, ${dataTransaction.kmess}))` : `javascript:void(0)`;
            phantrangBody += `
                <li class="page-item ${active}">
                    <a href="${urlToPage}" class="page-link"><b>${page}</b></a>
                </li>
            `;
            $("#phantrangElement").html(phantrangBody);
        });

    } else {
        $("#no-record-found").show();
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
    FILTER_DEFAULT["type"] = $(".filter-type").val();
    loadListTransactions(PAGE_DEFAULT, KMESS_DEFAULT);
}
