const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.querySelector(".error-msg")

const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function required(element) {
  if (element.value === "" || null) {
    error.style.display = "block";
    error.innerText = "Please type in your email";
  }
  if (!element.value.match(regex) && element.value !== "" && element.value != null) {
    error.style.display = "block";
    error.innerText = "Please provide a vaild email";
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  required(email)
})