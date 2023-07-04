const nameRef = document.querySelector(".name__input")
const emailRef = document.querySelector(".email__input")
const letterRef = document.querySelector(".profile__letter")

async function emailInput() {
    const response = await fetch("http://localhost:3000/users/email");
    const data = await response.json();
    emailRef.innerHTML = data.email
}

async function nameInput() {
    const response = await fetch("https//:loacalhost:3000/users/first_name");
    const data = await response.json();
    nameRef.innerHTML = data.first_name
}

async function nameInput() {
    const response = await fetch("https//:loacalhost:3000/users/first_name");
    const data = await response.json();
    nameRef.innerHTML = data.first_name[0]
}


letterInput()
nameInput()
emailInput()
