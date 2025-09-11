const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const LotteryGameController = require("@HttpControllers/Lobby/LotteryGameController");

router.get("/", (req, res) => {
    LotteryGameController.index(req, res);
});

module.exports = router;
