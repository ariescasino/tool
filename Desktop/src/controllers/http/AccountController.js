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
//const { createToken, verifyToken } = require('@Helpers/jwt');
//const { validatePassword } = require('@Helpers/AgentMaster/password');
const { parseInt } = require("@Helpers/Number");

const DEPOSIT_BANK_TYPE = "auto";

module.exports = {
  security: async (req, res) => {
    try {
      const dataPage = {
        title: "",
        config,
        session: req.session,
        helpers,
        location: "security",
      };
      res.render("pages/account/security", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  profile: async (req, res) => {
    try {
      const dataPage = {
        title: "",
        config,
        session: req.session,
        helpers,
        location: "profile",
      };
      res.render("pages/account/profile", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  deposit: async (req, res) => {
    try {
      const dataPage = {
        title: "Khu vực nạp tiền",
        config,
        session: req.session,
        helpers,
        location: "deposit",
      };

      return res.render("pages/account/deposit", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  withdraw: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        title: "",
        config,
        session,
        helpers,
        location: "withdraw",
      };
      await axios({
        method: "get",
        url: `${config.MAIN_API}/api/payment/getListUserBank`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((resp) => {
          const resApi = resp.data;
          res.render("pages/account/withdraw", {
            dataPage: dataPage,
            dataApi: resApi,
            error: null,
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("pages/account/withdraw", {
            dataPage: dataPage,
            error: err.msg,
          });
        });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  inbox: async (req, res) => {
    try {
      const dataPage = {
        title: "",
        config,
        session: req.session,
        helpers,
        location: "inbox",
      };
      res.render("pages/account/inbox", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  transactionHistory: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "Chi tiết giao dịch",
        session: session,
        helpers: helpers,
        location: "transaction-history",
      };
      return res.render("pages/account/transactionHistory", {
        dataPage: dataPage
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  gameHistory: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "Lịch sử đặt cược",
        session: session,
        helpers: helpers,
        location: "game-history",
      };

      return res.render("pages/account/gameHistory", {
        dataPage: dataPage
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  walletTransfer: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "",
        session: session,
        helpers: helpers,
        location: "wallet-transfer",
      };
      res.render("pages/account/walletTransfer", {
        dataPage: dataPage,
        dataApi: [],
        error: null,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  vipInfo: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "",
        session: session,
        helpers: helpers,
        location: "vip",
      };
      res.render("pages/account/vip", {
        dataPage: dataPage,
        dataApi: [],
        error: null,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  agency: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "",
        session: session,
        helpers: helpers,
        location: "agency",
      };
      res.render("pages/account/agency", {
        dataPage: dataPage,
        dataApi: [],
        error: null,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  paymentRefund: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "Lịch sử hoàn trả",
        session: session,
        helpers: helpers,
        location: "payment-refund",
      };
      return res.render("pages/account/paymentRefund", {
        dataPage: dataPage
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
};
