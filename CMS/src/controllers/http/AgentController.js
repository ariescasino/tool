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
  list: async (req, res) => {
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

      const session = req.session;
      const dataPage = {
        config: config,
        title: "Danh Sách Đại Lý Tổng",
        session: session,
        helpers: helpers,
      };

      await axios({
        method: "get",
        url: `${config.API_SERVER}/agent/list?page=${page}&limit=${kmess}${name}${username}${phone}`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((resp) => {
          const resApi = resp.data;
          res.render("AgentMaster/agent/listAgent", {
            dataPage: dataPage,
            dataApi: resApi.data,
            error: null,
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("AgentMaster/agent/listAgent", {
            dataPage: dataPage,
            dataApi: [],
            error: err.msg,
          });
        });
    } catch (e) {
      console.log(e);
      res.redirect("/agent-master/auth/login");
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
