const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const Sequelize = require("sequelize");
const redis = require("../../databases/redis");
const { UserModel } = require("../../models/User/User");
const { BetHistoryModel } = require("../../models/Bet/BetHistory");

module.exports = (data, path) => {
    return new Promise(async (resolve, reject) => {
        let objBetRecord = [];
        let taskPromise = [];
        const betRecordList = data.list;

        for (const item of betRecordList) {
            let betRecord = item;
            taskPromise.push(
                UserModel.findOne({
                    where: {
                        username: betRecord.username
                    },
                    attributes: ["id"]
                }).then((result) => {
                    if (!!result) {
                        betRecord.uid = result.id;
                        betRecord.currency = "VN";
                        return betRecord;
                    } else {
                        return null;
                    }
                }).catch((err) => {
                    return null;
                })
            );
        }

        await Promise.allSettled(taskPromise).then(async (result) => {
            for (const betRecord of result) {
                if (betRecord.status == "fulfilled" && betRecord.value !== null) {
                    const betDetail = betRecord.value;

                    let currenStatus = null;
                    switch (betDetail.details) {
                        case "未开奖": // PENDING
                            currenStatus = BetHistoryModel.STATUS_ENUM.PENDING;
                            break;
                        case "已中奖": // WIN
                            currenStatus = BetHistoryModel.STATUS_ENUM.WIN;
                            break;
                        case "未中奖": // LOSE
                            currenStatus = BetHistoryModel.STATUS_ENUM.LOSE;
                            break;
                        case "追中撤单": // HitCancel
                            currenStatus = BetHistoryModel.STATUS_ENUM.HIT_CANCEL;
                            break;
                        case "个人撤单": // Player Cancel
                            currenStatus = BetHistoryModel.STATUS_ENUM.PLAYER_CANCEL;
                            break;
                        case "空开撤单": // Draw cancelled 
                            currenStatus = BetHistoryModel.STATUS_ENUM.DRAW_CANCEL;
                            break;
                        case "系统撤单": // System Drawback 
                            currenStatus = BetHistoryModel.STATUS_ENUM.SYSTEM_DRAWBACK;
                            break;
                        case "和局 (六合彩用)": // Tie = 和局 (六合彩用)
                            currenStatus = BetHistoryModel.STATUS_ENUM.TIE;
                            break;
                        case "后台撤单": //  BO Drawback =后台撤单
                            currenStatus = BetHistoryModel.STATUS_ENUM.BO_DRAWBACK;
                            break;
                        default:
                            currenStatus = BetHistoryModel.STATUS_ENUM.SUCCESS;
                            break;
                    }

                    let newObjBet = {
                        uid: betDetail.uid,
                        currency: betDetail.currency,
                        username: betDetail.username,
                        betAmount: betDetail.betAmount,
                        validBetAmount: betDetail.betAmount,
                        winAmount: betDetail.winAmount,
                        netPnl: betDetail.netPNL,
                        transactionTime: betDetail.transTime,
                        gameCode: betDetail.gameCode,
                        gameName: `Xổ Số Việt Nam`,
                        betOrderNo: betDetail.orderNum,
                        betTime: betDetail.betTime,
                        productType: 420,
                        gameCategory: `ELOTTO`,
                        sessionId: `xoso${betDetail.orderNum}`,
                        status: currenStatus
                    }

                    const keyCache = `bet_save_elotto_${betDetail.betOrderNo}`;
                    const checkRedis = await redis.get(keyCache);
                    if (!checkRedis) {
                        objBetRecord.push(newObjBet);
                        redis.set(keyCache, { status: true, data: newObjBet });
                    } else { }
                }
            }

            if (objBetRecord.length > 0) BetHistoryModel.bulkCreate(objBetRecord).then(() => console.log(">>>>>> Saved " + objBetRecord.length + " records"));
        }).catch((err) => {
            console.log(err);
        });
        resolve(true);
    });
}