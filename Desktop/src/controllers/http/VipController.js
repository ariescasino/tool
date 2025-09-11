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
                title: "Danh Sách Trò Chơi",
                config,
                session,
                helpers,
                location: "vip-privileges",
            };
            res.render("pages/vip/index", {
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