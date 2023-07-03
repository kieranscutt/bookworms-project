const { Router } = require("express");

const bookController = require("../controllers/book");

const bookRouter = Router();

bookRouter.get("/", bookController.index);
bookRouter.get("/:id", bookController.show);
bookRouter.patch("/:id", bookController.update);

module.exports = bookRouter;
