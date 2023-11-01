const express = require("express");
const {
  getHomePage,
  createUser,
  getCreateUser,
  getUpdate,
  updateUser,
  deleteUser,
  postHandleRemoveDeleteUser,
} = require("../controllers/homeControllers");

const routes = express.Router();
// SETTINGS ROUTERS
routes.get("/", getHomePage);
routes.get("/create-user", getCreateUser);
routes.get("/update-user/:id", getUpdate);
routes.post("/create-user", createUser);
routes.post("/update-user", updateUser);
routes.post("/delete-user", postHandleRemoveDeleteUser);
routes.post("/delete-user/:id", deleteUser);

module.exports = routes;
