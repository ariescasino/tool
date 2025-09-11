const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const BankDepositController = require("@HttpControllers/BankDepositController");

router.get("/", (req, res) => {
  BankDepositController.listBankDeposit(req, res);
});

module.exports = router;
