const userController = require('../../../controllers/user');
const User = require('../../../models/User');
const Token = require("../../../models/token");

const pg = require('pg');
jest.mock('pg')

const db = require('../../db/connect')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }));
const mockRes = { status: mockStatus };

describe('user controller', () => {
  beforeEach(() => jest.clearAllMocks());
  afterAll(() => jest.resetAllMocks());

  describe('register', () => {
    test('returns new user data with status 201', async () => {
      const mockUser = {
        firstname: "Josh",
        lastname: "Murray",
        email: "email@example.com",
        password: "pass"
      };

      jest.spyOn(User, 'create')
        .mockResolvedValue(new User(mockUser));

      const mockReq = {
        body: mockUser
      };

      await userController.register(mockReq, mockRes);

      
      expect(mockStatus).toHaveBeenCalledWith(201);
      
    });
  });

  describe('login', () => {
    test('successfully logs in with status 200', async () => {
      const mockUser = {
        id: 1,
        firstname: 'josh',
        lastname: 'murray',
        email: 'email@example.com',
        password: 'pass'
      };

      const mockToken = {
        token_id: 1,
        user_id: 1,
        token: '123456789123456789123456789123456789'
      };

      jest.spyOn(User, 'getOneByEmail')
        .mockResolvedValue(new User(mockUser)); //creates 'mock' return of user instance (mockUser)

      jest.spyOn(Token, 'create')
        .mockResolvedValue(new Token(mockToken)); //creates 'mock' return of new token with  id, userid and token

      const mockReq = {
        body: {
          email: 'email@example.com',
          password: 'pass'
        }
      }; //create mock request containing email and password

      await userController.login(mockReq, mockRes); //call login function with mock request, 

      expect(User.getOneByEmail).toHaveBeenCalledWith(mockReq.body.email);
      //expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockSend).toHaveBeenCalledWith({
        authenticated: true,
        token: new Token(mockToken)
      });
    });
  });
});