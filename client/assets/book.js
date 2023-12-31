// book page
const logo = document.querySelector("#logo");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("searchbar");
const bookCover = document.getElementById("book-cover");
const titleElement = document.getElementById("title");
const authorElement = document.getElementById("author");
const genreElement = document.getElementById("genre");
const descriptionElement = document.getElementById("description");
const hamburger = document.querySelector("#hamburger");
const burgerMenu = document.querySelector("#burger-menu");
const userIcon = document.querySelector("#user-icon");

hamburger.addEventListener("click", openBurger);
userIcon.addEventListener("click", () => {
  window.location.assign("./user.html");
});

logo.addEventListener("click", () => {
  window.location.assign("index.html");
});

if (localStorage.getItem("token") == undefined) {
  window.location.assign("login.html");
}

function openBurger() {
  burgerMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
}

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
  if (response.status == 200) {
    const storedBook = await response.json();
    bookCover.src = storedBook.book_cover;
    titleElement.textContent = storedBook.title;
    authorElement.textContent = `Author: ${storedBook.author}`;
    genreElement.textContent = `Genre: ${storedBook.genre}`;
    descriptionElement.textContent = storedBook.short_description;
  } else {
    window.location.assign("login.html");
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
          searchInput.value = "";
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
  searchInput.value = "";
}

const token = JSON.parse(localStorage.getItem("token"));
const user_id = token.user_id;

/// BORROW

let borrowBtn = document.getElementById("borrow-btn");
borrowBtn.addEventListener("click", borrowBook);

async function borrowBook() {
  const title = titleElement.innerText.toLowerCase();

  const currentDate = new Date();
  const borrowDate = currentDate.toLocaleDateString("en-GB");

  const returnDate = new Date(currentDate);
  returnDate.setDate(returnDate.getDate() + 14);
  const formattedReturnDate = returnDate.toLocaleDateString("en-GB");
  const data = {
    user_id: user_id,
    borrow_date: borrowDate.toString(),
    return_date: formattedReturnDate.toString(),
  };
  const options = {
    method: "PATCH",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  try {
    const response = await fetch(
      `http://localhost:3000/books/${title}`,
      options
    );
    console.log(response);
    if (response.status === 200) {
      const newResponse = response.json();
      displayPopup(
        "Book borrowed successfully!\nThe book must be returned on " +
          formattedReturnDate
      );
      borrowBtn.value = "You are borrowing this book";
      borrowBtn.disabled = true;
    } else {
      displayPopup("Book borrowing failed.");
    }
  } catch (error) {
    console.error("Error borrowing book:", error);
  }
}
function displayPopup(message) {
  const popupContainer = document.getElementById("popup-container");
  const popupMessage = document.getElementById("popup-message");
  const popupClose = document.getElementById("popup-close");

  popupMessage.textContent = message;
  popupContainer.style.display = "block";

  popupClose.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });
}

async function isBorrowed() {
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
  if (response.status == 200) {
    const storedBook = await response.json();
    if (storedBook.user_id == user_id) {
      borrowBtn.value = "You are borrowing this book";
      borrowBtn.disabled = true;
    } else if (storedBook.user_id) {
      borrowBtn.value = `Unavailable until ${storedBook.return_date}`;
      borrowBtn.disabled = true;
    }
  } else {
    window.location.assign("book.html");
  }
}

isBorrowed();
