const hamburger = document.querySelector("#hamburger");
const burgerMenu = document.querySelector("#burger-menu");
const genreButton = document.querySelector("#dropdown-button");
const genreMenu = document.querySelector("#genre-menu");
const userIcon = document.querySelector("#user-icon");
const trendingContainer = document.querySelector(".trendingBooks");
const trendingBooks = document.querySelectorAll("#trendingBook");
const genreBooks = document.querySelectorAll("#genreBook");
const genreLinks = document.querySelectorAll("#genreLink");
const genreGrid = document.querySelector(".genreGrid");

hamburger.addEventListener("click", openBurger);
genreButton.addEventListener("click", openGenre);
userIcon.addEventListener("click", () => {
  window.location.assign("./user.html");
});

genreLinks.forEach((link) => link.addEventListener("click", loadGenreBooks));
window.addEventListener("load", loadBooks);
trendingBooks.forEach((book) =>
  book.addEventListener("click", openTrendingBook)
);

function openBurger() {
  burgerMenu.classList.toggle("open");
}

function openGenre() {
  genreMenu.classList.toggle("open");
}

async function loadBooks() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch("http://localhost:3000/books", options);
  console.log(response);
  if (response.status === 200) {
    const books = await response.json();
    books.forEach((book) => {
      trendingBooks[books.indexOf(book)].src = book.book_cover;
      trendingBooks[books.indexOf(book)].alt = book.title;
    });
  } else {
    window.location.assign("./index.html");
  }
}

async function loadGenreBooks(event) {
  genreGrid.classList.remove("hidden");
  genreMenu.classList.remove("open");
  const link = event.target.innerHTML;

  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch("http://localhost:3000/books", options);
  if (response.status === 200) {
    const books = await response.json();
    const filteredBooks = books.filter((book) => book.genre == link);
    filteredBooks.forEach((book) => {
      genreBooks[filteredBooks.indexOf(book)].src = book.book_cover;
      genreBooks[filteredBooks.indexOf(book)].alt = book.title;
    });
  } else {
    window.location.assign("./index.html");
  }
}

async function openTrendingBook(event) {
  const title = event.target.alt;
  localStorage.setItem("title", title);
  window.location.assign("book.html");
}
