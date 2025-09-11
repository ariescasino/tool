const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const middware2 = require("@Middwares/BalanceUpdate");
const VipController = require("@HttpControllers/VipController");

router.get("/", (req, res) => {
    VipController.default(req, res);
});

module.exports = router;
