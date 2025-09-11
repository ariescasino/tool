const { ERROR_PAGE } = require('@Helpers/contants');
const router = require('express').Router();
const middware = require('@Middwares/Authenticate');
const middware2 = require("@Middwares/BalanceUpdate");
const AuthController = require('@HttpControllers/AuthController');

router.get('/', (req, res) => {
    AuthController.index(req, res);
});

router.get('/login', (req, res) => {
    AuthController.login(req, res);
});

router.post('/login', (req, res) => {
    AuthController.loginPOST(req, res);
});

router.get('/register', (req, res) => {
    AuthController.register(req, res);
});

router.post('/register', (req, res) => {
    AuthController.registerPOST(req, res);
});

// router.get('/me', middware, (req, res) => {
//     AuthController.me(req, res);
// });

router.get('/logout', middware, (req, res) => {
    AuthController.logOut(req, res);
});

router.get('/forgot-password', (req, res) => {
    AuthController.forgotPassword(req, res);
});

router.post('/forgot-password', (req, res) => {
    AuthController.forgotPasswordReset(req, res);
});

module.exports = router;