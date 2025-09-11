function random_avt() {
    var items = [
        'https://static.ageofempires.com/aoe/wp-content/uploads/2020/12/avatar_event0_01.png',
        'https://static.ageofempires.com/aoe/wp-content/uploads/2020/10/avatar_musketeer.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc53OtWi_2leRmXPh2xYNNtF5fvzok5zOFy-LbBjjLM-j4llLu6nwhyF7dYWOsU53nDkc&usqp=CAU',
        'https://styles.redditmedia.com/t5_d3rcc/styles/profileIcon_snoo36502467-3385-4bf4-9101-b0165c46c76c-headshot.png?width=256&height=256&crop=256:256,smart&s=242433b0efbf04ab8b5be56887d2e2c434247d67',
        'https://i.pinimg.com/236x/5b/8c/c4/5b8cc4ff2b10faf825ded3b3bec68c2a--age-of-empires-avatar.jpg',
        'https://i.pinimg.com/236x/30/53/37/3053377045c239204dff9581f211754a--age-of-empires-avatar.jpg',
        'https://i.pinimg.com/236x/c2/e1/49/c2e1496617a761e460684e0cacf0bf09--pc-game-game-art.jpg',
        'https://uploads.scratch.mit.edu/users/avatars/14435732.png',
        'https://i.pinimg.com/originals/ba/29/be/ba29bed1169d43381985bcce735a502e.png',
        'https://i.imgur.com/ilQDKKq.png',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f3cf51b-5d56-4622-8dba-f26e78dd3cbc/dbyns3h-72aaf018-a7d0-4ce1-b38a-eff9cc92f038.jpg/v1/fill/w_600,h_562,q_75,strp/my_avatar___age_of_empires_3_edition_by_mreugenejk_dbyns3h-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NjIiLCJwYXRoIjoiXC9mXC8xZjNjZjUxYi01ZDU2LTQ2MjItOGRiYS1mMjZlNzhkZDNjYmNcL2RieW5zM2gtNzJhYWYwMTgtYTdkMC00Y2UxLWIzOGEtZWZmOWNjOTJmMDM4LmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Yc4eEATHPI8Rr-l-7FLsszKmigy1xCRGxr2xyrXrfkY',
        'https://vinagamemobile.com/wp-content/uploads/2018/04/avatar-facebook-dep.jpg'
    ];
    var random = items[Math.floor(Math.random() * items.length)]
    return random;
}

let changeTitle = (title) => {
    document.title = title;
}

let timeCV = (UNIX_timestamp) => {
    var time = moment(UNIX_timestamp).format("DD/MM/YYYY");
    return time;
}

let timeConLai = (UNIX_timestamp) => {
    var now = moment().format("MM");
    var exprice = moment(UNIX_timestamp).format("MM");
    const conlai = (Number(exprice) - Number(now) <= 0) ? 0 : Number(exprice) - Number(now);
    return conlai;
}

Date.monthsDiff = function (day1, day2) {
    var d1 = day1,
        d2 = day2;
    if (day1 < day2) {
        d1 = day2;
        d2 = day1;
    }
    var m = (d1.getFullYear() - d2.getFullYear()) * 12 + (d1.getMonth() - d2.getMonth());
    if (d1.getDate() < d2.getDate()) --m;
    return m;
}


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
}

let count_element_in_array = (array, x) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
            count++;
    }
    return count;
}

let cutEmail = function (email) {
    let data = email.split('@');
    let string = '';
    let start = '';
    if (data[0].length > 7) {
        start = data[0].slice(0, 6);
    } else {
        start = data[0].slice(0, data[0].length - 3);
    }
    return string.concat(start, '***@', data[1]);
}

let cutPhone = function (phone) {
    let string = '';
    let start = phone.slice(0, 6);
    let end = phone.slice(phone.length - 2, phone.length);
    return string.concat(start, '****', end);
}

let validateEmail = function (t) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)
}



let checkPhoneValid = function (phone) {
    return /^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))[0-9]{7,10}$/im.test(phone);
}
let phoneCrack2 = function (phone) {
    let data = phone.match(/^[\+]?(?:[(][0-9]{1,3}[)]|)/im);
    if (data) {
        return phone.slice(data[0].length, phone.length)
    }
    return data;
}
let phoneCrack = function (phone) {
    let data = phone.match(/^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))/im);
    if (data) {
        return {
            region: data[0],
            phone: phone.slice(data[0].length, phone.length),
        };
    }
    return data;
}
let checkPhoneZero = function (phone) {
    return /^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|86|82|83|85|88|81|80|87|89|0))[0-9]{7,30}$/im.test(phone);
}
let nFormatter = function (t, e) {
    for (var i = [{
        value: 1e18,
        symbol: 'E'
    }, {
        value: 1e15,
        symbol: 'P'
    }, {
        value: 1e12,
        symbol: 'T'
    }, {
        value: 1e9,
        symbol: 'G'
    }, {
        value: 1e6,
        symbol: 'M'
    }, {
        value: 1e3,
        symbol: 'k'
    }], o = /\.0+$|(\.[0-9]*[1-9])0+$/, n = 0; n < i.length; n++)
        if (t >= i[n].value)
            return (t / i[n].value).toFixed(e).replace(o, '$1') + i[n].symbol;
    return t.toFixed(e).replace(o, '$1');
}

let anPhanTram = function (bet, so_nhan, ti_le, type = false) {
    // so_nhan: số nhân
    // ti_le: tỉ lệ thuế
    // type: Thuế tổng, thuế gốc
    let vV = bet * so_nhan;
    let vT = !!type ? vV : bet;
    return vV - Math.ceil(vT * ti_le / 100);
}

// kiểm tra chuỗi chống
let isEmpty = function (str) {
    return (!str || 0 === str.length)
}

// đổi số thành tiền
let numberWithCommas = function (number) {
    if (number) {
        let result = (number = parseInt(number)).toString().split('.');
        return result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.'),
            result.join('.')
    }
    return '0'
}

// Lấy số từ chuỗi
let getOnlyNumberInString = function (t) {
    let e = t.match(/\d+/g);
    return e ? e.join('') : ''
}

// thêm số 0 trước dãy số (lấp đầy bằng số 0)
let numberPad = function (number, length) {
    // number: số
    // length: độ dài dãy số
    let str = '' + number
    while (str.length < length)
        str = '0' + str

    return str
}

let shuffle = function (array) {
    let m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}


let _formatMoneyVND = (num, digits) => {
    const si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "K" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ]
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    var i
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol
}



let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let RandomUserName = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let chiaKhongDu = (a, b) => {
    return (a - a % b) / b;
}

let nLength = function (n) {
    return n.toString().length;
}

let numbToK = (numb) => {
    return numb / 1000 + "K";
}

let Pagination = (current_page, totalRecord, pagesSize = 9, onSides = 3) => {
    let last_page = Math.ceil(totalRecord / pagesSize); // 9 bản ghi trên 1 page
    // pages
    let pages = [];
    // Loop through
    for (let i = 1; i <= last_page; i++) {
        // Define offset
        let offset = (i == 1 || last_page) ? onSides + 1 : onSides;
        // If added
        if (i == 1 || (current_page - offset <= i && current_page + offset >= i) ||
            i == current_page || i == last_page) {
            pages.push(i);
        } else if (i == current_page - (offset + 1) || i == current_page + (offset + 1)) {
            pages.push('...');
        }
    }
    return pages;
}

let timeCountDown = (c, elementId, color, callback) => {
    try {
        let myTimer = setInterval(myClock, 1000);

        function myClock() {
            --c
            let seconds = c % 60; // Seconds that cannot be written in minutes
            let minutes = "0" + (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
            let minutesLeft = minutes % 60; // Minutes that cannot be written in hours
            let hours = (minutes - minutesLeft) % 60;
            let addZero = (nLength(seconds) <= 1) ? `0` : ``;
            try {
                document.getElementById(elementId).style.color = `#${color}`;
                document.getElementById(elementId).innerText = `${minutes}:${addZero + seconds}`;
            } catch (e) { }
            if (c == 0) {
                clearInterval(myTimer);
                if (typeof callback == "function") callback();
            }
        }
    } catch (e) { }
}

let utf8_to_b64 = (str) => {
    return window.btoa(unescape(encodeURIComponent(str)));
}

let b64_to_utf8 = (str) => {
    return decodeURIComponent(escape(window.atob(str)));
}

let isInt = (value) => {
    var er = /^-?[0-9]+$/;
    return er.test(value);
}

let getQueryValue = (queryName) => {
    var query = decodeURI(window.location.search.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) {
            return pair[1];
        }
    }
    return null;
}

const blockUI = (status = true) => {
    if (status) {
        document.querySelectorAll('.blockUI').forEach(element => element.remove());
        $("body").append(`
            <div class="blockUI blockOverlay" style="z-index: 1000; border: none; margin: 0px; padding: 0px; width: 100%; height: 100%; top: 0px; left: 0px; background-color: rgb(0, 0, 0); opacity: 0.5; cursor: wait; position: fixed;"></div>
            <div class="blockUI blockMsg blockPage" style="z-index: 1011; position: fixed; padding: 0px; margin: 0px; width: 30%; top: 40%; left: 35%; text-align: center; color: rgb(0, 0, 0); border: 0px; background-color: transparent; cursor: wait;"><i class="fa fa-spinner fa-spin text-white"></i></div>
        `);
    }
    if (!status) {
        document.querySelectorAll('.blockUI').forEach(element => element.remove());
    }
}

const clearOffCanvas = () => {
    $(".offCanvasElement").html(``);
}