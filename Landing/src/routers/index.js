const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    const session = req.session;
    const dataPage = {
      title: "Trang Cá Cược Lớn Nhất",
      session,
      config,
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
