const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const SportGameController = require("@HttpControllers/Lobby/SportGameController");

router.get("/", (req, res) => {
    SportGameController.index(req, res);
});

module.exports = router;
