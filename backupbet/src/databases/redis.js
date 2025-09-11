"use strict";
require("dotenv").config();
const assert = require("assert");
const asyncRedis = require("async-redis");

const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = process.env;

assert(REDIS_HOST, "REDIS_HOST configuration is required.");
assert(REDIS_PORT, "REDIS_PORT configuration is required.");
assert(REDIS_PASSWORD, "REDIS_PASSWORD configuration is required.");

// create and connect redis client to local instance.
const redisClient = asyncRedis.createClient({
  url: `redis://${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
});

redisClient.on("connect", () => {
  console.log(`>>> Connect Redis Server: ${REDIS_HOST} => Success!`);
});
redisClient.on("message", (channel, message) => { });
redisClient.on("error", (error) => {
  console.log(`>>> Redis : ${error}`);
});

module.exports = {
  set: async (key, value) => {
    await redisClient.set(key, JSON.stringify(value));
    //await redisClient.quit();
  },
  setex: async (key, time, value) => {
    await redisClient.setex(key, time, JSON.stringify(value));
    //await redisClient.quit();
  },
  get: async (key) => {
    let exportData;
    const data = await redisClient.get(key);
    exportData = JSON.parse(data);
    //redisClient.quit();
    return exportData;
  },
  delete: async (key) => {
    await redisClient.del(key);
    //await redisClient.quit();
  }
};
