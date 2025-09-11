"use strict";
require("dotenv").config();
const assert = require("assert");
const Sequelize = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = process.env;

assert(MYSQL_HOST, "MYSQL_HOST configuration is required.");
assert(MYSQL_PORT, "MYSQL_PORT configuration is required.");
assert(MYSQL_USERNAME, "MYSQL_USERNAME configuration is required.");
assert(MYSQL_PASSWORD, "MYSQL_PASSWORD configuration is required.");
assert(MYSQL_DATABASE, "MYSQL_DATABASE configuration is required.");

const connection = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  {
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT),
    dialect: "mysql",
    dialectOptions: {},
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    timezone: "+07:00",
    //logging: (str) => console.log(str),
    logging: () => { },
    define: {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: true
    }
  }
);

module.exports = connection;
