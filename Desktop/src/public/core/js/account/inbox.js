"use strict";

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
    }else {
        getMessage();
    }
}

const getAnnouncement = () => {
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

            for (const item of listAnnoucement) {
                listAnnoucementElement.append(`
                    <tr class="ng-scope not-read" id="msg-element-${item.id}">
                        <td class="ng-scope">
                            <i class="fas fa-star yellow ng-scope _13w26HgpJDSil32L7irVB-"></i>
                        </td>
                        <td class="_1rvFgHktHv2owoshNSioRv">
                            <button class="btn btn-link ng-binding" onclick="viewDetail('${item.id}', true)">${item.title}</button>
                        </td>
                        <td>
                            <span class="ng-binding">${moment(item.createdAt).format("DD/MM/YYYY")} (T${moment(item.createdAt).day()}) ${moment(item.createdAt).format("HH:mm:ss")} </span>
                        </td>
                    </tr>
                `);
            }
        } else {
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
        }
    });
}


const getMessage = () => {
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
            for (const item of listAnnoucement) {
                listAnnoucementElement.append(`
                <tr class="ng-scope not-read" id="msg-element-${item.id}">
                    <td class="ng-scope">
                        <i class="fas fa-star yellow ng-scope _13w26HgpJDSil32L7irVB-"></i>
                    </td>
                    <td class="_1rvFgHktHv2owoshNSioRv">
                        <button class="btn btn-link ng-binding" onclick="viewDetail('${item.id}', false)">${item.title}</button>
                    </td>
                    <td>
                        <span class="ng-binding">${moment(item.createdAt).format("DD/MM/YYYY")} (T${moment(item.createdAt).day()}) ${moment(item.createdAt).format("HH:mm:ss")} </span>
                    </td>
                </tr>
            `);
            }
        } else {
            initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
        }
    });
}


const viewDetail = (id, type) => {
    if (type) { // anounment
        $('#modal-title').html(``);
        $('#modal-author').html(``);
        $('#modal-time').html(``);
        $('#modal-content').html(``);

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
                $('#modal-title').html(response.data.title);
                $('#modal-author').html(`Hệ thống`);
                $('#modal-time').html(moment(response.data.createdAt).format("HH:mm:ss DD/MM/YYYY"));
                $('#modal-content').html(response.data.content);
                initModalViewDetail(true);
            } else {
                initAuthNotifyModal(true, `Gợi ý`, `${response.msg}`);
            }
        });
    } else { // message inbox
        $('#modal-title').html(``);
        $('#modal-author').html(``);
        $('#modal-time').html(``);
        $('#modal-content').html(``);

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
                $('#modal-title').html(response.data.title);
                $('#modal-author').html(`Admin`);
                $('#modal-time').html(moment(response.data.createdAt).format("HH:mm:ss DD/MM/YYYY"));
                $('#modal-content').html(response.data.content);
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