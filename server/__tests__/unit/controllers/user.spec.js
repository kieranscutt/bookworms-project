const userController = require("../../../controllers/user");
const User = require("../../../models/User");
const Token = require("../../../models/token");

const pg = require("pg");
jest.mock("pg");

const db = require("../../../database/connect");

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn((code) => ({
  send: mockSend,
  json: mockJson,
  end: jest.fn(),
}));
const mockRes = { status: mockStatus };

describe("user controller", () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());

  describe("register", () => {
    test("returns new user data with status 201", async () => {
      const mockUser = {
        firstname: "Josh",
        lastname: "Murray",
        email: "email@example.com",
        password: "pass",
      };

      jest.spyOn(User, "create").mockResolvedValue(new User(mockUser));

      const mockReq = {
        body: mockUser,
      };

      await userController.register(mockReq, mockRes);

      expect(mockStatus).toHaveBeenCalledWith(201);
    });
  });
});
