require("dotenv").config();
const jsftp = require("jsftp");
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const { dynamicSort } = require("../helpers");
const processRecord = require("./rcProcess/SPORTS");

module.exports = (path) => {
    const Ftp = new jsftp({
        host: process.env.FTP_HOST,
        port: process.env.FTP_PORT,
        user: process.env.FTP_USER,
        pass: process.env.FTP_PASS,
    });

    Ftp.ls(path, async (err, list) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`> Connected FTP => ${path}`);
        }

        const res = dynamicSort(list, "name", "desc");

        var i = 0;
        for (const lastRecord of res) {
            await new Promise((resolve, reject) => {
                let jsonStringRecord = "";
                Ftp.get(`${path}/${lastRecord.name}`, (err, socket) => {
                    if (err) {
                        console.log(err);
                        resolve();
                    } else {
                        console.log(`>>> Excute Data File: ${path}/${lastRecord.name}`);
                    }   
                    socket.on("data", (data) => { jsonStringRecord += data.toString(); });
                    socket.on("close", async (err) => {
                        if (err) { console.error(` >>> An error retrieving: ${path}/${lastRecord.name}`); }
                        const dataRecord = JSON.parse(jsonStringRecord.toString());
                        await processRecord(dataRecord, path).then((ok) => {
                            resolve(ok);
                        });
                    });
                    socket.resume();
                });
            });

            i++;
            if (i == Number(process.env.LIMIT_RECORD)) break;
        }

        Ftp.raw("quit", (err, data) => {
            if (err) {
                return console.error(err);
            }
        });
    });
}