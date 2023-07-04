// book page
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookGenre = document.querySelector("#genre");
let bookDescription = document.querySelector("#description");

async function displayBook(book) {
  const response = await fetch(`http://localhost:3000/books/${book}`);
  const data = await response.json();

  const titleElement = document.querySelector("#title");
  const authorElement = document.querySelector("#author");
  const genreElement = document.querySelector("#genre");
  const descriptionElement = document.querySelector("#description");

  titleElement.textContent = data.title;
  authorElement.textContent = data.author;
  genreElement.textContent = data.genre;
  descriptionElement.textContent = data.short_description;

  console.log(data);
}
//////////////////////////////////////////////////////////////////////////
// SEARCH BAR

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("searchbar");
const bookCover = document.getElementById("book-cover");
const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const genreElement = document.getElementById("genre");
const descriptionElement = document.getElementById("description");

searchForm.addEventListener("submit", formSubmission);

async function formSubmission(event) {
  event.preventDefault();

  const searchBook = searchInput.value.trim();

  if (searchBook !== "") {
    await fetch(`http://localhost:3000/books/`)
      .then((response) => response.json())
      .then((data) => {
        const foundBook = data.find((book) =>
          book.title.toLowerCase().includes(searchBook.toLowerCase())
        );

        if (foundBook) {
          displayBook(foundBook);
          clearBookDetails();
        } else {
          clearBookDetails();
        }
      })
      .catch((error) => {
        console.error("Error searching for books:", error);
      });
  } else {
    clearBookDetails();
  }
}

function displayBook(book) {
  bookCover.src = book.book_cover;
  titleElement.textContent = book.title;
  authorElement.textContent = `Author: ${book.author}`;
  genreElement.textContent = `Genre: ${book.genre}`;
  descriptionElement.textContent = book.short_description;
}

function clearBookDetails() {
  bookCover.src = "";
  titleElement.textContent = "";
  authorElement.textContent = "";
  genreElement.textContent = "";
  descriptionElement.textContent = "";
}
