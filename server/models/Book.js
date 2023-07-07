const db = require("../database/connect");

class Book {
  constructor({
    book_id,
    user_id,
    title,
    author,
    genre,
    short_description,
    book_cover,
    borrow_date,
    return_date,
  }) {
    this.book_id = book_id;
    this.user_id = user_id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.short_description = short_description;
    this.book_cover = book_cover;
    this.borrow_date = borrow_date;
    this.return_date = return_date;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM book;");
    if (response.rows.length === 0) {
      throw new Error("Unable to get books.");
    }
    return response.rows.map((book) => new Book(book));
  }

  static async getOneByTitle(title) {
    const response = await db.query(
      "SELECT * FROM book WHERE LOWER(title) = $1;",
      [title]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate book by title. ");
    }
    return new Book(response.rows[0]);
  }

  async update(data) {
    // Update book object with new values
    const response = await db.query(
      "UPDATE book SET user_id = $1, borrow_date = $2, return_date = $3 WHERE LOWER(title) = $4 RETURNING *;",
      [
        data.user_id,
        data.borrow_date,
        data.return_date,
        this.title.toLowerCase(),
      ]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to update borrowing information. ");
    }
    return new Book(response.rows[0]);
  }
}

module.exports = Book;
