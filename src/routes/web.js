const express = require("express");
const routes = express.Router();

// SETTINGS ROUTERS
routes.get("/", (req, res) => {
  res.send("Hello World!");
});
routes.get("/test", (req, res) => {
  res.render("test");
});

module.exports = routes;
