const fs = require("fs");
require("dotenv").config();
const db = require("./connect");

// const path = require("path");

const sql = fs.readFileSync("./database/setup.sql").toString();

db.query(sql)
  .then((data) => console.log("Set-up complete."))
  .catch((error) => console.log(error));
