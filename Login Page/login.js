// Function to handle login
function handleLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if username and password are not empty
    if (username === "" || password === "") {
      alert("Username and password cannot be empty");
      return;
    }
  
    // Check if user is already registered
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === null) {
      // New user, save username and password
      localStorage.setItem(username, password);
      alert("New user registered");
    } else {
      // Existing user, check password
      if (storedPassword !== password) {
        alert("Incorrect password");
        return;
      }
    }
  
    // Redirect to home.html
    window.location.href = "../Home Page/home.html";
  }
  
  // Attach event to login button
  const loginButton = document.getElementById("login-button");
  if (loginButton) {
    loginButton.addEventListener("click", handleLogin);
  }
  