const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const WithdrawController = require("@HttpControllers/WithdrawController");

router.get("/", (req, res) => {
  WithdrawController.listWithdraw(req, res);
});

module.exports = router;
