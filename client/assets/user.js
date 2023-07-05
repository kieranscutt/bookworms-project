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

localStorage.removeItem("title");

function openBurger() {
  burgerMenu.classList.toggle("open");
}

//token = {token_id: 7, user_id: 3, token: '07cff7b3-0f0a-4382-b035-58e244061e1d'}

async function emailInput() {
  const response = await fetch("http://localhost:3000/users/email");
  const data = await response.json();
  emailRef.innerHTML = data.email;
}

async function nameInput() {
  const response = await fetch("https//:loacalhost:3000/users/first_name");
  const data = await response.json();
  nameRef.innerHTML = data.first_name;
}

async function nameInput() {
  const response = await fetch("https//:loacalhost:3000/users/first_name");
  const data = await response.json();
  nameRef.innerHTML = data.first_name[0];
}

letterInput();
nameInput();
emailInput();
