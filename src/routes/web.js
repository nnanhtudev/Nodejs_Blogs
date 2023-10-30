const express = require("express");
const { getHomePage, createUser } = require("../controllers/homeControllers");

const routes = express.Router();
// SETTINGS ROUTERS
routes.get("/", getHomePage);
routes.post("/create-user", createUser);

module.exports = routes;
