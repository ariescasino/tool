const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const PromotionController = require("@HttpControllers/PromotionController");

router.get("/", (req, res) => {
    PromotionController.listPromotion(req, res);
});

router.post("/create", (req, res) => {
    PromotionController.Actions.create(req, res);
});

module.exports = router;
