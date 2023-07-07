const db = require("./connect.js");

const createDbEnv = async () => {
  await db.query(`CREATE TABLE users (
        user_id INT GENERATED ALWAYS AS IDENTITY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) UNIQUE NOT NULL,
        PRIMARY KEY (user_id)
    )`);
};

const populateDbEnv = async () => {
  await db.query(
    "INSERT INTO users (first_name, last_name, email, password) VALUES ('Harry', 'Turner-Burns', 'harry_tb@icloud.com', 'hello')"
  );
};

const destroyDbEnv = async () => {
  await db.query("DROP TABLE IF EXISTS users");
};

module.exports = { createDbEnv, populateDbEnv, destroyDbEnv };
