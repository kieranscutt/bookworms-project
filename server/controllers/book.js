const Book = require("../models/Book")

async function index (req, res) {
    try {
        const books = await Book.getAll();
        res.json(books)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

async function show (req, res) {
    try {
           const name = req.params.title
           const book = await Book.getOneByName(name);
           res.json(book)
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}






module.exports = { index, show }

