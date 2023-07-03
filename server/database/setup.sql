DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS token;

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
    short_description VARCHAR(500) UNIQUE NOT NULL,
    book_cover VARCHAR(500),
    borrow_date DATE,
    return_date DATE,
    PRIMARY KEY (book_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

INSERT INTO book (title, author, genre, short_description)
VALUES
    ('The Girl with the Dragon Tattoo', 'Stieg Larsson', 'Thriller',  'A journalist investigates a decades-old disappearance with the help of a computer hacker.'),
    ('The Da Vinci Code', 'Dan Brown', 'Thriller', 'A symbologist unravels a religious conspiracy while on a quest for a hidden artifact.'),
    ('The Silent Patient', 'Alex Michaelides', 'Thriller', 'A psychotherapist tries to unravel the truth behind a woman''s mysterious silence.'),
    ('Gone Baby Gone', 'Dennis Lehane', 'Thriller', 'Two private investigators search for a missing girl in Boston''s seedy underworld.'),
    ('The Girl Before', 'JP Delaney', 'Thriller', 'Two women, living in the same house, are caught in a web of dark secrets.'),
    ('The Woman in the Window', 'A.J. Finn', 'Thriller', 'An agoraphobic woman witnesses a crime in her neighbor''s house.'),
    ('The Couple Next Door', 'Shari Lapena', 'Thriller', 'A couple''s infant goes missing during a dinner party, leading to shocking revelations.'),
    ('The Girl on the Bridge', 'James Hayman', 'Thriller', 'A detective investigates a series of murders with a chilling connection to her past.'),
    ('Sharp Objects', 'Gillian Flynn', 'Thriller', 'A journalist returns to her hometown to cover the murder of two young girls.'),
    ('The Silent Corner', 'Dean Koontz', 'Thriller', 'A woman uncovers a dangerous conspiracy involving mind-altering technology.'),
    ('The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 'Classic Detective', 'Sherlock Holmes solves intriguing mysteries in Victorian England.'),
    ('Murder on the Orient Express', 'Agatha Christie', 'Classic Detective', 'Detective Hercule Poirot investigates a murder aboard a luxurious train.'),
    ('The Maltese Falcon', 'Dashiell Hammett', 'Classic Detective', ' Private detective Sam Spade gets entangled in a web of deception surrounding a valuable statuette.'),
    ('The Big Sleep', 'Raymond Chandler', 'Classic Detective', 'Hard-boiled detective Philip Marlowe is hired to solve a case involving blackmail and murder.'),
    ('Gorky Park', 'Martin Cruz Smith', 'Classic Detective', 'Detective Arkady Renko investigates a triple murder in Moscow''s Gorky Park.'),
    ('The Hound of the Baskervilles', 'Arthur Conan Doyle', 'Classic Detective', 'Sherlock Holmes faces a legendary supernatural beast on the misty moors of Dartmoor.'),
    ('The Adventures of Father Brown', 'G.K. Chesterton', 'Classic Detective', 'Father Brown, a priest with a knack for solving crimes.'),
    ('Rebecca', 'Daphne du Maurier','Classic Detective', 'A young woman becomes entangled in the dark secrets of her husband''s mysterious first wife.'),
    ('The No. 1 Ladies'' Detective Agency', 'Alexander McCall Smith', 'Classic Detective', 'Precious Ramotswe opens a detective agency in Botswana, solving cases with wit and compassion.'),
    ('The Moonstone', 'Wilkie Collins', 'Classic Detective', 'The theft of a valuable diamond leads to a captivating investigation filled with twists and turns.'),
    ('The Wedding Date', 'Jasmine Guillory',' Romance','A fake dating turned real romance.'),
    ('The Hating Game', 'Sally Thorne', 'Romance', 'Office rivals discover unexpected chemistry.'),
    ('Me Before You', 'Jojo Moyes', 'Romance', 'A poignant love story between two unlikely individuals.'),
    ('The Notebook', 'Nicholas Sparks', 'Romance',  'A tale of enduring love and heartbreak.'),
    ('Outlander', 'Diana Gabaldon', 'Romance', 'Epic historical romance with time travel elements.'),
    ('The Rosie Project', 'Graeme Simsion','Romance', 'A quirky love story about an unconventional couple.'),
    ('Eleanor & Park', 'Rainbow Rowell', 'Romance',  'A young adult love story set in the 1980s.'),
    ('The Fault in Our Stars', 'John Green', 'Romance',  'A heartfelt story of love and loss.'),
    ('The Time Traveler''s Wife', 'Audrey Niffenegger', 'Romance', 'A unique love story across time and space.'),
    ('One Day', 'David Nicholls', 'Romance', 'Chronicles the lives of two characters on the same date each year.'),
    ('Where the Wild Things Are', 'Maurice Sendak', 'Kids', 'Imaginative adventure in a world of wild creatures.'),
    ('The Chronicles of Narnia', 'C.S. Lewis', 'Kids', 'A collection of fantasy novels set in the magical realm of Narnia.'),
    ('The Very Hungry Caterpillar', 'Eric Carle', 'Kids', 'Colorful picture book following the journey of a caterpillar.'),
    ('Charlie and the Chocolate Factory','Roald Dahl', 'Kids', 'Exciting tour of a chocolate factory with unexpected surprises.'),
    ('The Secret Garden', 'Frances Hodgson Burnett', 'Kids', 'Story of a young girl''s discovery of a hidden garden.'),
    ('Diary of a Wimpy Kid', 'Jeff Kinney', 'Kids', 'Hilarious journal entries of a middle-schooler.'),
    ('The Cat in the Hat', 'Dr. Seuss', 'Kids', 'Classic rhyming tale of mischief caused by a mischievous cat.'),
    ('Goodnight Moon',  'Margaret Wise Brown', 'Kids',  'Bedtime story with soothing rhythm and beautiful illustrations.'),
    ('The Little Prince', 'Antoine de Saint-Exupéry', 'Kids', 'A philosophical tale about friendship and imagination.'),
    ('The BFG', 'Roald Dahl', 'Kids', 'Adventure with a friendly giant who captures dreams.'),
    ('The Hobbit', 'J.R.R. Tolkien', 'Action/Adventure', 'A hobbit who embarks on a journey to reclaim a treasure guarded by a dragon.'),
    ('Jurassic Park' , 'Michael Crichton', 'Action Adventure', 'Dinosaurs unleashed in a theme park.'),
    ('The Bourne Identity', 'Robert Ludlum', 'Action Adventure', 'An amnesiac agent on the run.'),
    ('Treasure Island', 'Robert Louis Stevenson', 'Action Adventure', 'Pirates, treasure, and high-sea adventures.'),
    ('The Hunger Games', 'Suzanne Collins', 'Action Adventure', 'A fight for survival in a dystopian society.'),
    ('The Adventures of Tom Sawyer', 'Mark Twain', 'Action Adventure', 'A mischievous boy''s escapades along the Mississippi River.'),
    ('The Maze Runner', 'James Dashner', 'Action Adventure', 'A group of teenagers trapped in a deadly maze.'),
    ('Ready Player One', 'Ernest Cline', 'Action Adventure', 'A virtual reality treasure hunt.'),
    ('The Count of Monte Cristo', 'Alexandre Dumas', 'Action Adventure', 'Revenge and redemption in 19th-century France.'),
    ('Ender''s Game', 'Orson Scott Card', 'Action Adventure', 'Child prodigies trained to save the world from an alien invasion.');


CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
