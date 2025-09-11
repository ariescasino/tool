const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const LiveGameController = require("@HttpControllers/Lobby/LiveGameController");

router.get("/", (req, res) => {
    LiveGameController.index(req, res);
});

module.exports = router;
