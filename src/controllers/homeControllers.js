const connection = require("../config/Database");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require("../services/usersServices");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  // console.log(results);
  return res.render("home", { listUsers: results });
};

const createUser = async (req, res) => {
  const { email, name, city } = req.body;
  const [results, fields] = await connection.query("INSERT INTO Users (email, name, city) VALUES (?, ?, ?);", [
    email,
    name,
    city,
  ]);
  return res.send("Created new User");
};

const getCreateUser = (req, res) => {
  return res.render("create-user");
};

const getUpdate = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  return res.render("edit-user", { userId: user });
};

const updateUser = async (req, res) => {
  const { email, name, city, id } = req.body;
  console.log(`email: ${email} ,name: ${name} ,city: ${city}, userId: ${id}`);
  await updateUserById(email, name, city, id);
  return res.redirect("/");
};
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  return res.render("delete-user", { userId: user });
};

const postHandleRemoveDeleteUser = async (req, res) => {
  const id = req.body.id;
  await deleteUserById(id);
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  createUser,
  getCreateUser,
  getUpdate,
  updateUser,
  deleteUser,
  postHandleRemoveDeleteUser,
};
