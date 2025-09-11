const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const SlotGameController = require("@HttpControllers/Lobby/SlotGameController");

router.get("/", (req, res) => {
    SlotGameController.index(req, res);
});

router.get("/:product", (req, res) => {
    SlotGameController.product(req, res);
});

module.exports = router;
