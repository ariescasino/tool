const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const Sequelize = require("sequelize");
const redis = require("../../databases/redis");
const { UserModel } = require("../../models/User/User");
const { BetHistoryModel } = require("../../models/Bet/BetHistory");

module.exports = (data) => {
    return new Promise(async (resolve, reject) => {
        let objBetRecord = [];
        let taskPromise = [];
        if (data.hasOwnProperty("status") && data.hasOwnProperty("details")) {
            const betRecordList = data.details;

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
                        const keyCache = `bet_save_${betDetail.betOrderNo}`;
                        const checkRedis = await redis.get(keyCache);
                        if (!checkRedis) {
                            objBetRecord.push(betDetail);
                            redis.set(keyCache, { status: true, data: betDetail });
                        } else { }
                    }
                }

                if (objBetRecord.length > 0) BetHistoryModel.bulkCreate(objBetRecord).then(() => console.log(">>>>>> Saved " + objBetRecord.length + " records"));
            }).catch((err) => {
                console.log(err);
            });
            resolve(true);
        } else {
            reject(false);
        }
    });
}