const { ERROR_PAGE } = require("@Helpers/contants");
const config = require("@Config");
const router = require("express").Router();
const AnnouncementController = require("@HttpControllers/AnnouncementController");

router.get("/", (req, res) => {
  AnnouncementController.listAnnouncement(req, res);
});

router.post("/create", (req, res) => {
  AnnouncementController.Action.create(req, res);
});

module.exports = router;
