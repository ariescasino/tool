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
            title: "Danh Sách Trò Chơi",
            config,
            session,
            helpers,
            location: "index-gamelobby",
        };
        try {
            res.render("pages/gamelobby/index", {
                dataPage,
                dataApi: {
                    data: {
                        games: []
                    }
                },
            });
        } catch (e) {
            console.log(e);
            res.render("pages/gamelobby/index", {
                dataPage,
                dataApi: {
                    data: {
                        games: []
                    }
                },
                error: e.message,
            });
        }
    },
    slot: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "DANH SÁCH TRÒ CHƠI NỔ HŨ",
            config,
            session,
            helpers,
            location: "slot-gamelobby",
        };
        const { productType } = req.params;
        if (!productType) {
            return res
                .status(200)
                .json({ status: false, msg: "Error Missing Product Type!" });
        }

        try {
            await axios({
                method: "get",
                url: `${config.MAIN_API}/api/product/${productType.toUpperCase()}/RNG`,
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            })
                .then((resp) => {
                    const resApi = resp.data;
                    if (!resApi.status) res.redirect('/?' + qs.stringify({
                        "title": "Bảo trì!",
                        "type": "error",
                        "text": "Sản phẩm bạn vừa chọn hiện đang được bảo trì!"
                    }));

                    res.render("pages/gamelobby/slot", {
                        dataPage: dataPage,
                        dataApi: resApi,
                        error: null,
                        location: productType.toUpperCase()
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("pages/gamelobby/slot", {
                        dataPage: dataPage,
                        dataApi: {
                            data: {
                                games: []
                            }
                        },
                        error: err.msg,
                        location: productType.toUpperCase()
                    });
                });
        } catch (e) {
            console.log(e);
            res.render("pages/gamelobby/slot", {
                dataPage,
                dataApi: {
                    data: {
                        games: []
                    }
                },
                error: e.message,
                location: productType.toUpperCase()
            });
        }
    },
    fish: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "DANH SÁCH TRÒ CHƠI BẮN CÁ",
            config,
            session,
            helpers,
            location: "fish-gamelobby",
        };
        const { productType } = req.params;
        if (!productType) {
            return res
                .status(200)
                .json({ status: false, msg: "Error Missing Product Type!" });
        }

        try {
            await axios({
                method: "get",
                url: `${config.MAIN_API}/api/product/${productType.toUpperCase()}/FISH`,
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            })
                .then((resp) => {
                    const resApi = resp.data;

                    if (!resApi.status) res.redirect('/?' + qs.stringify({
                        "title": "Bảo trì!",
                        "type": "error",
                        "text": "Sản phẩm bạn vừa chọn hiện đang được bảo trì!"
                    }));

                    res.render("pages/gamelobby/fish", {
                        dataPage: dataPage,
                        dataApi: resApi,
                        error: null,
                        location: productType.toUpperCase()
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("pages/gamelobby/fish", {
                        dataPage: dataPage,
                        dataApi: {
                            data: {
                                games: []
                            }
                        },
                        error: err.msg,
                        location: productType.toUpperCase()
                    });
                });
        } catch (e) {
            console.log(e);
            res.render("pages/gamelobby/fish", {
                dataPage,
                dataApi: {
                    data: {
                        games: []
                    }
                },
                error: e.message,
                location: productType.toUpperCase()
            });
        }
    },
    chess: async (req, res) => {
        const session = req.session;
        const dataPage = {
            title: "DANH SÁCH TRÒ CHƠI THẺ BÀI",
            config,
            session,
            helpers,
            location: "chess-gamelobby",
        };
        const { productType } = req.params;
        if (!productType) {
            return res
                .status(200)
                .json({ status: false, msg: "Error Missing Product Type!" });
        }

        try {
            await axios({
                method: "get",
                url: `${config.MAIN_API}/api/product/${productType.toUpperCase()}/CHESS`,
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            })
                .then((resp) => {
                    const resApi = resp.data;
                    if (!resApi.status) res.redirect('/?' + qs.stringify({
                        "title": "Bảo trì!",
                        "type": "error",
                        "text": "Sản phẩm bạn vừa chọn hiện đang được bảo trì!"
                    }));

                    res.render("pages/gamelobby/chess", {
                        dataPage: dataPage,
                        dataApi: resApi,
                        error: null,
                        location: productType.toUpperCase()
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("pages/gamelobby/chess", {
                        dataPage: dataPage,
                        dataApi: {
                            data: {
                                games: []
                            }
                        },
                        error: err.msg,
                        location: productType.toUpperCase()
                    });
                });
        } catch (e) {
            console.log(e);
            res.render("pages/gamelobby/chess", {
                dataPage,
                dataApi: {
                    data: {
                        games: []
                    }
                },
                error: e.message,
                location: productType.toUpperCase()
            });
        }
    },
};