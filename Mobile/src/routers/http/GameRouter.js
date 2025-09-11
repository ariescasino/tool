const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const middware2 = require("@Middwares/BalanceUpdate");
const GameController = require("@HttpControllers/GameController");

router.get("/launchgame/:id", middware, (req, res) => {
  GameController.launchGame(req, res);
});

// router.get("/baccarat", middware, (req, res) => {
//   GameController.Baccarat(req, res);
// });

router.get("/baccarat", (req, res) => { // test 
  GameController.Baccarat(req, res);
});
router.get("/baccarat-stream", (req, res) => { // test 
  GameController.BaccaratStream(req, res);
});
router.get("/baccarat-get-stream", (req, res) => {
  GameController.BaccaratGetLiveStream(req, res);
});

router.get("/xocdia", (req, res) => { // test 
  GameController.Xocdia(req, res);
});
router.get("/xocdia-stream", (req, res) => { // test 
  GameController.XocdiaStream(req, res);
});
router.get("/xocdia-get-stream", (req, res) => {
  GameController.XocdiaGetLiveStream(req, res);
});

module.exports = router;
