const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const GameLobbyController = require("@HttpControllers/GameLobbyController");

router.get("/", (req, res) => {
    GameLobbyController.index(req, res);
});

router.get("/slot/:productType", (req, res) => {
    GameLobbyController.slot(req, res);
});

router.get("/fish/:productType", (req, res) => {
    GameLobbyController.fish(req, res);
});

router.get("/chess/:productType", (req, res) => {
    GameLobbyController.chess(req, res);
});

module.exports = router;
