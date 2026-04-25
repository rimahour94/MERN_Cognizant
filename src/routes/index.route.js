const express = require("express");
const userroute = require("./user.route");

const route = express.Router();

route.use("/user", userroute);

module.exports = route;
