const db = require("../database/connect");

class Book {
  constructor({ book_id, title, author, genre, description, book_cover }) {
    this.book_id = book_id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.book_cover = book_cover;
    //may need to add borrowing keys
  }

  static async getOneById(book_id) {
    const response = await db.query(
      "SELECT * FROM Library_List WHERE book_id = $1;",
      [book_id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate book. ");
    }
    return new Book(response.rows[0]);
  }

  static async getOneByTitle(title) {
    const response = await db.query(
      "SELECT * FROM Library_List WHERE title = $1;",
      [title.toLowerCase()]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate book. ");
    }
    return new Book(response.rows[0]);
  }
}

module.exports = Book;
