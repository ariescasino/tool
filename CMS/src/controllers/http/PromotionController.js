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
    listPromotion: async (req, res) => {
        try {
            const page = parseInt(req.query.page, true)
                ? parseInt(req.query.page, true)
                : 1;
            const kmess = parseInt(req.query.limit, true)
                ? parseInt(req.query.limit, true)
                : 10;

            const title = req.query.title ? `&title=${req.query.title}` : ``;
            const thumbnail = req.query.thumbnail ? `&thumbnail=${req.query.thumbnail}` : ``;
            const content = req.query.content ? `&content=${req.query.content}` : ``;
            const isRegister = req.query.isRegister ? `&isRegister=${req.query.isRegister}` : ``;

            const session = req.session;
            const dataPage = {
                config: config,
                title: "Danh Sách Khuyến Mãi",
                session: session,
                helpers: helpers,
            };

            await axios({
                method: "get",
                url: `${config.API_SERVER}/promotion?page=${page}&limit=${kmess}${title}${content}`,
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            })
                .then((resp) => {
                    const resApi = resp.data;
                    res.render("pages/promotion/listPromotion", {
                        dataPage: dataPage,
                        dataApi: resApi.data,
                        error: null,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("pages/promotion/listPromotion", {
                        dataPage: dataPage,
                        dataApi: [],
                        error: err.msg,
                    });
                });
        } catch (e) {
            console.log(e);
            res.redirect("/auth/login");
        }
    },
    Actions: {
        create: async (req, res) => { },
    },
};
