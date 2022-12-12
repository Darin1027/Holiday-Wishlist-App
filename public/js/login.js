const loginFormHandler = async (event) => {
  event.preventDefault();

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

// addEventListener when login submit button is event will trigger loginFormHandler function
document
  .querySelector("#sign-in-form")
  .addEventListener("submit", loginFormHandler);
