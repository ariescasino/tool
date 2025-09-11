const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const MessageController = require("@HttpControllers/MessageController");

router.get("/", (req, res) => {
  MessageController.listMessage(req, res);
});

router.post("/create", (req, res) => {
  MessageController.createMessage(req, res);
});

module.exports = router;
