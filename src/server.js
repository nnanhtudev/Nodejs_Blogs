require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
// get the client
const mysql = require("mysql2");

const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 3000;

//config template engine
configViewEngine(app);

app.use("/", webRoutes);
//test connecting to server

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
// simple query
connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
