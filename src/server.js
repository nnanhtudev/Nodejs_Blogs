require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/Database");

const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 3000;

//config template engine
configViewEngine(app);

app.use("/", webRoutes);
// simple query
connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  // console.log(fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
