const base64 = require('base-64');
const utf8 = require('utf8');

// kiểm tra chuỗi chống
const isEmpty = function (str) {
    return (!str || 0 === str.length)
}

const base64String = {
    Encode: (string) => {
        const bytes = utf8.encode(string);
        const encoded = base64.encode(bytes);
        return encoded;
    },
    Decode: (string) => {
        const bytes = base64.decode(string);
        const text = utf8.decode(bytes);
        return text;
    }
}

module.exports = {
    isEmpty,
    base64String
}