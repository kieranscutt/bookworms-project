// home page
const hamburger = document.querySelector("#hamburger");
const burgerMenu = document.querySelector("#burger-menu");
const genreButton = document.querySelector("#dropdown-button");
const genreMenu = document.querySelector("#genre-menu");
const userIcon = document.querySelector("#user-icon");
const trendingContainer = document.querySelector(".trendingBooks");
const trendingBook1 = document.querySelector("#trending1");
const trendingBook2 = document.querySelector("#trending2");
const trendingBook3 = document.querySelector("#trending3");
const trendingBook4 = document.querySelector("#trending4");
const trendingBook5 = document.querySelector("#trending5");

hamburger.addEventListener("click", openBurger);
genreButton.addEventListener("click", openGenre);
userIcon.addEventListener("click", () => {
  window.location.assign("./user.html");
});

function openBurger() {
  burgerMenu.classList.toggle("open");
}

function openGenre() {
  genreMenu.classList.toggle("open");
}

async function loadTrendingBooks() {
  const options = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  const response = await fetch("http://localhost:3000/books", options);
  console.log(response);
  if (response.status === 200) {
    const books = await response.json();
    trendingBook1.src = books[0].book_cover;
    trendingBook1.alt = books[0].title;
    trendingBook2.src = books[1].book_cover;
    trendingBook2.alt = books[1].title;
    trendingBook3.src = books[2].book_cover;
    trendingBook3.alt = books[2].title;
    trendingBook4.src = books[5].book_cover;
    trendingBook4.alt = books[5].title;
    trendingBook5.src = books[4].book_cover;
    trendingBook5.alt = books[4].title;
  } else {
    window.location.assign("./index.html");
  }
}

loadTrendingBooks();
