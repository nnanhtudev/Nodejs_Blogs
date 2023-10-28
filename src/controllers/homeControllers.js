const getHomePage = (req, res) => {
  res.send("Hello World!");
};

const test = (req, res) => {
  res.render("test");
};

module.exports = { getHomePage, test };
