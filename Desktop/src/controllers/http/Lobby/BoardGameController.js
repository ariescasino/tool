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
            title: "Danh Sách Trò Chơi 3D",
            config,
            session,
            helpers,
            location: "index-board-game",
        };

        res.render("pages/Lobby/board", { dataPage });
    },
    product: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "Danh Sách Game Bài",
            config,
            session,
            helpers,
            location: "index-board-game",
        };
        res.render("pages/Lobby/BoardProduct/" + req.params.product, { dataPage });
    },
};