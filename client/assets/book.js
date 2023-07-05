// book page
const logo = document.querySelector("#logo");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("searchbar");
const bookCover = document.getElementById("book-cover");
const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const genreElement = document.getElementById("genre");
const descriptionElement = document.getElementById("description");

logo.addEventListener("click", () => {
  window.location.assign("index.html");
  localStorage.removeItem("title");
});

async function displayStoredBook() {
  const storedTitle = localStorage.getItem("title");
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch(
    `http://localhost:3000/books/${storedTitle}`,
    options
  );
  console.log(response);
  if (response.status == 200) {
    const storedBook = await response.json();
    bookCover.src = storedBook.book_cover;
    titleElement.textContent = storedBook.title;
    authorElement.textContent = `Author: ${storedBook.author}`;
    genreElement.textContent = `Genre: ${storedBook.genre}`;
    descriptionElement.textContent = storedBook.short_description;
  } else {
    window.location.assign("book.html");
  }
}

if (localStorage.length == 2) {
  displayStoredBook();
}

//////////////////////////////////////////////////////////////////////////
// SEARCH BAR

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
