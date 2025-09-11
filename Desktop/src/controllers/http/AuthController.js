const qs = require('qs');
const axios = require('axios');
const config = require('@Config');
const { ERROR_PAGE, ERROR_FORM, ERROR_AUTH, SUCCESS, ERROR_SERVER } = require('@Helpers/contants');
//const { createToken, verifyToken } = require('@Helpers/jwt');
//const { validatePassword } = require('@Helpers/AgentMaster/password');

module.exports = {
    // login: async (req, res) => {
    //     try {
    //         if (req.session.isLogin) {
    //             res.redirect(301, '/agent');
    //         } else {
    //             res.render('Agent/auth/login');
    //         }

    //     } catch (e) {
    //         res.status(500).json({
    //             status: false,
    //             msg: e.message
    //         });
    //     }
    // },
    loginPOST: async (req, res) => {
        try {
            const { username, password, captcha } = req.body;
            if (!username || !password || !captcha) return res.status(200).json({
                status: false,
                msg: ERROR_FORM.MISSING_FIELD
            });
            const requestApi = await axios({
                method: 'post',
                url: `${config.MAIN_API}/api/auth/login`,
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify({
                    "username": username,
                    "password": password,
                    // "captcha": captcha
                })
            });
            const resApi = requestApi.data;
            if (resApi.status) {
                req.session.isLogin = true;
                req.session.role = "user";
                req.session.user = resApi.data;
                req.session.accessToken = resApi.access_token;
                res.status(200).json({
                    status: true,
                    msg: resApi.msg,
                    data: resApi.data,
                    access_token: resApi.access_token
                });
            } else {
                res.status(200).json({
                    status: false,
                    msg: resApi.msg
                });
            }
        } catch (e) {
            console.log(e);
            res.status(200).json({
                status: false,
                msg: ERROR_SERVER.WRONG
            });
        }
    },
    register: async (req, res) => {
        try {
            const dataPage = {
                title: '',
                config,
                session: req.session
            };

            if (req.session.isLogin) {
                res.redirect('/');
            } else {
                res.render('pages/auth/register', {
                    dataPage
                })
            }
        } catch (e) {
            console.log(e);
            res.status(200).json({
                status: false,
                msg: ERROR_SERVER.WRONG
            });
        }
    },
    registerPOST: async (req, res) => {
        try {
            const refCode = (req.body.refcode) ? req.body.refcode : null;
            const requestApi = await axios({
                method: 'post',
                url: `${config.MAIN_API}/api/auth/register`,
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify({
                    "name": req.body.name,
                    "username": req.body.username,
                    "refcode": refCode,
                    "email": req.body.email,
                    "phone": req.body.phone,
                    "password": req.body.password,
                })
            });

            const resApi = requestApi.data;

            if (resApi.status) {
                req.session.isLogin = true;
                req.session.role = "user";
                req.session.user = resApi.user;
                req.session.accessToken = resApi.user.token;
                res.status(200).json({
                    status: true,
                    msg: resApi.msg,
                    data: resApi.user,
                    access_token: resApi.user.token
                });
            } else {
                res.status(200).json({
                    status: false,
                    msg: resApi.msg
                });
            }
        } catch (e) {
            console.log(e);
            res.status(200).json({
                status: false,
                msg: ERROR_SERVER.WRONG
            });
        }
    },
    logOut: async (req, res) => {
        try {
            //destroy session
            req.session.destroy((err) => {
                res.redirect('/');
            });
        } catch (e) {
            console.log(e);
            res.status(200).json({
                status: false,
                msg: ERROR_SERVER.WRONG
            });
        }
    },

}