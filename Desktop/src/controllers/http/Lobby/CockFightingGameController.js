const qs = require("qs");
const axios = require("axios");
const config = require("@Config");
const helpers = require("@Helpers/helpers");
const {
    ERROR_PAGE,
    ERROR_FORM,
    ERROR_AUTH,
    SUCCESS,
} = require("@Helpers/contants");


module.exports = {
    index: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "Danh Sách Trò Chơi Đá Gà",
            config,
            session,
            helpers,
            location: "index-cock-fighting-game",
        };

        res.render("pages/Lobby/cockfighting", { dataPage });
    }
};