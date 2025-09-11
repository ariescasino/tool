"use strict";

let RECORD_TEXT_ENUM = {
    LOADING: "Đang tải nội dung...",
    LOADED: "Toàn bộ đã được tải",
    NO_RECORD_FOUND: "Không có dữ liệu nào"
}

$(document).ready(() => {
    // default show
    getAnnouncement();
    // tab click
    $(".nav-tabs").on('click', 'li', function () {
        // remove classname 'active' from all li who already has classname 'active'
        $(".nav-tabs li.active").removeClass("active");
        // adding classname 'active' to current click li 
        $(this).addClass("active");
        changeTabMailBox($(this).attr("data-type"));
    });
});

function changeTabMailBox(type) {
    if (type == "true") {
        getAnnouncement();
    } else {
        getMessage();
    }
}

function recordCounter(text) {
    $("#record-counter").html(text);
}

const getAnnouncement = () => {
    recordCounter(RECORD_TEXT_ENUM.LOADING);

    const listAnnoucementElement = $("#inbox-content-table");
    listAnnoucementElement.html(``);

    $.ajax({
        "url": `${mainApi}/api/annoucement`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            listAnnoucementElement.fadeIn();
            const listAnnoucement = response.data;
            if (listAnnoucement.length > 0) {
                for (const item of listAnnoucement) {
                    listAnnoucementElement.append(`
                        <tr _ngcontent-serverapp-c137="" class="unRead ng-star-inserted">
                            <td _ngcontent-serverapp-c137="" class="ng-star-inserted">
                                <i _ngcontent-serverapp-c137="" class="fas fa-star text-[#ffca00] ng-star-inserted"></i>
                            </td>
                            <td _ngcontent-serverapp-c137="" class="w-9/12">
                                <div _ngcontent-serverapp-c137="" class="text-customized-bg-tertiary overtext" onclick="viewDetail('${item.id}', true)">${item.title}</div>
                                <div _ngcontent-serverapp-c137="" class="overtext text-[#777]">${stripTags(item.content)}</div>
                            </td>
                            <td _ngcontent-serverapp-c137="" class="w-3/12 text-right align-top">
                                <span _ngcontent-serverapp-c137="">${moment(item.createdAt).format("DD/MM/YYYY")}</span>
                            </td>
                        </tr>
                    `);
                }
                recordCounter(RECORD_TEXT_ENUM.LOADED);
            } else {
                recordCounter(RECORD_TEXT_ENUM.NO_RECORD_FOUND);
            }
        } else {
            initAuthNotifyModal(true, `${response.msg}`);
        }
    });
}


const getMessage = () => {
    recordCounter(RECORD_TEXT_ENUM.LOADING);

    const listAnnoucementElement = $("#inbox-content-table");
    listAnnoucementElement.html(``);

    $.ajax({
        "url": `${mainApi}/api/message`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            listAnnoucementElement.fadeIn();
            const listAnnoucement = response.data;
            if (listAnnoucement.length > 0) {

                for (const item of listAnnoucement) {
                    listAnnoucementElement.append(`
                        <tr _ngcontent-serverapp-c137="" class="unRead ng-star-inserted">
                            <td _ngcontent-serverapp-c137="" class="ng-star-inserted">
                                <i _ngcontent-serverapp-c137="" class="fas fa-star text-[#ffca00] ng-star-inserted"></i>
                            </td>
                            <td _ngcontent-serverapp-c137="" class="w-9/12">
                                <div _ngcontent-serverapp-c137="" class="text-customized-bg-tertiary overtext" onclick="viewDetail('${item.id}', false)">${item.title}</div>
                                <div _ngcontent-serverapp-c137="" class="overtext text-[#777]">${stripTags(item.content)}</div>
                            </td>
                            <td _ngcontent-serverapp-c137="" class="w-3/12 text-right align-top">
                                <span _ngcontent-serverapp-c137="">${moment(item.createdAt).format("DD/MM/YYYY")}</span>
                            </td>
                        </tr>
                    `);
                }
                recordCounter(RECORD_TEXT_ENUM.LOADED);
            } else {
                recordCounter(RECORD_TEXT_ENUM.NO_RECORD_FOUND);
            }
        } else {
            initAuthNotifyModal(true, `${response.msg}`);
        }
    });
}


const viewDetail = (id, type) => {
    if (type) { // anounment
        $('#modal-inbox-title').html(``);
        $('#modal-inbox-author').html(``);
        $('#modal-inbox-time').html(``);
        $('#modal-inbox-content').html(``);

        $.ajax({
            "url": `${mainApi}/api/annoucement/annoucement-info/` + id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                $('#modal-inbox-title').html(response.data.title);
                $('#modal-inbox-author').html(`Hệ thống`);
                $('#modal-inbox-time').html(moment(response.data.createdAt).format("HH:mm:ss DD/MM/YYYY"));
                $('#modal-inbox-content').html(response.data.content);
                initModalViewDetail(true);
            } else {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            }
        });
    } else { // message inbox
        $('#modal-inbox-title').html(``);
        $('#modal-inbox-author').html(``);
        $('#modal-inbox-time').html(``);
        $('#modal-inbox-content').html(``);

        $.ajax({
            "url": `${mainApi}/api/message/message-info/` + id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                $('#modal-inbox-title').html(response.data.title);
                $('#modal-inbox-author').html(`Admin`);
                $('#modal-inbox-time').html(moment(response.data.createdAt).format("HH:mm:ss DD/MM/YYYY"));
                $('#modal-inbox-content').html(response.data.content);
                initModalViewDetail(true);
            } else {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            }
        });

    }
}

const initModalViewDetail = (status) => {
    if (status) {
        $("#modal-view-detail").show();
    } else {
        $("#modal-view-detail").hide();
    }
}