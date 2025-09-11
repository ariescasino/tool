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
            title: "Danh Sách Trò Chơi Nổ Hũ",
            config,
            session,
            helpers,
            location: "index-slot-game",
        };

        res.render("pages/Lobby/slot", { dataPage });
    },
    product: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "Danh Sách Trò Chơi Nổ Hũ",
            config,
            session,
            helpers,
            location: "index-slot-game",
        };
        res.render("pages/Lobby/SlotProduct/" + req.params.product, { dataPage });
    },
};