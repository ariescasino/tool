const { ERROR_PAGE } = require("@Helpers/contants");
const { base64String } = require("@Helpers/String");
const router = require("express").Router();
const MainRouter = require("@HttpRouters/MainRouter");
const AuthRouter = require("@HttpRouters/AuthRouter");
const AccountRouter = require("@HttpRouters/AccountRouter");
const GameRouter = require("@HttpRouters/GameRouter");
const GameLobbyRouter = require("@HttpRouters/GameLobbyRouter");
const VipRouter = require("@HttpRouters/VipRouter");
const PromotionRouter = require("@HttpRouters/PromotionRouter");

// Redirect Router
router.get("/Redirect", async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) {
            res.status(200).json({
                status: false,
                error: "Url is empty!"
            });
        } else {
            // const redirectUrl = base64String.Decode(url);
            // res.redirect(redirectUrl);
            res.render("pages/redirect", { url });
        }
    } catch (e) {
        res.status(200).json({
            status: false,
            error: "Url invalid!"
        });
    }
});

router.use("/", MainRouter);
router.use("/auth", AuthRouter);
router.use("/account", AccountRouter);
router.use("/game", GameRouter);
router.use("/lobby", GameLobbyRouter);
router.use("/Promotion", PromotionRouter);
router.use("/vip-privileges", VipRouter);

module.exports = router;
