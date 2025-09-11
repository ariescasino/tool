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

router.get("/board/:productType", (req, res) => {
    GameLobbyController.board(req, res);
});

router.get("/live", (req, res) => {
    GameLobbyController.live(req, res);
});

router.get("/sport", (req, res) => {
    GameLobbyController.sport(req, res);
});

router.get("/lottery", (req, res) => {
    GameLobbyController.lottery(req, res);
});

router.get("/cockfighting", (req, res) => {
    GameLobbyController.cockfighting(req, res);
});

router.get("/fish", (req, res) => {
    GameLobbyController.fish(req, res);
});

router.get("/chess/:productType", (req, res) => {
    GameLobbyController.chess(req, res);
});

module.exports = router;
