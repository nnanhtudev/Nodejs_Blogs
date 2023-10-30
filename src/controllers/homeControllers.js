const connection = require("../config/Database");
const getHomePage = (req, res) => {
  return res.render("home");
};
const createUser = (req, res) => {
  const { email, name, city } = req.body;
  connection.query(
    `INSERT INTO Users (email, name, city)
      VALUES (?, ?, ?);`,
    [email, name, city],
    function (err, results) {
      res.send("Created new User");
    }
  );
};

module.exports = { getHomePage, createUser };
