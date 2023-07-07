const nameRef = document.querySelector(".name__input");
const emailRef = document.querySelector(".email__input");
const letterRef = document.querySelector(".profile__letter");
const logo = document.querySelector("#logo");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("searchbar");
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

searchForm.addEventListener("submit", formSubmission);

if (localStorage.getItem("token") == undefined) {
  window.location.assign("login.html");
}
localStorage.removeItem("title");

function openBurger() {
  burgerMenu.classList.toggle("open");
}

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
          localStorage.setItem("title", foundBook.title);
          window.location.assign("book.html");
        } else {
          throw new Error("Cannot find book");
        }
      })
      .catch((error) => {
        console.error("Error searching for books:", error);
      });
  } else {
    throw new Error("Search field is empty");
  }
}

async function getUserInfo() {
  const token = JSON.parse(localStorage.getItem("token"));
  const id = token.user_id;
  const response = await fetch(`http://localhost:3000/users/${id}`);
  const data = await response.json();
  emailRef.innerHTML = data.email;
  nameRef.innerHTML = data.first_name + " " + data.last_name;
  letterRef.innerHTML = data.first_name[0].toUpperCase();
}

async function currentlyReading() {
  const currentGrid = document.querySelector(".CurrentGrid");
  const token = JSON.parse(localStorage.getItem("token"));
  const id = token.user_id;
  const response = await fetch(`http://localhost:3000/books`);
  if (response.status === 200) {
    const books = await response.json();
    const filteredBooks = books.filter((book) => book.user_id == id);
    filteredBooks.forEach((book) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add("img_wrapper");
      currentGrid.appendChild(imgWrapper);
      const bookImage = document.createElement("img");
      bookImage.src = book.book_cover;
      bookImage.alt = book.title;
      bookImage.id = "borrowedBook";
      bookImage.classList.add("reading");

      const dueDate = document.createElement("h3");
      dueDate.innerHTML = "Due: " + book.return_date;
      imgWrapper.appendChild(dueDate);

      bookImage.addEventListener("click", openBook);
      imgWrapper.appendChild(bookImage);

      const returnBtn = document.createElement("input");
      returnBtn.value = "return";
      returnBtn.type = "button";
      returnBtn.id = "returnBtn";
      imgWrapper.appendChild(returnBtn);
      returnBtn.addEventListener("click", returnBook);
    });
  } else {
    window.location.assign("login.html");
  }
}

getUserInfo();
currentlyReading();

function openBook(e) {
  const title = e.target.alt;
  localStorage.setItem("title", title);
  window.location.assign("book.html");
}

async function returnBook(e) {
  const title = e.target.parentElement.querySelector("img").alt;
  const bookElement = e.target.parentElement;

  const data = {
    user_id: null,
    borrow_date: null,
    return_date: null,
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
    if (response.status == 200) {
      const responseData = await response.json();
      displayPopup(`Book returned successfully!`);

      const previousGrid = document.querySelector(".previousGrid");
      const currentGrid = document.querySelector(".CurrentGrid");

      currentGrid.removeChild(bookElement);

      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add("img_wrapper");
      previousGrid.appendChild(imgWrapper);
      const bookImage = document.createElement("img");
      bookImage.src = responseData.book_cover;
      bookImage.alt = responseData.title;
      bookImage.id = "borrowedBook";
      bookImage.classList.add("reading");
      imgWrapper.appendChild(bookImage);

      bookImage.addEventListener("click", openBook);

      console.log("Book moved to Previous Books:", responseData.title);
    } else {
      displayPopup(`Book return failed.`);
    }
  } catch (error) {
    console.error("Error returning book:", error);
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
