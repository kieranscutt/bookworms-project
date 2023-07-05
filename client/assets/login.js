document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.get("email"),
      password: form.get("password"),
    }),
  };

  const response = await fetch("http://localhost:3000/users/login", options);
  const data = await response.json();

  if (response.status == 200) {
    localStorage.setItem("token", JSON.stringify(data.token));
    window.location.assign("index.html");
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token)
  } else {
    alert(data.error);
  }
});

module.exports = token