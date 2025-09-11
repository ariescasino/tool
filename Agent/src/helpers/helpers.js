require("dotenv").config();
const bcrypt = require("bcryptjs");
const fs = require("fs");
const md5 = require("md5");
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Ho_Chi_Minh");

let signHash = (input) => {
  var key = process.env.CLIENT_KEY || "3DsGqAndp32mErJjzflz6Uvz0ni1HYuP";
  return md5(input + key);
};

let nonAccentVietnamese = (str) => {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
};

let getConfig = function (config) {
  let text = fs.readFileSync(
    process.cwd() + "/src/config/" + config + ".json",
    "utf8"
  );
  try {
    text = JSON.parse(text);
    return text;
  } catch (e) {
    return null;
  }
};

let setConfig = function (config, data) {
  fs.writeFile(
    process.cwd() + "/src/config/" + config + ".json",
    JSON.stringify(data),
    function (err) {}
  );
  data = null;
};

let getDataContent = function (file) {
  try {
    let text = fs.readFileSync(
      process.cwd() + "/src/data/dataFiles/" + file + ".txt",
      "utf8"
    );
    return text;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};

let setDataContent = function (file, content) {
  try {
    fs.writeFileSync(
      process.cwd() + "/src/data/dataFiles/" + file + ".txt",
      content,
      function (err) {}
    );
    data = null;
  } catch (e) {
    console.log(e.message);
    return null;
  }
};

let getData = function (data) {
  let text = fs.readFileSync(
    process.cwd() + "/src/data/" + data + ".json",
    "utf8"
  );
  try {
    text = JSON.parse(text);
    return text;
  } catch (e) {
    return null;
  }
};

let setData = function (config, data) {
  fs.writeFile(
    process.cwd() + "/src/data/" + config + ".json",
    JSON.stringify(data),
    function (err) {}
  );
  data = null;
};

let getBetRequest = function (file, game) {
  try {
    let text = fs.readFileSync(
      process.cwd() + "/src/data/betRequest/" + game + "/" + file + ".log",
      "utf8"
    );
    return text ? true : false;
  } catch (e) {
    return false;
  }
};

let setBetRequest = function (file, game, content) {
  try {
    fs.writeFileSync(
      process.cwd() + "/src/data/betRequest/" + game + "/" + file + ".log",
      String(content),
      function (err) {}
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

let removeBetRequest = function (file, game) {
  try {
    fs.unlinkSync(
      process.cwd() + "/src/data/betRequest/" + game + "/" + file + ".log",
      function (err) {}
    );
    return true;
  } catch (e) {
    return false;
  }
};

// mã hóa pass
let generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

// so sánh pass
let validPassword = function (password, Hash) {
  return bcrypt.compareSync(password, Hash);
};

let cutEmail = function (email) {
  let data = email.split("@");
  let string = "";
  let start = "";
  if (data[0].length > 7) {
    start = data[0].slice(0, 6);
  } else {
    start = data[0].slice(0, data[0].length - 3);
  }
  return string.concat(start, "***@", data[1]);
};

let cutPhone = function (phone) {
  console.log(phone);
  let string = "";
  let start = phone.slice(0, 6);
  let end = phone.slice(phone.length - 2, phone.length);
  return string.concat(start, "****", end);
};

let validateEmail = function (t) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    t
  );
};

let checkPhoneValid = function (phone) {
  return /^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))[0-9]{7,10}$/im.test(phone);
};
let phoneCrack2 = function (phone) {
  let data = phone.match(/^[\+]?(?:[(][0-9]{1,3}[)]|)/im);
  if (data) {
    return phone.slice(data[0].length, phone.length);
  }
  return data;
};
let phoneCrack = function (phone) {
  let data = phone.match(/^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))/im);
  if (data) {
    return {
      region: data[0],
      phone: phone.slice(data[0].length, phone.length),
    };
  }
  return data;
};
let checkPhoneZero = function (phone) {
  return /^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|86|82|83|85|88|81|80|87|89|0))[0-9]{7,30}$/im.test(
    phone
  );
};
let nFormatter = function (t, e) {
  for (
    var i = [
        {
          value: 1e18,
          symbol: "E",
        },
        {
          value: 1e15,
          symbol: "P",
        },
        {
          value: 1e12,
          symbol: "T",
        },
        {
          value: 1e9,
          symbol: "G",
        },
        {
          value: 1e6,
          symbol: "M",
        },
        {
          value: 1e3,
          symbol: "k",
        },
      ],
      o = /\.0+$|(\.[0-9]*[1-9])0+$/,
      n = 0;
    n < i.length;
    n++
  )
    if (t >= i[n].value)
      return (t / i[n].value).toFixed(e).replace(o, "$1") + i[n].symbol;
  return t.toFixed(e).replace(o, "$1");
};

let anPhanTram = function (bet, so_nhan, ti_le, type = false) {
  // so_nhan: số nhân
  // ti_le: tỉ lệ thuế
  // type: Thuế tổng, thuế gốc
  let vV = bet * so_nhan;
  let vT = !!type ? vV : bet;
  return vV - Math.ceil((vT * ti_le) / 100);
};

// kiểm tra chuỗi chống
let isEmpty = function (str) {
  return !str || 0 === str.length;
};

// đổi số thành tiền
let numberWithCommas = function (number) {
  if (number) {
    let result = (number = parseInt(number)).toString().split(".");
    return (
      (result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")),
      result.join(".")
    );
  }
  return "0";
};

// Lấy số từ chuỗi
let getOnlyNumberInString = function (t) {
  let e = t.match(/\d+/g);
  return e ? e.join("") : "";
};

// thêm số 0 trước dãy số (lấp đầy bằng số 0)
let numberPad = function (number, length) {
  // number: số
  // length: độ dài dãy số
  let str = "" + number;
  while (str.length < length) str = "0" + str;

  return str;
};

let shuffle = function (array) {
  try {
    let m = array.length,
      t,
      i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  } catch (e) {
    console.log(e);
  }
};

let _formatMoneyVND = (num, digits) => {
  const si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
};

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let makeid = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

let blockInPeriodTime = (startHour, startMinute, endHour) => {
  try {
    if (Number(endHour) > 0) {
    }
    const hourCurrent = Number(moment().format("H"));
    const minuteCurrent = Number(moment().format("m"));

    if (hourCurrent >= Number(startHour)) {
      if (
        hourCurrent == Number(startHour) &&
        minuteCurrent < Number(startMinute)
      ) {
        return true; // cho
      } else {
        return false; // khoong cho
      }
    } else {
      return true; // cho
    }
  } catch (err) {
    console.log(err.message);
    return false;
  }
};

let RandomUserName = function (length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

let randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let logRequest = (userID, data) => {
  try {
    const dirPath = process.cwd() + "/src/data/logRequest";
    const fileLogs = dirPath + "/" + userID + ".log";
    // create folder if not exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    // create file name & write data
    fs.appendFileSync(
      fileLogs,
      data + " | " + moment().format("DD/MM h:mm:ss a") + "\n"
    );
  } catch (e) {
    console.log(e.message);
  }
};

let clearHtmlTag = (string) => {
  return string.replace(/<[^>]*>?/gm, "");
};

let truncateString = (str, length) => {
  // str = character length
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + "...";
};

module.exports = {
  signHash,
  nonAccentVietnamese,
  generateHash,
  validPassword,
  phoneCrack2,
  checkPhoneZero,
  anPhanTram,
  isEmpty,
  numberWithCommas,
  getOnlyNumberInString,
  numberPad,
  shuffle,
  validateEmail,
  checkPhoneValid,
  phoneCrack,
  nFormatter,
  RandomUserName,
  cutEmail,
  cutPhone,
  getConfig,
  setConfig,
  getData,
  setData,
  getDataContent,
  setDataContent,
  _formatMoneyVND,
  getRandomInt,
  blockInPeriodTime,
  makeid,
  randomInteger,
  logRequest,
  getBetRequest,
  setBetRequest,
  removeBetRequest,
  moment,
  clearHtmlTag,
  truncateString,
};
