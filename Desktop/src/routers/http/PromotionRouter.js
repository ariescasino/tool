const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const middware2 = require("@Middwares/BalanceUpdate");
const PromotionController = require("@HttpControllers/PromotionController");

router.get("/", (req, res) => {
    PromotionController.default(req, res);
});

module.exports = router;
