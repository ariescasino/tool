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
            title: "Danh Sách Trò Chơi Bắn Cá",
            config,
            session,
            helpers,
            location: "index-fish-game",
        };

        res.render("pages/Lobby/fish", { dataPage });
    },
    gameList: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "Danh Sách Trò Chơi Bắn Cá",
            config,
            session,
            helpers,
            location: "index-fish-game",
        };

        res.render("pages/Lobby/FishProduct/index", { dataPage });
    },
};