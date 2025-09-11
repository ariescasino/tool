require('module-alias/register');
require('dotenv').config();

const ConsoleExporter = (port, env_enviroment) => {
    console.log(">>> Client is running at port %d in %s mode", port, env_enviroment);
    console.log(">>> Press CTRL-C to stop\n");
}


// load config env
const config = require('@Config');
// load express handle
const app = require('@App');

/**
 * Start Express server.
 */
app.listen(config.PORT, () => {
    console.log("🚀 ~ file: server.js:19 ~ app.listen ~ config:", config)
    ConsoleExporter(config.PORT, config.ENV_ENVIROMENT);
});