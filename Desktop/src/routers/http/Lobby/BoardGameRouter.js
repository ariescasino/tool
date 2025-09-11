const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const BoardGameController = require("@HttpControllers/Lobby/BoardGameController");

router.get("/", (req, res) => {
    BoardGameController.index(req, res);
});

router.get("/:product", (req, res) => {
    BoardGameController.product(req, res);
});

module.exports = router;
