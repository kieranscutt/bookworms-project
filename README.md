# Bookworms

## Project description

A website with 4 games; "Hangman Countries and Capitals", "Hangman Italian nouns", "Guess who English Kings and Queens" and "Translating race Italian nouns". Currently, only "Hangman Countries and Capitals" has been implemented.
The game is hidden underneath the main page which can be entered by clicking the red curving square in the upper left.

The point of these games is to increase interest in NON-STEM subjects in secondary schools.
This project was requested by the management team of the Hive group of secondary schools.

## Installation & Usage

#### Github steps

- Fork the repo (top right of the page).
- Go to your forked repo, it will now say `<your-github-username>bookworms-project`.
- Click the green "code" button and copy the **SSH** option if you have already setup git in your terminal, or the **HTTPS** option if not.

#### Terminal commands (GITBASH FOR WINDOW USERS OR TERMINAL FOR MAC USERS)

- Go to the directory you want to clone in.
- Run `git clone <SSH key or HTTPS key>`.
- Then, `cd bookworms-project`.
- Check branch is master using `git branch` otherwise `git checkout master`.
- Run `ls` to check files & folders which should have a "server" folder, "client" folder and "README.md" file.
- To open VS code, `code .`.

#### How to install the libraries

- Change directory into the server by running `cd server`
- Install the dependancies by running `npm install`
- If this did not install the nodemon package, run `npm install -D`

#### How to connect the database

- Create a `.env` file within the server folder
- Login to [elephantsql](https://www.elephantsql.com)
- Create a new instance, you can name it "bookworms-db"
- In the details tab of your new db, copy the db URL
- Within your `.env` file, add `DB_URL={your copied URL}`
- Make sure the `.env` is in the `.gitignore` file!
- cd into the api folder if you aren't already, and run `npm run setup-db`
- You should see "Set-up complete." in your terminal

#### How to run the server

- To the `.env` file, add `PORT=3000`
- cd into the api folder if you aren't already, and run `npm run dev`
- You should see "API listening on 3000" in your terminal

**Make sure to leave the server running in the terminal for the next stages too.**

#### How to open the backend

- Click the following link: [API](http://localhost:3000)
- You can check the roots:
  - /users/:id
  - /books
  - /books/:title

#### How to open the website

- Check the extension "Live Server" is installed on VS code otherwise install it.
- Open the explorer section in VS code, then open the "client" folder.
- Right click "login.html" and click on "Open with Live Server". It will redirect you to your browser.

#### How to use

- Create an account on the register page and login with it on the login page.
- You are now in the home page, if you see a book you like you can click on it to navigate to that books' page.
- Additionally you can search for a book, or browse by genre using the genre dropdown menu.
- If you choose to borrow a book, you will be shown a pop up, telling you when it is due.
- You can also see when it is due, and can return it, using the user page.

#### If you wish to make a change

- Go to your terminal
- Run `git status` and check files are red.
- Run `git add .` to add **all** files
  OR `git add <folder-name>` to add a specific folder
  OR `git add <folder-name/file-name>` to add a specific file
- Run `git status` again and check files are green.
- Then, commit by `git commit -m "<message>"`.
- Finally, run `git push`.
- Make a "Pull Request" to merge it to the original repository and request a review.

## Technology used

- HTML
- CSS
- Javascript
- Express.js
- Figma
- Bcrypt encription
- Jest testing

## License

ISC license

## Wins and challenges

Some functionality of borrowing a book was tricky to implement, such as updating the book with the users ID, which had to be gotten from the token. We got over these challenges by all coming up with different ideas to get around this.

At the start of the project, git usage was fine as there were no merge conflicts. However, as the project got more and more complicated, we experience more and more conflicts which we had to sit down and deal with.

## Bugs

There are no known bugs. However, some of the elements have not yet been implemented e.g. Previously read books.

## Future features

In the future we would add a previously read books column to the user database, which would allow us to display books that a user has read and returned. We would also implement a reviewing system in which people can review, and rate a book out of 5. We would also allow for admin accounts to be setup which can add or remove books to the library's content.

## About our App

Welcome to the enchanting Florin Library!

Here in the beautiful Florin Council county, we have made sure that our residents have the marvelous opportunity to access the library online and always have a delightful array of books to choose from!

As you may already know, books bring forth a myriad of splendid benefits, including:

    - Knowledge and Learning: Books serve as splendid vessels of wisdom and knowledge, allowing us to explore a vast array of captivating information and acquire new insights.

    - Mental Stimulation: When we immerse ourselves in the captivating world of books, our minds are invigorated and stimulated, enhancing our cognitive abilities and sharpening our intellectual prowess.

    - Imagination and Creativity: The pages of books hold boundless realms of imagination, whisking us away to extraordinary worlds, bygone eras, and intriguing perspectives. They ignite the flames of creativity within us, encouraging us to paint vivid pictures in our minds.

    - Emotional Development: Books possess the remarkable power to stir a multitude of emotions deep within our hearts. They make us giggle with glee, shed tears of both joy and sorrow, empathize with characters, and forge profound connections to their journeys.

    - Relaxation and Stress Reduction: Amidst the hustle and bustle of life, books offer a splendid sanctuary for tranquility and peace. They serve as a balm for our souls, providing respite from the stresses of everyday life and granting us a serene escape.

    - Language and Communication Skills: Within the pages of books lie the keys to unlocking the beauty of language. By immersing ourselves in well-crafted sentences, eloquent phrases, and diverse writing styles, we enhance our vocabulary, grammar, and overall communication skills.

    - Expanded Perspectives: Books act as marvelous gateways to diverse cultures, varied perspectives, and captivating experiences. They invite us to embark on journeys of understanding, broadening our horizons and nurturing open-mindedness.

    - Lifelong Companion: Books are extraordinary companions that accompany us throughout our lives, through the wondrous chapters of our personal journeys. They offer solace, camaraderie, and intellectual stimulation, remaining steadfast through the ever-changing tides of time.

By following these steps, you can make the most of our library's offerings and easily find the books that capture your interest.

Here at Florin Library, we celebrate the transformative power of books and invite you to embark on delightful literary adventures that will enrich your mind, touch your heart, and transport you to extraordinary realms. Happy reading!
