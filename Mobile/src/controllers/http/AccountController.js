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

const DEPOSIT_BANK_TYPE = "auto";

module.exports = {
  showMenu: async (req, res) => {
    try {
      const dataPage = {
        title: "Trung Tâm Hội Viên",
        config,
        session: req.session,
        helpers,
        location: "user_menu",
      };
      res.render("pages/account/accountMenu", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  changePassword: async (req, res) => {
    try {
      const dataPage = {
        title: "Trung Tâm Bảo Mật",
        config,
        session: req.session,
        helpers,
        location: "change-password",
      };
      res.render("pages/account/changePassword", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  changeSecurityPassword: async (req, res) => {
    try {
      const dataPage = {
        title: "Trung Tâm Bảo Mật",
        config,
        session: req.session,
        helpers,
        location: "change-security-password",
      };
      res.render("pages/account/changeSecurityPassword", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  bankCards: async (req, res) => {
    try {
      const dataPage = {
        title: "",
        config,
        session: req.session,
        helpers,
        location: "bankcards",
      };
      res.render("pages/account/bankCards", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  gameWallet: async (req, res) => {
    try {
      const dataPage = {
        title: "",
        config,
        session: req.session,
        helpers,
        location: "mywallet",
      };
      res.render("pages/account/gameWallet", {
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
        title: "Khu Vực Nạp Tiền",
        config,
        session: req.session,
        helpers,
        location: "deposit",
      };
      res.render("pages/account/deposit", {
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
        title: "Khu Vực Rút Tiền",
        config,
        session,
        helpers,
        location: "withdraw",
      };
      res.render("pages/account/withdraw", {
        dataPage: dataPage
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
        title: "Hòm Thư và Thông Báo",
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
  discount: async (req, res) => {
    try {
      const dataPage = {
        title: "Hoàn Trả",
        config,
        session: req.session,
        helpers,
        location: "discount",
      };
      res.render("pages/account/discount", {
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
        title: "Lịch Sử Giao Dịch",
        session: session,
        helpers: helpers,
        location: "finan-history",
      };

      res.render("pages/account/transactionHistory", {
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
        title: "Lịch Sử Đặt Cược",
        session: session,
        helpers: helpers,
        location: "game-history",
      };

      res.render("pages/account/gameHistory", {
        dataPage: dataPage
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
      const dataPage = {
        title: "",
        config,
        session: req.session,
        helpers,
        location: "vip",
      };
      res.render("pages/account/vip", {
        dataPage,
      });
    } catch (e) {
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  promotions: async (req, res) => {
    try {
      const dataPage = {
        title: "Khuyến Mãi và Ưu Đãi",
        config,
        session: req.session,
        helpers,
        location: "promotion",
      };
      res.render("pages/account/promotions", {
        dataPage,
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
        title: "Chuyển Quỹ Trò Chơi",
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
  agency: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        config: config,
        title: "Khu vực đại lý",
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
};
