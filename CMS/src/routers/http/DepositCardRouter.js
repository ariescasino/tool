const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const DepositCardController = require("@HttpControllers/DepositCardController");

router.get("/", (req, res) => {
    DepositCardController.listDeposit(req, res);
});

module.exports = router;
