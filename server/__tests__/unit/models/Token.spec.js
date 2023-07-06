const Token = require("../../../models/token");
const db = require("../../../database/connect");

describe("Token", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("getOneById", () => {
    test("it resolves with a token on successful db query", async () => {
      let tokenData = {
        token_id: 1,
        user_id: 1,
        token: "123456789",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [tokenData] });

      const result = await Token.getOneById(1);
      console.log("banana", result);

      expect(result).toBeInstanceOf(Token);
      expect(result.token_id).toBe(1);
    });
  });

  describe("getOneByToken", () => {
    test("it resolves with a token on successful db query", async () => {
      let tokenData = {
        token_id: 1,
        user_id: 1,
        token: "123456789",
      };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [tokenData] });

      const result = await Token.getOneByToken("123456789");
      console.log("banana", result);

      expect(result).toBeInstanceOf(Token);
      expect(result.token).toBe("123456789");
    });
  });

  describe("create", () => {
    test("it resolves with a token on successful db query", async () => {
      let tokenData = {
        token_id: 1,
        user_id: 1,
        token: "123456789",
      };

      jest
        .spyOn(db, "query")
        .mockResolvedValueOnce({ rows: [{ ...tokenData }] });
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [tokenData] });

      const result = await Token.create(tokenData);
      expect(result).toHaveProperty("user_id");
    });
  });
});
