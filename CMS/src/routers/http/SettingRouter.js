const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const SettingController = require("@HttpControllers/SettingController");

router.get("/", (req, res) => {
    SettingController.index(req, res);
});

router.get("/general", (req, res) => {
    SettingController.General(req, res);
});

router.get("/telegram", (req, res) => {
    SettingController.Telegram(req, res);
});

module.exports = router;
