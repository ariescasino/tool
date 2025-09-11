//++++ tự động nạp tiền vào game theo product
function submitToGameAllCashInOutByProduct(product) {
    return getListGameAvalible().done((response) => {
        if (response.status) {
            const ListSubname = response.data;
            for (const item in ListSubname) {
                if (ListSubname.hasOwnProperty(item) && item === product) {
                    dataType = ListSubname[item].type;
                    break;
                }
            }
            return submitToGameAllCashInOut(dataType, product, 1);
        } else {
            alert(response.msg);
        }  
    });
}

//++++ tự động nạp tiền vào game
function submitToGameAllCashInOut(currentProvide, gameID, transferType, code, isStartGame) {
    let currentAmount = 0;

    // Function to handle submitting cash in after getting user data
    const handleCashIn = function () {
        // Kiểm tra xem số tiền hiện tại có hợp lệ không
        if (currentAmount < 1000) {
            initAuthNotifyModal(true, `Gợi ý ! Số tiền phải lớn hơn 1000 VND.`);
            return;
        }

        try {
            // Gọi API để chuyen quy / rut quy
            $.ajax({
                url: `${mainApi}/api/game/wallet-transfer`,
                method: "POST",
                timeout: 0,
                headers: {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    amount: Number(currentAmount),
                    type: currentProvide,
                    transferType: transferType
                }),
            }).done(function (response) {
                if (response.status) {
                } else {
                    alert(response.msg);
                }
            });
        } catch (e) {
            console.log(e);
            alert(`Gợi ý Có lỗi xảy ra vui lòng thử lại.`);
        }
    };

    const handleCashOut = function () {
        // Kiểm tra xem số tiền hiện tại có hợp lệ không
        if (currentAmount < 1) {
            initAuthNotifyModal(true, `Gợi ý ! Số tiền phải lớn hơn 1K.`);
            return;
        }

        try {
            // Gọi API để chuyen quy / rut quy
            $.ajax({
                url: `${mainApi}/api/game/wallet-transfer`,
                method: "POST",
                timeout: 0,
                headers: {
                    "Authorization": `Bearer ${bearerToken}`,
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    amount: Number(currentAmount),
                    type: currentProvide,
                    transferType: transferType
                }),
            }).done(function (response) {
                if (response.status) {
                    reloadBalanceBackground()
                    getWalletV2(gameID)
                } else {
                    initAuthNotifyModal(true, `Ops! ${response.msg}`);
                }
            });
        } catch (e) {
            console.log(e);
            initAuthNotifyModal(true, `Gợi ý ! Có lỗi xảy ra vui lòng thử lại.`);
        }
    };

    if (transferType == 1) {
        // Gọi API để lấy dữ liệu người dùng
        return $.ajax({
            url: `${mainApi}/api/auth/me`,
            headers: {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            type: "get",
            dataType: "json",
            success: function (result) {
                if (result.status) {
                    const meData = result.user;
                    currentAmount = meData.coin;
                    // Gọi hàm xử lý chuyển tiền sau khi nhận dữ liệu người dùng
                    return handleCashIn();
                } else {
                    initAuthNotifyModal(true, "Gợi ý ! Phiên đăng nhập hết hiệu lực!");
                }
            },
        });
    }

    if (transferType == 2) {
        $.ajax({
            "url": `${mainApi}/api/game/wallets/${gameID.toUpperCase()}`,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
        }).done((response) => {
            if (response.status) {
                currentAmount = response.balance
                handleCashOut()
            } else {
                console.error('Failed to retrieve balance');
            }
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.error('AJAX call failed: ', textStatus, errorThrown);
        });
    }
}


//++++ Rút tất cả số dư về ví chính
function autoCashOut(currentProvide, currentAmount) {
    if (currentProvide == null) {
        console.log(`autoCashOut ${currentProvide} ${currentAmount} - Vui lòng chọn nhà cung cấp trò chơi.`);
        return;
    }
    if (currentAmount < 1) {
        console.log(`autoCashOut ${currentProvide} ${currentAmount} Số điểm rút phải lớn hơn 0.`);
        return;
    }
    return $.ajax({
            "url": `${mainApi}/api/game/wallet-transfer`,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            "data": JSON.stringify({
                amount: Number(currentAmount),
                type: currentProvide,
                transferType: 2
            }),
        }).done(function (response) {
            console.log(`autoCashOut ${currentProvide} ${currentAmount}`);
            console.log(response);
        });
}


const getListGameAvalible = () => {
    return $.ajax({
        "url": `${mainApi}/api/game/gameAvalible`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            return response;
        } else {
            alert(response.msg);
        }
    });
}

const withdrawAllWalletBalance = () => {
    $.ajax({
        "url": `${mainApi}/api/game/gameAvalible`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            const ListSubname = response.data;
            for (const item in ListSubname) {
                // check balance
                setTimeout(() => {
                    console.log(item);
                    getWalletBalanceByGame(item.toUpperCase(), ListSubname[item].name.toUpperCase()).done((response) => {
                        if (response && response.balance * 1 > 0) {
                            autoCashOut(ListSubname[item].type, response.balance)
                        }
                    });
                }, 100);
            }
            setTimeout(() => {
                initAuthNotifyModal(true, "Thông báo Rút tất cả số dư về ví chính thành công!");
                reloadBalanceBackground()
            }, 2000);
        } else {
            alert(response.msg);
        }
    });
}

function reloadBalanceBackground(enableNotify = true) {
    try {
        $.ajax({
            url: `${mainApi}/api/auth/me`,
            headers: {
                "Authorization": `Bearer ${bearerToken}`,
                "Content-Type": "application/json",
            },
            type: "get",
            dataType: "json",
            success: function (result) {
                if (result.status) {
                    const meData = result.user;
                    $(".balance").html(`${numberWithCommas(meData.coin)}`);
                } else {
                    if (enableNotify) {
                        initAuthNotifyModal(true, "Gợi ý ! Phiên đăng nhập hết hiệu lực!");
                    }
                }
            },
        });
    } catch (e) {
        console.log(e);
        if (enableNotify) {
            initAuthNotifyModal(true, "Gợi ý ! Có lỗi xảy ra, vui lòng thử lại!");
        }
    }
}

const getWalletBalanceByGame = (gameID, gameName) => {
    console.log(`getWalletBalanceByGame ${gameID} ${gameName}`);
    return $.ajax({
        "url": `${mainApi}/api/game/wallets/${gameID.toUpperCase()}`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": `Bearer ${bearerToken}`,
            "Content-Type": "application/json",
        },
    }).done((response) => {
        if (response.status) {
            return response;
        } else {
            return -1;
        }
    });
}

setInterval(() => {
    reloadBalanceBackground(false)
}, 3000);