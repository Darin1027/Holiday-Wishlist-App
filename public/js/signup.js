const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("is this working");

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
      console.log("should happen 2nd");
      document.location.replace("/profile");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// addEventListener when submit submit button is event will trigger signupFormHandler function
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
