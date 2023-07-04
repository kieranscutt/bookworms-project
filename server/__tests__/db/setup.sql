DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password CHAR(60) UNIQUE NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE book (
    book_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    title VARCHAR(100) UNIQUE NOT NULL,
    author VARCHAR(200) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    short_description VARCHAR(2000) UNIQUE NOT NULL,
    book_cover VARCHAR(200) NULL,
    borrow_date DATE,
    return_date DATE,
    PRIMARY KEY (book_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO users (first_name, last_name, email, password)
VALUES ('josh', 'murray','email@example.com', 'pass');

INSERT INTO token (user_id, token)
VALUES (1, '123456789123456789123456789123456789')