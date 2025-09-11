const jsftp = require("jsftp");

module.exports = (config) => {
    try {
        const ftpConnection = new jsftp({
            host: config.FTP_HOST,
            port: config.FTP_PORT,
            user: config.FTP_USER,
            pass: config.FTP_PASS,
        });
        return ftpConnection;
    } catch (e) {
        return new throwError("Connect Failed!");
    }
}