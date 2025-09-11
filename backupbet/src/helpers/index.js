var _ = require("lodash");
var fs = require('fs');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dynamicSort(arrObject, orderKey, orderBy) {
    return _.orderBy(arrObject, [orderKey], [orderBy]); // Use Lodash to sort array by 'name'
}

function getDataPath() {
    return process.env.PWD + "/src/data";
}

function createDataFolder(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
}


module.exports = {
    getRandomInt,
    dynamicSort,
    getDataPath,
    createDataFolder
}