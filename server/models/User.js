const db = require("../database/connect");

class User {
  constructor({ user_id, name, email, password }) {
    this.id = user_id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async getOneById(id) {
    const response = await db.query(
      "SELECT * FROM Library_Users WHERE user_id = $1",
      [id]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate user.");
    }
    return new User(response.rows[0]);
  }

  static async getOneByUsername(name) {
    const response = await db.query(
      "SELECT * FROM Library_Users WHERE name = $1",
      [name]
    );
    if (response.rows.length != 1) {
      throw new Error("Unable to locate user.");
    }
    return new User(response.rows[0]);
  }

  static async create(data) {
    const { firstname, lastname, email, password } = data;
    let response = await db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING user_id;",
      [firstname, lastname, email, password]
    );
    const newId = response.rows[0].user_id;
    const newUser = await User.getOneById(newId);
    return newUser;
  }
}

module.exports = User;
