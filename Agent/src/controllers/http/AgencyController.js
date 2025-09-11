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
    listAgency: async (req, res) => {
        try {
            const page = parseInt(req.query.page, true)
                ? parseInt(req.query.page, true)
                : 1;
            const kmess = parseInt(req.query.limit, true)
                ? parseInt(req.query.limit, true)
                : 10;

            const name = req.query.name ? `&name=${req.query.name}` : ``;
            const username = req.query.username
                ? `&username=${req.query.username}`
                : ``;
            const phone = req.query.phone ? `&phone=${req.query.phone}` : ``;
            const email = req.query.email ? `&email=${req.query.email}` : ``;
            const code = req.query.code ? `&code=${req.query.code}` : ``;

            const session = req.session;
            const dataPage = {
                config: config,
                title: "Danh Sách Các Đại Lý F1",
                session: session,
                helpers: helpers,
                agencyLevel: 1
            };

            await axios({
                method: "get",
                url: `${config.API_SERVER}/agency?page=${page}&limit=${kmess}${name}${username}${phone}${email}${code}`,
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            })
                .then((resp) => {
                    const resApi = resp.data;
                    res.render("pages/agency/listAgency", {
                        dataPage: dataPage,
                        dataApi: resApi.data,
                        error: null,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("pages/agency/listAgency", {
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
    listAgencyByLevelAndAgencyId: async (req, res) => {
        try {

            const page = parseInt(req.query.page, true)
                ? parseInt(req.query.page, true)
                : 1;
            const kmess = parseInt(req.query.limit, true)
                ? parseInt(req.query.limit, true)
                : 10;

            const { agencyLevel, agencyID } = req.params;

            const session = req.session;
            const dataPage = {
                config: config,
                title: "Danh Sách Các Đại Lý F" + agencyLevel,
                session: session,
                helpers: helpers,
                agencyLevel: Number(agencyLevel)
            };

            if (!agencyLevel || !agencyID) {
                res.render("pages/agency/listAgency", {
                    dataPage: dataPage,
                    dataApi: [],
                    error: null,
                });
            }

            const name = req.query.name ? `&name=${req.query.name}` : ``;
            const username = req.query.username
                ? `&username=${req.query.username}`
                : ``;
            const phone = req.query.phone ? `&phone=${req.query.phone}` : ``;
            const email = req.query.email ? `&email=${req.query.email}` : ``;
            const code = req.query.code ? `&code=${req.query.code}` : ``;

            await axios({
                method: "get",
                url: `${config.API_SERVER}/agency/${agencyID}?page=${page}&limit=${kmess}${name}${username}${phone}${email}${code}`,
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            })
                .then((resp) => {
                    const resApi = resp.data;
                    res.render("pages/agency/listAgency", {
                        dataPage: dataPage,
                        dataApi: resApi.data,
                        error: null,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.render("pages/agency/listAgency", {
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
        addAgentMaster: async (req, res) => {
            try {
                const session = req.session;
                const dataPage = {
                    config: config,
                    title: "Thêm Đại Lý Tổng",
                    session: session,
                    helpers: helpers,
                };
                res.render("AgentMaster/agent/actions/addAgentMaster", {
                    dataPage: dataPage,
                });
            } catch (err) {
                console.log(err);
                res.redirect(dataPage.session.lastUrl);
                return;
            }
        },
        agentDetail: async (req, res) => {
            try {
                const session = req.session;
                const dataPage = {
                    config: config,
                    title: "Chi Tiết Đại Lý Tổng",
                    session: session,
                    helpers: helpers,
                };

                const id = req.params.id ? req.params.id : null;
                if (!id) {
                    res.redirect(dataPage.session.lastUrl);
                    return;
                }

                await axios({
                    method: "get",
                    url: `${config.API_SERVER}/agent/info/${id}`,
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                    },
                })
                    .then((resp) => {
                        const resApi = resp.data;
                        res.render("AgentMaster/agent/actions/agentDetail", {
                            dataPage: dataPage,
                            dataApi: resApi.data,
                            error: null,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.redirect(dataPage.session.lastUrl);
                        return;
                    });
            } catch (err) {
                console.log(err);
                res.redirect(dataPage.session.lastUrl);
                return;
            }
        },
        agentUsers: async (req, res) => {
            try {
                const session = req.session;
                const dataPage = {
                    config: config,
                    title: "Thành Viên Đại Lý Tổng",
                    session: session,
                    helpers: helpers,
                };

                const id = req.params.id ? req.params.id : null;
                const code = req.params.code ? req.params.code : null;
                const nameAgentMaster = req.query.nameAgentMaster
                    ? req.query.nameAgentMaster
                    : null;

                if (!id && nameAgentMaster) {
                    res.redirect(dataPage.session.lastUrl);
                    return;
                }

                const page = parseInt(req.query.page, true)
                    ? parseInt(req.query.page, true)
                    : 1;
                const kmess = parseInt(req.query.limit, true)
                    ? parseInt(req.query.limit, true)
                    : 10;

                const name = req.query.name ? `&name=${req.query.name}` : ``;
                const username = req.query.username
                    ? `&nick=${req.query.username}`
                    : ``;
                const phone = req.query.phone ? `&phone=${req.query.phone}` : ``;
                const ip = req.query.ip ? `&byIp=${req.query.ip}` : ``;

                await axios({
                    method: "get",
                    url: `${config.API_SERVER}/agent/list-users-by-agent-master/${id}?page=${page}&limit=${kmess}${name}${username}${phone}${ip}`,
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                    },
                })
                    .then((resp) => {
                        const resApi = resp.data;
                        res.render("AgentMaster/agent/actions/agentMasterViewUsers", {
                            dataPage: dataPage,
                            dataApi: resApi.data,
                            dataAgentMaster: {
                                id,
                                code,
                                name: nameAgentMaster,
                            },
                            error: null,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.redirect(dataPage.session.lastUrl);
                        return;
                    });
            } catch (err) {
                console.log(err);
                res.redirect(dataPage.session.lastUrl);
                return;
            }
        },
        getProfitByAgentMaster: async (req, res) => {
            try {
                const session = req.session;
                const dataPage = {
                    config: config,
                    title: "Kiểm Tra Lợi Nhuận",
                    session: session,
                    helpers: helpers,
                };
                const code = req.params.code ? req.params.code : null;
                const id = req.query.id ? req.query.id : null;
                const name = req.query.name ? req.query.name : null;

                if (!code && id && name) {
                    res.redirect(dataPage.session.lastUrl);
                    return;
                }
                res.render("AgentMaster/agent/actions/profitAgentMaster", {
                    dataPage: dataPage,
                    data: {
                        id,
                        name,
                        code,
                    },
                    error: null,
                });
            } catch (e) {
                console.log(e);
                res.redirect(dataPage.session.lastUrl);
                return;
            }
        },
        agentChildViewUsers: async (req, res) => {
            try {
                const session = req.session;
                const dataPage = {
                    config: config,
                    title: "Danh Sách Thành Viên Đại Lý Con",
                    session: session,
                    helpers: helpers,
                };

                const id = req.params.id ? req.params.id : null;
                const idAgentMaster = req.query.idAgentMaster
                    ? req.query.idAgentMaster
                    : null;
                const nameAgentMaster = req.query.nameAgentMaster
                    ? req.query.nameAgentMaster
                    : null;

                if (!id && !nameAgentMaster && !idAgentMaster) {
                    res.redirect(dataPage.session.lastUrl);
                    return;
                }

                const page = parseInt(req.query.page, true)
                    ? parseInt(req.query.page, true)
                    : 1;
                const kmess = parseInt(req.query.limit, true)
                    ? parseInt(req.query.limit, true)
                    : 10;

                const name = req.query.name ? `&name=${req.query.name}` : ``;
                const username = req.query.username
                    ? `&nick=${req.query.username}`
                    : ``;
                const phone = req.query.phone ? `&phone=${req.query.phone}` : ``;
                const ip = req.query.ip ? `&byIp=${req.query.ip}` : ``;

                await axios({
                    method: "get",
                    url: `${config.API_SERVER}/agent/list-users-by-agent-child/${id}?page=${page}&limit=${kmess}${name}${username}${phone}${ip}`,
                    headers: {
                        Authorization: `Bearer ${session.accessToken}`,
                    },
                })
                    .then((resp) => {
                        const resApi = resp.data;
                        res.render("AgentMaster/agent/actions/agentChildViewUsers", {
                            dataPage: dataPage,
                            dataApi: resApi.data,
                            dataAgentMaster: {
                                id: idAgentMaster,
                                name: nameAgentMaster,
                            },
                            error: null,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        res.redirect(dataPage.session.lastUrl);
                        return;
                    });
            } catch (err) {
                console.log(err);
                res.redirect(dataPage.session.lastUrl);
                return;
            }
        },
        getProfitByAgentChild: async (req, res) => {
            try {
                const session = req.session;
                const dataPage = {
                    config: config,
                    title: "Kiểm Tra Lợi Nhuận Đại Lý Con",
                    session: session,
                    helpers: helpers,
                };
                const code = req.params.code ? req.params.code : null;

                if (!code) {
                    res.redirect(dataPage.session.lastUrl);
                    return;
                }
                res.render("AgentMaster/agent/actions/profitAgentChild", {
                    dataPage: dataPage,
                    data: {
                        code,
                    },
                    error: null,
                });
            } catch (e) {
                console.log(e);
                res.redirect(dataPage.session.lastUrl);
                return;
            }
        },
    },
};
