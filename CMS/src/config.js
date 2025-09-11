"use strict";

const dotenv = require("dotenv");
const assert = require("assert");
const path = require("path");

// environment file error should crash whole process
const ENV_FILE_PATH = path.resolve(".env");
const isEnvFound = dotenv.config({ path: ENV_FILE_PATH });
if (isEnvFound.error) {
  throw new Error("Cannot find .env file.");
}

const { ENV_ENVIROMENT, PORT, SESSION_SECRET, API_SERVER, MAIN_SOCKET } = process.env;

assert(ENV_ENVIROMENT, "ENV_ENVIROMENT configuration is required.");
assert(PORT, "PORT configuration is required.");
assert(SESSION_SECRET, "SESSION_SECRET configuration is required.");
assert(API_SERVER, "API_SERVER configuration is required.");
assert(MAIN_SOCKET, "MAIN_SOCKET configuration is required.");

module.exports = {
  ENV_ENVIROMENT,
  PORT,
  SESSION_SECRET,
  API_SERVER,
  MAIN_SOCKET
};
