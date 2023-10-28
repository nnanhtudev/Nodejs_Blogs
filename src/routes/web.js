const express = require("express");
const { getHomePage, test } = require("../controllers/homeControllers");

const routes = express.Router();
// SETTINGS ROUTERS
routes.get("/", getHomePage);
routes.get("/test", test);

module.exports = routes;
