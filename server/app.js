const express = require("express");
const cors = require("cors");

const api = express();

api.use(cors());
api.use(express.json());

api.get("/", (req, res) => {
  res.json({
    name: "Library",
    description: "View a collection of books",
  });
});

module.exports = api;
