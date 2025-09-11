const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const GameController = require("@HttpControllers/GameController");

router.get("/bet-history", (req, res) => {
  GameController.listBetHistory(req, res);
});

router.get("/bet-history/:id", (req, res) => {
  GameController.listBetHistoryByUser(req, res);
});

// other game
router.get("/baccarat", (req, res) => {
  GameController.Baccarat(req, res);
});

router.get("/baccarat-stream", (req, res) => {
  GameController.BaccaratStream(req, res);
});

router.get("/baccarat-get-stream", (req, res) => {
  GameController.BaccaratGetLiveStream(req, res);
});

module.exports = router;
