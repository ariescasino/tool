"use strict";

const dotenv = require('dotenv');
const assert = require('assert');
const path = require('path');

// environment file error should crash whole process
const ENV_FILE_PATH = path.resolve(".env");
const isEnvFound = dotenv.config({ path: ENV_FILE_PATH });
if (isEnvFound.error) {
    throw new Error("Cannot find .env file.");
}

const {
    ENV_ENVIROMENT,
    PORT,
    SESSION_SECRET,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
    SITE_URL,
    MAIN_API
} = process.env;

assert(ENV_ENVIROMENT, "ENV_ENVIROMENT configuration is required.");
assert(PORT, "PORT configuration is required.");
assert(SESSION_SECRET, "SESSION_SECRET configuration is required.");
assert(SITE_URL, "SITE_URL configuration is required.");
assert(MAIN_API, "MAIN_API configuration is required.");

module.exports = {
    ENV_ENVIROMENT,
    PORT,
    SESSION_SECRET,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
    SITE_URL,
    MAIN_API,
}