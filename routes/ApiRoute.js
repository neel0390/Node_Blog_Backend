const express = require("express");
const apidata = require("../api/apidata");

const data = express.Router();
data.route("/").get(apidata.apiController);

module.exports = data;
