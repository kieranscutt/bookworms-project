const { Router } = require("express");

const bookController = require("../controllers/book");

const bookRouter = Router();

bookRouter.get("/", bookController.index);
bookRouter.get("/:name", bookController.show);
bookRouter.patch("/:name", bookController.update);

module.exports = bookRouter;
