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
  BaccaratGetLiveStream: async (req, res) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://linknayduoc.fun/result4.json',
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
        }
      };
      axios.request(config)
        .then((response) => {
          res.send(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  },
  BaccaratStream: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        title: "Baccarat",
        config,
        session,
        helpers,
        location: "game-baccarat",
      };
      res.render("pages/game/baccarat_stream", {
        dataPage
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  Baccarat: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        title: "Baccarat",
        config,
        session,
        helpers,
        location: "game-baccarat",
      };
      res.render("pages/game/baccarat", {
        dataPage
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  XocdiaGetLiveStream: async (req, res) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://linknayduoc.fun/result.json',
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
        }
      };
      axios.request(config)
        .then((response) => {
          res.send(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  },
  XocdiaStream: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        title: "Xocdia",
        config,
        session,
        helpers,
        location: "game-xocdia",
      };
      res.render("pages/game/xocdia_stream", {
        dataPage
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  Xocdia: async (req, res) => {
    try {
      const session = req.session;
      const dataPage = {
        title: "Xóc Đĩa",
        config,
        session,
        helpers,
        location: "game-xocdia",
      };
      res.render("pages/game/xocdia", {
        dataPage
      });
    } catch (e) {
      console.log(e);
      res.status(200).json({
        status: false,
        msg: e.message,
      });
    }
  },
  launchGame: async (req, res) => {
    const session = req.session;
    const dataPage = {
      title: "Wait launching...",
      config,
      session,
      helpers,
      location: "launch-game",
    };

    try {
      const { id } = req.params;
      const { code, platform } = req.query;

      if (!id || !code) {
        return res
          .status(200)
          .json({ status: false, msg: "Error Missing Params!" });
      }

      await axios({
        method: "get",
        url: `${config.MAIN_API}/api/game/launchgame/${id.toUpperCase()}?code=${code}`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
        .then((resp) => {
          const resApi = resp.data;
          console.log(resApi);
          if (resApi.status) {
            res.render("pages/game/launchgame", {
              dataPage,
              dataApi: resApi.data,
              error: null,
            });
          } else {
            res.render("pages/game/launchgame", {
              dataPage,
              dataApi: null,
              error: resApi.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err.message);
          res.render("pages/game/launchgame", {
            dataPage,
            dataApi: null,
            error: err.message,
          });
        });
    } catch (e) {
      console.log(e);
      res.render("pages/game/launchgame", {
        dataPage,
        dataApi: null,
        error: e.message,
      });
    }
  },
};
