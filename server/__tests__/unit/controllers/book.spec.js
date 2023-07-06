const booksController = require("../../../controllers/book");
const Book = require("../../../models/Book");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

describe("books controller", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("index", () => {
    test("it returns snacks with a 200 status code", async () => {
      let books = [
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
      ];
      jest.spyOn(Book, "getAll").mockResolvedValue(books);
      await booksController.index(null, mockRes);
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(books);
    });

    describe("show", () => {
      test("it returns a book with a 200 status code", async () => {
        let testBook = {
          book_id: 2,
          user_id: 1,
          title: "Harry Potter 2",
          author: "J.K. Rowling",
          genre: "fantasy",
          short_description: "Harry potter book 2",
          book_cover: "picture of the book 2",
          borrow_date: "06/07/2023",
          return_date: "20/07/2023",
        };

        jest.spyOn(Book, "getOneByTitle").mockResolvedValue(new Book(testBook));

        const mockReq = { params: { name: "Harry Potter 2" } };
        await booksController.show(mockReq, mockRes);
        expect(mockStatus).toHaveBeenCalledWith(200);
        expect(mockJson).toHaveBeenCalledWith(new Book(testBook));
      });
    });
  });
});
