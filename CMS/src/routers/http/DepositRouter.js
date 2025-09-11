const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const DepositController = require("@HttpControllers/DepositController");

router.get("/", (req, res) => {
  DepositController.listDeposit(req, res);
});

module.exports = router;
