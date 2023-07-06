const User = require("../../../models/User");
const db = require("../../../database/connect");

describe("User", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("getOneById", () => {
    test("it resolves with a user on successful db query", async () => {
      let userData = {
        user_id: 1,
        first_name: "Harry",
        last_name: "Turner-Burns",
        email: "harry_tb@icloud.com",
        password: "hello",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });

      const result = await User.getOneById(1);
      console.log("banana", result);

      expect(result).toBeInstanceOf(User);
      expect(result.id).toBe(1);
    });
  });

  describe("getOneByEmail", () => {
    test("it resolves with a user on successful db query", async () => {
      let userData = {
        user_id: 1,
        first_name: "Harry",
        last_name: "Turner-Burns",
        email: "harry_tb@icloud.com",
        password: "hello",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });

      const result = await User.getOneByEmail("harry_tb@icloud.com");
      console.log("banana", result);

      expect(result).toBeInstanceOf(User);
      expect(result.email).toBe("harry_tb@icloud.com");
    });
  });

  describe("create", () => {
    test("it resolves with a user on successful db query", async () => {
      let userData = {
        user_id: 1,
        first_name: "Harry",
        last_name: "Turner-Burns",
        email: "harry_tb@icloud.com",
        password: "hello",
      };

      jest
        .spyOn(db, "query")
        .mockResolvedValueOnce({ rows: [{ ...userData }] });
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [userData] });

      const result = await User.create(userData);
      expect(result).toHaveProperty("first_name");
    });
  });
});
