const express = require("express");
const { userCreation } = require("../controller/user.controller");
const userroute = express.Router();

userroute.post("/create", userCreation);

module.exports = userroute;
