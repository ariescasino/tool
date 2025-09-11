const moment = require("moment-timezone");
moment.tz.setDefault("China/Beijing");

const LIVE_Controllers = require("./controllers/LIVE");
const RNG_Controllers = require("./controllers/RNG");
const PVP_Controllers = require("./controllers/PVP");
const SPORTS_Controllers = require("./controllers/SPORTS");
const ELOTTO_Controllers = require("./controllers/ELOTTO");

const {
    getRandomInt
} = require("./helpers");

let timeExcute = 10; // // loop every 15 secound

let lastExcute = 0;

module.exports = () => {

    const excuteProcess = () => {
        const momentChina = moment().clone();
        momentChina.utcOffset('+08:00', true);
        const dateString = momentChina.format("YYYYMMDD");
        //const dateString = moment("14/04/2023", "DD/MM/YYYY").format("YYYYMMDD");

        const randExcute = getRandomInt(1, 5);
        for (var i = 0; i <= 10; i++) {
            if (randExcute == lastExcute) continue;
            lastExcute = randExcute;
            switch (randExcute) {
                case 5:
                    // LIVE GAME 
                    LIVE_Controllers(`./LIVE/SETTLED/${dateString}`);
                    break;
                case 1:
                    // RNG GAME 
                    RNG_Controllers(`./RNG/SETTLED/${dateString}`);
                    break;
                case 2:
                    // PVP GAME 
                    PVP_Controllers(`./PVP/SETTLED/${dateString}`);
                    break;
                case 3:
                    // SPORTS GAME 
                    SPORTS_Controllers(`./SPORTS/SETTLED/${dateString}`);
                    break;
                case 4:
                    // ELOTTO GAME 
                    ELOTTO_Controllers(`./TCG_LOTTO_VN/ELOTTO/SETTLED/${dateString}`);
                    break;
            };
            break;
        }
    }

    var runTask = () => {
        var timeleft = timeExcute;
        const countdown = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(countdown);
                excuteProcess();
                runTask();
            } else {
                //console.log(timeleft + " seconds remaining to run.");
            }
            timeleft -= 1;
        }, 1000);
    }

    runTask(); // start run task
}