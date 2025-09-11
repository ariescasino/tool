const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const config = require("@Config");
const helpers = require("@Helpers/helpers");

router.get("/", (req, res) => {
  try {
    const session = req.session;
    const dataPage = {
      title: session.siteConfig.site_name,
      session,
      helpers,
      config,
      location: "home",
    };
    res.render("index", {
      dataPage: dataPage,
    });
  } catch (e) {
    res.status(500).json({
      status: false,
      msg: e.message,
    });
  }
});

module.exports = router;
