const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("is this working");

  // Query Selector to grab login details
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Validating if a email and password are filled in
  if (email && password) {
    // Fetching from /api/users/login Post route
    // We stringify the email and password object due to http protocol
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("Hello world");
    // if response is ok the user is redirected to / route
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  // Query Selector to grab signup details
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  // Validating if a email, username and password are filled in
  if (username && email && password) {
    // Fetching from /api/users Post route
    // We stringify the email and password object due to http protocol
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // if response is ok the user is redirected to / route
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// addEventListener when login submit button is event will trigger loginFormHandler function
document
  .querySelector("#sign-in-form")
  .addEventListener("submit", loginFormHandler);
// addEventListener when submit submit button is event will trigger signupFormHandler function
// document
// .querySelector(".signup-form")
// .addEventListener("submit", signupFormHandler);
