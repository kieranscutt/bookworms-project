const db = require("../database/connect");

class Book {
  constructor({
    book_id,
    user_id,
    title,
    author,
    genre,
    description,
    book_cover,
    borrow_date,
    return_date,
  }) {
    this.book_id = book_id;
    this.user_id = user_id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
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

  async update(user_id, borrow_date, return_date) {
    // Update book object with new values
    this.user_id = user_id;
    this.borrow_date = borrow_date;
    this.return_date = return_date;
    console.log("hello");
    const response = await db.query(
      "UPDATE book SET user_id = $1, borrow_date = $2, return_date = $3 WHERE LOWER(title) = $4;",
      [user_id, borrow_date, return_date, this.title]
    );
    console.log("hello");
    if (response.rows.length != 1) {
      throw new Error("Unable to update borrowing information. ");
    }
    return new Book(response.rows[0]);
  }
}

module.exports = Book;
