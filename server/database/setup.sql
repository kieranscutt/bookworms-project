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
    short_description VARCHAR(2000) NOT NULL,
    book_cover VARCHAR(200) NULL,
    borrow_date DATE,
    return_date DATE,
    PRIMARY KEY (book_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO book (title, author, genre, short_description, book_cover)
VALUES
    ('The Girl with the Dragon Tattoo', 
    'Stieg Larsson', 
    'Thriller',  
    'In this gripping thriller, a journalist named Mikael Blomkvist finds himself embroiled in a decades-old mystery when he is hired to investigate the disappearance of Harriet Vanger, a member of a powerful Swedish family. With the help of the enigmatic computer hacker Lisbeth Salander, Blomkvist delves deep into the dark secrets of the Vanger family and uncovers a web of corruption, violence, and intrigue. As they unravel the truth, they become entangled in a dangerous game that threatens their lives. This thrilling novel takes readers on a captivating journey through the twisted paths of a cold case investigation, exploring themes of family secrets, power dynamics, and the indomitable strength of the human spirit.',
    'https://covers.openlibrary.org/b/id/13670530-L.jpg'),
    
    ('The Da Vinci Code', 
    'Dan Brown', 
    'Thriller', 
    'In this pulse-pounding thriller, renowned symbologist Robert Langdon finds himself caught in a high-stakes race against time. When a curator is murdered at the Louvre, Langdon becomes the prime suspect and embarks on a perilous journey to unravel a hidden message left by the curator before his death. Joined by cryptologist Sophie Neveu, Langdon discovers a trail of clues that leads them to uncover a shocking religious conspiracy that has been protected for centuries. As they navigate through art, symbols, and historical mysteries, they must stay one step ahead of a powerful and secretive organization that will stop at nothing to protect their secrets. With relentless suspense and captivating plot twists, ''The Da Vinci Code'' keeps readers on the edge of their seats until the final revelation.', 
    'https://covers.openlibrary.org/b/id/10660552-L.jpg'),

    ('The Silent Patient', 
    'Alex Michaelides', 
    'Thriller', 
    'In this psychological thriller, psychotherapist Theo Faber becomes obsessed with uncovering the truth behind the mysterious silence of Alicia Berenson, a renowned painter who shot her husband and has not uttered a word since. Determined to break through Alicias silence and understand the motive behind the crime, Theo delves into her past and discovers a web of dark secrets and hidden traumas. As he unravels the layers of Alicias mind, he becomes entangled in a psychological cat-and-mouse game that blurs the line between sanity and madness. ''The Silent Patien'' is a masterful exploration of the human psyche, filled with twists and turns that will leave readers questioning the nature of truth and the depths of deception.', 
    'https://covers.openlibrary.org/b/id/10152982-L.jpg'),

    ('Gone Baby Gone', 
    'Dennis Lehane', 
    'Thriller', 
    'In the gritty streets of Boston\''s seedy underworld, two private investigators, Patrick Kenzie and Angela Gennaro, are hired to find a missing four-year-old girl named Amanda McCready. As they delve deeper into the case, they uncover a labyrinth of corruption, moral dilemmas, and shocking revelations that lead them to question their own motives and the true meaning of justice. "Gone Baby Gone" is a gripping and morally complex thriller that explores themes of child abduction, societal decay, and the blurred lines between right and wrong. Lehane\''s masterful storytelling keeps readers hooked until the heart-wrenching conclusion.', 
    'https://covers.openlibrary.org/b/id/431857-L.jpg'),

    ('The Girl Before', 
    'JP Delaney', 
    'Thriller', 
    'In this psychological thriller, two women, Emma and Jane, find themselves living in the same house at different times. Both women are captivated by the house''s minimalist beauty and the enigmatic architect who designed it. However, they soon discover that the house holds dark secrets and a series of strict rules that must be followed. As they uncover the house''s disturbing past and the fate of its previous occupants, Emma and Jane become entangled in a twisted web of manipulation, obsession, and danger. "The Girl Before" is a suspenseful and atmospheric novel that explores themes of control, identity, and the consequences of choices.', 
    'https://covers.openlibrary.org/b/id/8866565-L.jpg'),

    ('The Woman in the Window', 
    'A.J. Finn', 
    'Thriller', 
    'Anna Fox, an agoraphobic woman, spends her days confined to her New York City apartment, observing her neighbors through her camera lens. When she witnesses a crime in her neighbor\''s house, she becomes entangled in a dangerous web of secrets and deception. As Anna struggles to convince ot5hers of what she saw, she begins to question her own sanity. "The Woman in the Window" is a gripping psychological thriller that explores themes of perception, paranoia, and the blurred line between reality and imagination. With its atmospheric setting and unexpected twists, this novel keeps readers guessing until the final pages.', 
    'https://covers.openlibrary.org/b/id/12379672-L.jpg'),

    ('The Couple Next Door', 
    'Shari Lapena', 
    'Thriller', 
    'In this riveting Thriller, Anne and Marco Conti attend a dinner party at their neighbor\''s house, leaving their infant daughter at home. When they return, they discover that their baby is missing, setting off a frantic search for answers. As secrets and betrayals are exposed, Anne and Marco find themselves questioning everything they thought they knew about their neighbors, their marriage, and their own pasts. "The Couple Next Door" is a fast-paced and suspenseful novel that explores themes of trust, guilt, and the lengths to which parents will go to protect their children.', 
    'https://covers.openlibrary.org/b/id/8466573-L.jpg'),

    ('The Girl on the Bridge', 
    'Ken Reger', 
    'Thriller', 
    'It is the summer of 1967. Kevin Edwards, recently returned from Vietnam, suffers from PTSD, but the treatments from the VA Hospital are doing more than helping him cope. He cannot remember things he knows he should, and his life begins to collapse. With his sanity in question, he falls into the deepest despair. He meets a girl, Cherokee Irons, falls in love, and slowly with her help begins to pick up the pieces of his shattered life. The two of them begin a strange odyssey, a quest for understanding that leads them into a labyrinth of deceit and peril. Each new insight puts their lives more at risk. The key to survival lies in his lost memory, and the two of them find themselves pitted against powerful forces, their very lives in the balance, as they come to understand what happened in Vietnam in the summer of 1965.', 
    'https://covers.openlibrary.org/b/id/2958971-L.jpg'),

    ('Sharp Objects', 
    'Gillian Flynn', 
    'Thriller', 
    'In this dark and haunting thriller, journalist Camille Preaker returns to her hometown to cover the murder of two young girls. As she delves into the case, Camille confronts her troubled past and confronts the demons that still haunt her. As the investigation unfolds, Camille becomes entangled in a twisted web of family secrets, small-town politics, and the complex dynamics of her own dysfunctional family. With its atmospheric setting and complex characters, Sharp Objects delves deep into the darkest corners of the human psyche.', 'https://covers.openlibrary.org/b/id/12498712-L.jpg'),

    ('The Silent Corner', 
    'Dean Koontz', 
    'Thriller', 
    'In this suspenseful thriller, Jane Hawk, an FBI agent grieving the suspicious death of her husband, uncovers a dangerous conspiracy involving mind-altering technology. As she goes off the grid and becomes a fugitive, Jane races against time to expose the truth and protect her son from those who will stop at nothing to silence her. The Silent Corner is a high-stakes and thought-provoking novel that combines elements of science fiction, mystery, and action. With its gripping plot and well-drawn characters, this book keeps readers engaged until the final page.', 
    'https://covers.openlibrary.org/b/id/10192554-L.jpg'),


    ('The Adventures of Sherlock Holmes', 
    'Arthur Conan Doyle', 
    'Classic Detective', 
    'Join the brilliant detective Sherlock Holmes and his loyal companion Dr. John Watson as they solve intriguing mysteries in Victorian England. From stolen jewels to baffling murders, Holmes''s keen intellect and deductive reasoning unravel some of the most puzzling cases, making this classic detective series a timeless favorite for mystery enthusiasts.',
    'https://covers.openlibrary.org/b/id/12519134-L.jpg'),

    ('Murder on the Orient Express', 
    'Agatha Christie', 
    'Classic Detective', 
    'Step aboard the luxurious Orient Express with Detective Hercule Poirot as he embarks on a journey to solve a murder. When a passenger is found dead in his cabin, Poirot must navigate through a train full of suspects and untangle a web of secrets to uncover the truth behind this baffling crime.',
    'https://covers.openlibrary.org/b/id/13181542-L.jpg'),

    ('The Maltese Falcon', 
    'Dashiell Hammett', 
    'Classic Detective', 
    'Follow private detective Sam Spade as he becomes entangled in a dangerous quest for a valuable statuette, the Maltese Falcon. In a world of deception and betrayal, Spade must navigate the criminal underworld to solve the mystery and determine whom he can trust.',
    'https://covers.openlibrary.org/b/id/8064684-L.jpg'),

    ('The Big Sleep', 
    'Raymond Chandler', 
    'Classic Detective', 
    'Enter the gritty world of hard-boiled detective Philip Marlowe as he is hired to handle a case involving blackmail, seduction, and murder. As Marlowe digs deeper into the seedy underbelly of Los Angeles, he uncovers shocking secrets and finds himself entangled in a complex web of deceit.',
    'https://covers.openlibrary.org/b/id/9860199-L.jpg'),
    
    ('Gorky Park', 
    'Martin Cruz Smith', 
    'Classic Detective', 
    'In the Soviet Union, Detective Arkady Renko is faced with a chilling case of a triple murder in Gorky Park. As he delves into the heart of Soviet bureaucracy and political intrigue, Renko must navigate a dangerous landscape to uncover the truth behind these murders.',
    'https://covers.openlibrary.org/b/id/11229323-L.jpg'),

    ('The Hound of the Baskervilles', 
    'Arthur Conan Doyle', 
    'Classic Detective', 
    'In this eerie tale, Sherlock Holmes and Dr. Watson venture to Dartmoor to investigate the legend of a supernatural hound haunting the Baskerville family. Set against the backdrop of a misty moor, Holmes\''s detective skills are put to the test in this thrilling and atmospheric mystery.',
    'https://covers.openlibrary.org/b/id/13771438-L.jpg'),

    ('The Adventures of Father Brown', 
    'G.K. Chesterton', 
    'Classic Detective', 
    'Meet Father Brown, a mild-mannered priest with a keen intellect and a talent for solving crimes. With his unassuming appearance and deep understanding of human nature, Father Brown unravels the most perplexing mysteries, proving that wisdom and compassion can be powerful tools in solving crimes.',
    'https://covers.openlibrary.org/b/id/3361276-L.jpg'),

    ('Rebecca', 
    'Daphne du Maurier', 
    'Classic Detective', 
    'In this haunting tale, a young woman marries the wealthy widower Maxim de Winter and moves to his imposing estate, Manderley. However, she soon finds herself haunted by the memory of Maxim\''s first wife, Rebecca. As she delves deeper into the mysteries surrounding Rebecca\''s death, dark secrets and hidden betrayals come to light.',
    'https://covers.openlibrary.org/b/id/6819347-L.jpg'),

    ('The No. 1 Ladies\'' Detective Agency', 
    'Alexander McCall Smith', 
    'Classic Detective', 
    'Set in Botswana, this delightful series follows Precious Ramotswe as she fulfills her lifelong dream of opening a detective agency. With a sharp mind and a warm heart, Precious solves cases with a unique blend of wit and compassion, making her one of the most endearing detectives in fiction.',
    'https://covers.openlibrary.org/b/id/6980462-L.jpg'),

    ('The Moonstone', 
    'Wilkie Collins', 
    'Classic Detective', 'When a valuable diamond, the Moonstone, is stolen from a young woman\''s birthday party, a captivating investigation ensues, filled with twists and turns. This classic detective novel is considered one of the earliest examples of the detective genre and keeps readers engrossed as the truth behind the theft is gradually revealed.',
    'https://covers.openlibrary.org/b/id/6541420-L.jpg'),

    ('The Wedding Date', 
    'Jasmine Guillory', 
    'Romance', 
    'What starts as a fake date between Alexa Monroe and Drew Nichols quickly turns into a real romance. As they navigate family drama, career aspirations, and the challenges of a long-distance relationship, Alexa and Drew discover the power of love and the importance of taking chances.',
    'https://covers.openlibrary.org/b/id/14327300-L.jpg'),

    ('The Hating Game', 
    'Sally Thorne', 
    'Romance', 
    'Lucy Hutton and Joshua Templeman are sworn enemies in the workplace, engaging in a fierce rivalry. However, as they spend more time together, they realize there might be more to their relationship than meets the eye. This enemies-to-lovers romance is filled with witty banter, undeniable chemistry, and unexpected moments of vulnerability.',
    'https://covers.openlibrary.org/b/id/10239136-L.jpg'),

    ('Me Before You', 
    'Jojo Moyes', 
    'Romance', 
    'Louisa Clark finds herself in an unexpected position as the caregiver for Will Traynor, a quadriplegic man. As they spend time together, their lives are forever changed. This poignant love story explores themes of self-discovery, compassion, and the power of human connection.',
    'https://covers.openlibrary.org/b/id/12904806-L.jpg'),

    ('The Notebook', 
    'Nicholas Sparks', 
    'Romance', 
    'Noah and Allie\''s love story unfolds across time as they navigate the challenges of social class and the realities of life. Their enduring love and heartbreaking journey captivate readers, reminding us of the power of love and the importance of holding onto cherished memories.',
    'https://covers.openlibrary.org/b/id/1469612-L.jpg'),

    ('Outlander', 
    'Diana Gabaldon', 
    'Romance', 
    'Claire Randall, a British nurse, travels back in time to 18th-century Scotland and finds herself torn between two men: her husband in the present and a passionate Scottish warrior in the past. This epic historical romance combines elements of time travel, adventure, and sweeping love.',
    'https://covers.openlibrary.org/b/id/238961-L.jpg'),

    ('The Rosie Project', 
    'Graeme Simsion', 
    'Romance', 
    'Don Tillman, a socially awkward professor, embarks on "The Wife Project" to find a suitable life partner. However, his plans take an unexpected turn when he meets Rosie, a free-spirited woman who challenges his perception of love and relationships. This quirky love story is filled with humor, self-discovery, and the joys of embracing imperfections.',
    'https://covers.openlibrary.org/b/id/10186221-L.jpg'),

    ('Eleanor & Park', 
    'Rainbow Rowell', 
    'Romance', 
    'Set in the 1980s, this young adult love story follows Eleanor and Park, two misfit teenagers who form an unlikely connection. As they navigate the complexities of family, first love, and societal pressures, Eleanor and Park find solace in each other and discover the transformative power of love.',
    'https://covers.openlibrary.org/b/id/12917588-L.jpg'),

    ('The Fault in Our Stars', 
    'John Green', 
    'Romance', 'Hazel Grace Lancaster and Augustus Waters meet at a cancer support group and embark on a poignant and unforgettable love story. As they navigate the challenges of illness and mortality, their relationship is marked by humor, vulnerability, and the realization that every moment is worth cherishing.',
    'https://covers.openlibrary.org/b/id/8345124-L.jpg'),

    ('The Time Traveler\''s Wife', 
    'Audrey Niffenegger', 
    'Romance', 
    'Henry DeTamble has a rare genetic condition that causes him to time travel involuntarily. Clare Abshire, his wife, learns to navigate their unconventional relationship, filled with unexpected meetings and separations. This unique love story explores themes of fate, love\''s endurance, and the complexities of time.',
    'https://covers.openlibrary.org/b/id/9273734-L.jpg'),

    ('One Day', 
    'David Nicholls', 
    'Romance', 
    'Emma Morley and Dexter Mayhew meet on July 15th, 1988, and their lives intersect on the same date each year for the next two decades. As they navigate career ups and downs, personal struggles, and the challenges of growing up, their connection deepens and evolves. This heartfelt novel explores the beauty and complexities of long-term friendship and love.',
    'https://covers.openlibrary.org/b/id/10792993-L.jpg'),

    ('The Clever Kitten', 
    'Enid Blyton', 
    'Kids', 
    'Enid Blyton''s ''The Clever Kitten'' is a delightful children''s book that follows the adventures of a little kitten named Whiskers. Whiskers is no ordinary kitten - he possesses a remarkable talent for problem-solving and a keen ability to help others. In this heartwarming tale set in the countryside, Whiskers encounters a variety of exciting and sometimes mischievous situations. Along the way, he meets friendly farm animals, playful mice, and other charming characters. Whiskers uses his cleverness and wit to navigate challenges and assist those in need.',
    'https://covers.openlibrary.org/b/id/11605177-L.jpg'),

    ('The Chronicles of Narnia', 
    'C.S. Lewis', 
    'Kids', 
    'Immerse yourself in the enchanting world of Narnia, a magical realm filled with talking animals, mythical creatures, and epic adventures. Follow the Pevensie siblings as they step through a wardrobe and discover a land frozen in eternal winter under the rule of the White Witch. As they embark on a journey alongside the wise lion Aslan, they encounter battles, treachery, and ultimately witness the triumph of good over evil. This beloved series of fantasy novels captures the imagination of readers young and old, exploring themes of courage, loyalty, and the power of belief.',
    'https://covers.openlibrary.org/b/id/10565686-L.jpg'),
    
   ('Mrs Pepperpot stories', 
   'Alf Proysen', 
   'Kids', 
   'Mrs Pepperpot can''t choose when she will shrink to the size of a pepperpot - it just happens. But whatever she encounters, whether it be a mountain of pancakes, a crafty fox or a monstrous mousetrap, little Mrs Pepperpot will always come out on top.', 
   'https://covers.openlibrary.org/b/id/13094031-L.jpg'),

    ('Charlie and the Chocolate Factory', 
    'Roald Dahl', 
    'Kids', 
    'Enter the extraordinary world of Willy Wonka''s chocolate factory, where dreams come true and whimsy knows no bounds. Follow young Charlie Bucket as he wins a golden ticket to tour the magical factory alongside four other lucky children. From the chocolate river to the Oompa-Loompas, every page is filled with delectable surprises and imaginative wonders. Roald Dahl''s enchanting tale takes readers on a deliciously thrilling adventure, teaching valuable lessons about greed, kindness, and the importance of imagination.', 
   'https://covers.openlibrary.org/b/id/8387917-L.jpg'),

    ('The Secret Garden', 
    'Frances Hodgson Burnett', 
    'Kids', 
    'Journey to the Yorkshire moors and uncover the secrets of a hidden garden in this heartwarming tale of friendship and renewal. Young Mary Lennox, orphaned and lonely, discovers a neglected garden locked away on her uncle''s vast estate. With the help of her cousin Colin and a spirited robin, Mary brings the garden back to life, finding solace, healing, and a sense of belonging. Frances Hodgson Burnett''s timeless classic reminds readers of the transformative power of nature, the resilience of the human spirit, and the importance of finding beauty in unexpected places.', 
   'https://covers.openlibrary.org/b/id/12866703-L.jpg'),

    ('Diary of a Wimpy Kid', 
    'Jeff Kinney', 
    'Kids', 
    'Laugh out loud with Greg Heffley as he navigates the treacherous waters of middle school in his hilarious journal entries. From embarrassing moments to schemes gone awry, Greg''s comical misadventures offer a relatable glimpse into the ups and downs of adolescence. Jeff Kinney''s bestselling series combines witty storytelling with humorous illustrations, capturing the angst and absurdity of growing up. Join Greg and his quirky family and friends as they tackle the challenges of school, friendship, and self-discovery in this beloved series that has become a favorite among young readers.', 
   'https://covers.openlibrary.org/b/id/14303983-L.jpg'),

    ('The Cat in the Hat', 
    'Dr. Seuss', 
    'Kids', 
    'Enter a world of mischief and imagination with the iconic Cat in the Hat. When this mischievous feline arrives uninvited, he brings chaos and excitement into the lives of two bored children on a rainy day. With his whimsical antics and rhyming charm, the Cat in the Hat introduces a world of fun and silliness, teaching valuable lessons about responsibility and creativity. Dr. Seuss'' timeless tale continues to captivate young readers with its playful language, colorful illustrations, and unforgettable characters.', 
   'https://covers.openlibrary.org/b/id/6492602-L.jpg'),

    ('Goodnight Moon', 
    'Margaret Wise Brown', 
    'Kids', 
    'This beloved bedtime story gently lulls young readers to sleep with its soothing rhythm and beautiful illustrations. As the moon rises, the book takes us on a journey through a cozy bedroom, bidding goodnight to various objects and characters. The simple yet captivating text and enchanting illustrations create a serene atmosphere, making it a perfect choice for bedtime rituals. ''Goodnight Moon'' is a timeless classic that celebrates the quiet moments of comfort and peace before drifting off to sleep.', 
   'https://covers.openlibrary.org/b/id/10759399-L.jpg'),

    ('The Little Prince', 
    'Antoine de Saint-Exupéry', 
    'Kids', 
    '"The Little Prince" is a philosophical tale that explores the themes of friendship and imagination. It follows the journey of a young prince who travels from planet to planet, encountering various eccentric characters along the way. Through their interactions, the prince learns valuable life lessons and gains a deeper understanding of human nature. This enchanting story resonates with readers of all ages, reminding us of the importance of seeing the world with childlike wonder and embracing the beauty of simplicity.', 
   'https://covers.openlibrary.org/b/id/10030227-L.jpg'),

    ('The BFG', 
    'Roald Dahl', 
    'Kids', 
    'Join Sophie on an extraordinary adventure with the Big Friendly Giant (BFG), a gentle giant who captures dreams and spreads joy. Together, they set out to save the children of England from the gruesome giants who devour them. With Dahl''s signature wit and whimsy, "The BFG" takes readers on a thrilling journey filled with larger-than-life characters, hilarious wordplay, and heartwarming moments. This imaginative tale celebrates the power of friendship, courage, and dreams, reminding us that even the smallest individuals can make a big difference.', 
   'https://covers.openlibrary.org/b/id/12288034-L.jpg'),

    ('The Hobbit', 
    'J.R.R. Tolkien', 
    'Action/Adventure', 
    'In "The Hobbit," Bilbo Baggins, a peace-loving hobbit, is thrust into a quest to reclaim a treasure guarded by the fearsome dragon Smaug. Joined by a group of dwarves and the wise wizard Gandalf, Bilbo encounters thrilling dangers, strange creatures, and discovers the depths of his own bravery. Tolkien''s richly imagined world and captivating storytelling make "The Hobbit" a timeless tale of heroism, friendship, and self-discovery.', 
   'https://covers.openlibrary.org/b/id/12003120-L.jpg'),

    ('Jurassic Park', 
    'Michael Crichton', 
    'Action/Adventure', 
    'In "Jurassic Park," renowned scientist Dr. John Hammond creates a theme park where dinosaurs are brought back to life through genetic engineering. As visitors flock to the island to witness these awe-inspiring creatures, the park''s security systems fail, and the dinosaurs are unleashed, turning the paradise into a terrifying battleground for survival. Michael Crichton''s gripping narrative and meticulous research combine to deliver a thrilling tale of science gone awry, exploring ethical dilemmas, human hubris, and the raw power of nature.', 
   'https://covers.openlibrary.org/b/id/13152005-L.jpg'),

   ('The Bourne Identity', 
   'Robert Ludlum', 
   'Action/Adventure', 
   'The Bourne Identity introduces us to Jason Bourne, an amnesiac agent who awakens with no memory of his past but possesses exceptional skills. As he embarks on a dangerous journey to uncover his identity, he becomes entangled in a web of conspiracy, espionage, and international intrigue. Robert Ludlum''s fast-paced storytelling, intense action sequences, and complex characters make The Bourne Identity a gripping espionage thriller that keeps readers on the edge of their seats.', 
   'https://covers.openlibrary.org/b/id/10313241-L.jpg'),

    ('Treasure Island', 
    'Robert Louis Stevenson', 
    'Action/Adventure', 
    'Treasure Island is a timeless classic that takes us on a thrilling voyage of pirates, treasure, and high-sea adventures. Young Jim Hawkins finds a mysterious map that leads him to the fabled treasure of Captain Flint. Alongside the charismatic Long John Silver and a crew of swashbuckling pirates, Jim sets sail to Skeleton Island in search of untold riches. Stevenson''s masterful storytelling, vivid characters, and vivid descriptions of life at sea create an immersive reading experience that has captivated readers for generations.', 
   'https://covers.openlibrary.org/b/id/13295472-L.jpg'),

    ('The Hunger Games', 
    'Suzanne Collins', 
    'Action/Adventure', 
    'Set in a dystopian society, The Hunger Games follows sixteen-year-old Katniss Everdeen as she volunteers for a brutal televised event where teenagers are forced to fight to the death. Katniss must navigate the treacherous arena, outwit her adversaries, and challenge the oppressive regime that controls their world. Suzanne Collins crafts a riveting tale of survival, rebellion, and the resilience of the human spirit. This action-packed dystopian novel explores themes of sacrifice, loyalty, and the consequences of unchecked power.', 
   'https://covers.openlibrary.org/b/id/12646540-L.jpg'),

    ('The Adventures of Tom Sawyer', 
    'Mark Twain', 
    'Action/Adventure', 
    'Join Tom Sawyer, a mischievous and adventurous boy, on his escapades along the Mississippi River. With his loyal friend Huckleberry Finn by his side, Tom engages in pranks, explores hidden caves, hunts for buried treasure, and gets entangled in a murder mystery. Mark Twain''s classic coming-of-age story captures the essence of childhood freedom and the universal longing for thrilling adventures. With its humor, memorable characters, and vivid depiction of a bygone era, The Adventures of Tom Sawyer continues to captivate readers of all ages.', 
   'https://covers.openlibrary.org/b/id/7103517-L.jpg'),

    ('The Maze Runner', 
    'James Dashner', 
    'Action/Adventure', 
    'In The Maze Runner, Thomas wakes up in a mysterious place called the Glade with no memory of who he is, surrounded by a group of boys trapped in a deadly maze. As they struggle to survive, Thomas becomes determined to unravel the secrets of the maze and find a way out. James Dashner''s gripping narrative, pulse-pounding suspense, and unexpected twists make The Maze Runner a thrilling dystopian adventure that keeps readers guessing until the very end.', 
   'https://covers.openlibrary.org/b/id/12953599-L.jpg'),

    ('Ready Player One', 
    'Ernest Cline', 
    'Action/Adventure', 
    'In a dystopian future, Ready Player One takes us into the immersive virtual reality world of the OASIS. When the creator of the OASIS announces a high-stakes treasure hunt, Wade Watts, a young and resourceful gamer, embarks on a quest that leads him into a world filled with pop culture references, puzzles, and danger. Ernest Cline''s novel is a thrilling tribute to 80s nostalgia, gaming culture, and the power of imagination. Ready Player One is a gripping adventure that explores themes of escapism, friendship, and the limitless possibilities of virtual worlds.', 
   'https://covers.openlibrary.org/b/id/8270105-L.jpg'),

    ('The Count of Monte Cristo', 
    'Alexandre Dumas', 
    'Action/Adventure', 
    'The Count of Monte Cristo is an epic tale of revenge and redemption set in 19th-century France. Edmund Dantès, a young sailor, is betrayed by his friends and wrongfully imprisoned. After escaping from captivity, he reinvents himself as the enigmatic Count of Monte Cristo, determined to seek vengeance on those who wronged him. Alexandre Dumas weaves a masterful narrative of conspiracy, romance, and moral dilemmas, exploring themes of justice, forgiveness, and the consequences of unchecked power. With its intricate plot, memorable characters, and themes of betrayal and redemption, this classic novel continues to captivate readers worldwide.', 
   'https://covers.openlibrary.org/b/id/11572930-L.jpg'),

    ('Ender''s Game', 
    'Orson Scott Card',
    'Action/Adventure', 
    '"Ender''s Game" takes place in a future where child prodigies are trained to defend Earth from an alien invasion. Andrew "Ender" Wiggin, a brilliant young boy, is chosen to join Battle School, a rigorous military training program. As Ender faces increasingly difficult challenges, he becomes a strategic genius and a symbol of hope for humanity. Orson Scott Card''s novel delves into themes of leadership, identity, and the moral complexities of warfare. "Ender''s Game" is a gripping and thought-provoking adventure that explores the limits of human potential and the price of survival in a hostile universe.', 
   'https://covers.openlibrary.org/b/id/11398727-L.jpg');



CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),

    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
