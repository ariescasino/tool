const {
    ERROR_CUSTOM,
    ERROR_FORM,
    SUCCESS,
    ERROR_SERVER,
    ERROR_AGENT,
} = require("@Helpers/contants");
const axios = require("axios");
const validator = require("validator");

const config = require("@Config");
const helpers = require("@Helpers/helpers");
const { parseInt } = require("@Helpers/Number");

module.exports = {
    index: async (req, res) => {
        try {
            res.json({
                msg: 'Main Setting Page'
            });
        } catch (e) {
            console.log(e);
            res.redirect("/auth/login");
        }
    },
    General: async (req, res) => {
        try {
            const session = req.session;
            const dataPage = {
                config: config,
                title: "Cài đặt chung",
                session: session,
                helpers: helpers,
            };
            res.render("pages/setting/general", {
                dataPage: dataPage,
                dataApi: [],
                error: "error",
            });
        } catch (e) {
            console.log(e);
            res.redirect("/auth/login");
        }
    },
    Telegram: async (req, res) => {
        try {
            const session = req.session;
            const dataPage = {
                config: config,
                title: "Cài đặt chung",
                session: session,
                helpers: helpers,
            };
            res.render("pages/setting/telegram", {
                dataPage: dataPage,
                dataApi: [],
                error: 'error',
            });
        } catch (e) {
            console.log(e);
            res.redirect("/auth/login");
        }
    },
};
