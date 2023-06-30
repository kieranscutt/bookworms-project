const { Router } = require("express");

const bookController = require("../controllers/book");

const bookRouter = Router();

bookRouter.get("/", bookController.index);
bookRouter.get("/:id", bookController.show);
bookRouter.post("/", bookController.create);
bookRouter.delete("/:id", bookController.destroy);
bookRouter.patch("/:id", bookController.update);

module.exports = bookRouter;
