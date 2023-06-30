const { Router } = require("express");

const bookController = require("../controllers/book");

const bookRouter = Router();

bookRouter.get("/", bookController.index);
countryRouter.get("/:id", bookController.show);
countryRouter.post("/", bookController.create);
countryRouter.delete("/:id", bookController.destroy);
countryRouter.patch("/:id", bookController.update);

module.exports = bookRouter;
