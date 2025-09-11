const config = require("@Config");
const helpers = require("@Helpers/helpers");
const {
    ERROR_PAGE,
    ERROR_FORM,
    ERROR_AUTH,
    SUCCESS,
} = require("@Helpers/contants");

module.exports = {
    default: async (req, res) => {
        try {
            const session = req.session;
            const dataPage = {
                title: "Danh Sách Ưu Đãi",
                config,
                session,
                helpers,
                location: "promotions",
            };
            res.render("pages/promotions/index", {
                dataPage,
                dataApi: {
                    data: {
                        games: []
                    }
                },
            });
        } catch (e) {
            console.log(e);
            res.status(200).json({
                status: false,
                msg: e.message,
            });
        }
    }
};