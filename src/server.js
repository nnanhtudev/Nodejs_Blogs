require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 3000;

//config template engine
configViewEngine(app);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
