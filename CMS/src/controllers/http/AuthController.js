const qs = require("qs");
const axios = require("axios");
const config = require("@Config");
const {
  ERROR_PAGE,
  ERROR_FORM,
  ERROR_AUTH,
  SUCCESS,
} = require("@Helpers/contants");
//const { createToken, verifyToken } = require('@Helpers/jwt');
//const { validatePassword } = require('@Helpers/AgentMaster/password');

module.exports = {
  login: async (req, res) => {
    try {
      if (req.session.isLogin) {
        res.redirect(301, "/");
      } else {
        res.render("pages/auth/login");
      }
    } catch (e) {
      res.status(500).json({
        status: false,
        msg: e.message,
      });
    }
  },
  loginPOST: async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password)
        return res.status(400).json({
          status: false,
          msg: ERROR_FORM.MISSING_FIELD,
        });

      const requestApi = await axios({
        method: "post",
        url: `${config.API_SERVER}/auth/login`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify({
          username: username,
          password: password,
        }),
      });

      const resApi = requestApi.data;

      if (resApi.status) {
        req.session.isLogin = true;
        req.session.role = "admin";
        req.session.user = resApi.data;
        req.session.accessToken = resApi.access_token;

        res.status(200).json({
          status: true,
          msg: resApi.msg,
          data: resApi.data,
          access_token: resApi.access_token,
        });
      } else {
        res.status(400).json({
          status: false,
          msg: resApi.msg,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({
        status: false,
        msg: ERROR_AUTH.LOGIN_FAIL,
      });
    }
  },
  me: async (req, res) => {
    try {
      res.render("pages/auth/me");
    } catch (e) {
      res.status(500).json({
        status: false,
        msg: e.message,
      });
    }
  },
  logOut: async (req, res) => {
    try {
      //destroy session
      req.session.destroy((err) => {
        res.redirect("/auth/login");
      });
    } catch (e) {
      res.status(500).json({
        status: false,
        msg: e.message,
      });
    }
  },
};
