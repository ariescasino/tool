const axios = require("axios");
const config = require("@Config");

module.exports = async (req, res, next) => {
    try {
        const session = req.session;
        await axios({
            method: "get",
            url: `${config.MAIN_API}/api/game/balanceUpdate`,
            headers: {
                Authorization: `Bearer ${session.accessToken}`,
            },
        })
            .then((resp) => {
                next();
            })
            .catch((err) => {
                next();
            });
    } catch (e) {
        console.log(e);
        next();
    }
}