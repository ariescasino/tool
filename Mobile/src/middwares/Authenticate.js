const qs = require('qs');
const axios = require('axios');
const config = require('@Config');
const { ERROR_AUTH } = require('@Helpers/contants');

module.exports = async (req, res, next) => {
    try {
        const session = req.session;

        if (session.isLogin && session.accessToken) {
            const requestApi = await axios({
                method: 'get',
                url: `${config.MAIN_API}/api/auth/me`,
                headers: {
                    'Authorization': `Bearer ${session.accessToken}`,
                }
            });
            const resApi = requestApi.data;
            if (resApi.status) {
                session.isLogin = true;
                session.user = resApi.user;
                session.accessToken = resApi.access_token;
                next();
            } else {
                res.redirect('/auth');
            }
        } else {
            res.redirect('/auth');
        }
    } catch (e) {
        console.log(e);
        res.redirect('/auth');
    }
}