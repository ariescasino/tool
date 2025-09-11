const { ERROR_PAGE } = require("@Helpers/contants");
const router = require("express").Router();
const middware = require("@Middwares/Authenticate");
const middware2 = require("@Middwares/BalanceUpdate");
const middwareAgency = require("@Middwares/AuthenticateAgency");
const AccountController = require("@HttpControllers/AccountController");

// router.get('/login', (req, res) => {
//     AuthController.login(req, res);
// });

router.get("/profile", middware, (req, res) => {
  AccountController.profile(req, res);
});

router.get("/security", middware, (req, res) => {
  AccountController.security(req, res);
});

router.get("/deposit", middware, (req, res) => {
  AccountController.deposit(req, res);
});

router.get("/withdraw", middware, (req, res) => {
  AccountController.withdraw(req, res);
});

router.get("/wallet-transfer", middware, (req, res) => {
  AccountController.walletTransfer(req, res);
});

router.get("/inbox", middware, (req, res) => {
  AccountController.inbox(req, res);
});

router.get("/finan-history", middware, (req, res) => {
  AccountController.transactionHistory(req, res);
});

router.get("/game-history", middware, (req, res) => {
  AccountController.gameHistory(req, res);
});

router.get("/vip", middware, (req, res) => {
  AccountController.vipInfo(req, res);
});

router.get("/agency", middware, middwareAgency, (req, res) => {
  AccountController.agency(req, res);
});

router.post("/register", (req, res) => {
  AccountController.registerPOST(req, res);
});

// router.get('/me', middware, (req, res) => {
//     AccountController.me(req, res);
// });

router.get("/logout", middware, (req, res) => {
  AccountController.logOut(req, res);
});

router.get("/logout", middware, (req, res) => {
  AccountController.logOut(req, res);
});

router.get("/payment-refund", middware, (req, res) => {
  AccountController.paymentRefund(req, res);
});


module.exports = router;
