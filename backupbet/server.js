const OS = require('os');
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;
require("dotenv").config();
const DatabaseModels = require("./src/models");

// FTP Hand
require("./src/routerHandle")();

// connect MYSQL SERVER
DatabaseModels.then(() => {
    console.log(`>>> Connect Mysql Server: ${process.env.MYSQL_HOST} => Success!`);
}).catch((err) => {
    console.log(">>> Connect MySql Database Error: ", err);
});

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Application crashed...");
  })