const axios = require('axios');
const config = require('@Config');
const redis = require('@Databases/redis');

module.exports = async (req, res, next) => {
    try {
        const session = req.session;
        const requestApi = await axios({
            method: 'get',
            url: `${config.MAIN_API}/api/config/info`,
            headers: {}
        });
        const resApi = requestApi.data;
        if (resApi.status) {
            session.siteConfig = resApi.data;
            //redis.setex(redisKey, 30, resApi.data);
            next();
        } else {
            // redict to maintance page
            next();
        }

        return;
        const redisKey = `site:config`;
        const checkRedis = await redis.get(redisKey);
        if (!checkRedis) {
            const requestApi = await axios({
                method: 'get',
                url: `${config.MAIN_API}/api/config/info`,
                headers: {}
            });
            const resApi = requestApi.data;
            if (resApi.status) {
                session.siteConfig = resApi.data;
                redis.setex(redisKey, 30, resApi.data);
                next();
            } else {
                // redict to maintance page
                next();
            }
        } else {
            session.siteConfig = checkRedis;
            next();
        }
    } catch (e) {
        console.log(e);
    }
}