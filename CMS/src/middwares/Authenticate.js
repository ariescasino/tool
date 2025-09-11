const qs = require("qs");
const axios = require("axios");
const config = require("@Config");
const { ERROR_AUTH } = require("@Helpers/contants");

module.exports = async (req, res, next) => {
  try {
    const session = req.session;

    // save last url
    const stringUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    session.lastUrl !== stringUrl
      ? (session.lastUrl =
          typeof session.currentUrl !== "undefined" ? session.currentUrl : "")
      : "";
    session.currentUrl = stringUrl;

    if (session.isLogin && session.accessToken) {
      const requestApi = await axios({
        method: "get",
        url: `${config.API_SERVER}/auth/me`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });
      const resApi = requestApi.data;
      if (resApi.status) {
        session.isLogin = true;
        session.user = resApi.user;
        session.accessToken = resApi.access_token;
        next();
      } else {
        res.redirect("/auth/login");
      }
    } else {
      res.redirect("/auth/login");
    }
  } catch (e) {
    res.redirect("/auth/login");
  }
};
