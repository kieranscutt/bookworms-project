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

function openBurger() {
  burgerMenu.classList.toggle("open");
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

///
const borrowBtn = document.getElementById("borrow-btn");
borrowBtn.addEventListener("click", borrowBook);

// Borrow function
async function borrowBook(user_id) {
  console.log("The first check"); // to remove later
  const storedTitle = localStorage.getItem("title");
  console.log("the second one"); // to remove later

  console.log("Stored Title:", storedTitle); // to remove later

  const currentDate = new Date();
  const borrowDate = currentDate.toLocaleDateString("en-GB");

  console.log("Borrow Date:", borrowDate); // to remove later

  const returnDate = new Date(currentDate);
  returnDate.setDate(returnDate.getDate() + 14);
  const formattedReturnDate = returnDate.toLocaleDateString("en-GB");

  console.log("Return Date:", formattedReturnDate); // to remove later

  const options = {
    method: "PATCH",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: parseInt(user_id),
      borrow_date: borrowDate,
      return_date: formattedReturnDate,
      title: storedTitle,
    }),
  };

  try {
    const response = await fetch(
      `http://localhost:3000/books/${storedTitle}`,
      options
    );
    console.log("Response:", response); // to remove later
    if (response.status === 200) {
      alert(`Book borrowed successfully!`);
      // \nThe book must be returned on ${returnDate} // to implement later
      setTimeout(() => {
        localStorage.removeItem("title");
      }, 2000);
    } else {
      const errorData = await response.json();
      alert(`Book borrowing failed: ${errorData.message}`);
    }
  } catch (error) {
    console.error("Error borrowing book:", error);
  }
}
