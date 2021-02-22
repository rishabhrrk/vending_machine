require("dotenv").config();

const express = require("express");
const app = express();
const AdminRoutes = require("./Routes/AdminRoutes");
const VendingRoutes = require("./Routes/VendingRoutes");
const DB = require("./Utils/Database");

async function initialize() {
  app.use(express.json());
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use("/admin", AdminRoutes);
  app.use("/vending", VendingRoutes);
  DB.initialize();
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
}

initialize();
