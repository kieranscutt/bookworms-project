const express = require("express");
const cors = require("cors");


const logRoutes = require("./middleware/logger");
const bookRouter = require("./routers/book");
const userRouter = require("./routers/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logRoutes);

app.get("/", (req, res) => {
  res.json({
    name: "Library",
    description: "Welcome to Florin's Library!",
  });
});

app.use("/books", bookRouter);
app.use("/users", userRouter);

module.exports = app;

