const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const UserController = require("@HttpControllers/UserController");

router.get("/", (req, res) => {
  UserController.listUser(req, res);
});

module.exports = router;
