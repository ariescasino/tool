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
  listBetHistory: async (req, res) => {
    try {
      const page = parseInt(req.query.page, true)
        ? parseInt(req.query.page, true)
        : 1;
      const kmess = parseInt(req.query.limit, true)
        ? parseInt(req.query.limit, true)
        : 20;

      const username = req.query.username
        ? `&username=${req.query.username}`
        : ``;
      const transid = req.query.transid ? `&transid=${req.query.transid}` : ``;
      const game = req.query.game ? `&game=${req.query.game}` : ``;
      const round = req.query.round ? `&round=${req.query.round}` : ``;

      const session = req.session;
      const dataPage = {
        config: config,
        title: "Lịch Sử Đặt Cược",
        session: session,
        helpers: helpers,
      };

      await axios({
        method: "get",
        url: `${config.API_SERVER}/game/bet-history?page=${page}&limit=${kmess}${username}${game}${transid}${round}`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((resp) => {
          const resApi = resp.data;
          res.render("pages/game/listBetHistory", {
            dataPage: dataPage,
            dataApi: resApi.data,
            error: null,
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("pages/game/listBetHistory", {
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
  listBetHistoryByUser: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(200).json({
          status: false,
          msg: "Missing Param ID",
        });
      }

      if (!Number(id) >> 0) {
        return res.status(200).json({
          status: false,
          msg: "Err ID",
        });
      }

      const page = parseInt(req.query.page, true)
        ? parseInt(req.query.page, true)
        : 1;
      const kmess = parseInt(req.query.limit, true)
        ? parseInt(req.query.limit, true)
        : 20;

      const transid = req.query.transid ? `&transid=${req.query.transid}` : ``;
      const game = req.query.game ? `&game=${req.query.game}` : ``;
      const round = req.query.round ? `&round=${req.query.round}` : ``;

      const session = req.session;
      const dataPage = {
        config: config,
        title: "Lịch Sử Đặt Cược Nguời Chơi",
        session: session,
        helpers: helpers,
        request: req,
      };

      await axios({
        method: "get",
        url: `${config.API_SERVER}/game/bet-history/${id}?page=${page}&limit=${kmess}${game}${transid}${round}`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((resp) => {
          const resApi = resp.data;
          res.render("pages/game/listBetHistoryByUser", {
            dataPage: dataPage,
            dataApi: resApi.data,
            error: null,
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("pages/game/listBetHistoryByUser", {
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
