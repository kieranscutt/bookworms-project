const Book = require("../../../models/Book");
const db = require("../../../database/connect");

describe("Book", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("getAll", () => {
    test("it resolves with books on successful db query", async () => {
      jest.spyOn(db, "query").mockResolvedValueOnce({
        rows: [
          {
            book_id: 1,
            user_id: 1,
            title: "Harry Potter",
            author: "J.K. Rowling",
            genre: "fantasy",
            short_description: "Harry potter book",
            book_cover: "picture of the book",
            borrow_date: "06/07/2023",
            return_date: "20/07/2023",
          },
          {
            book_id: 2,
            user_id: 1,
            title: "Harry Potter 2",
            author: "J.K. Rowling",
            genre: "fantasy",
            short_description: "Harry potter book 2",
            book_cover: "picture of the book 2",
            borrow_date: "06/07/2023",
            return_date: "20/07/2023",
          },
          {
            book_id: 3,
            user_id: 2,
            title: "Harry Potter 3",
            author: "J.K. Rowling",
            genre: "fantasy",
            short_description: "Harry potter book 3",
            book_cover: "picture of the book 3",
            borrow_date: "06/07/2023",
            return_date: "20/07/2023",
          },
        ],
      });

      const all = await Book.getAll();
      expect(all).toHaveLength(3);
    });
  });

  describe("getOneByTitle", () => {
    test("it resolves with a book on successful db query", async () => {
      let bookData = {
        book_id: 1,
        user_id: 1,
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "fantasy",
        short_description: "Harry potter book",
        book_cover: "picture of the book",
        borrow_date: "06/07/2023",
        return_date: "20/07/2023",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [bookData] });

      const result = await Book.getOneByTitle("Harry Potter");
      console.log("banana", result);

      expect(result).toBeInstanceOf(Book);
      expect(result.title).toBe("Harry Potter");
    });
  });
});
