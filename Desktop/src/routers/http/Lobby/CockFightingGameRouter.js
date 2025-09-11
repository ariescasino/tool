const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const GameController = require("@HttpControllers/Lobby/CockFightingGameController");

router.get("/", (req, res) => {
    GameController.index(req, res);
});

module.exports = router;
