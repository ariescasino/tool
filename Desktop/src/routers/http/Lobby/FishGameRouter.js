const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const FistGameController = require("@HttpControllers/Lobby/FistGameController");

router.get("/", (req, res) => {
    FistGameController.index(req, res);
});

router.get("/list", (req, res) => {
    FistGameController.gameList(req, res);
});

module.exports = router;
