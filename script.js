/* ===== PORTFOLIO FUNCTIONAL LOGIC ===== */

/* --- Example of SCOPE, PARAMETERS, RETURN VALUES --- */

// Function to validate form input (demonstrates parameters & return values)
function validateForm(name, email, message) {
  if (name.length < 2) return "Name too short!";
  if (!email.includes("@")) return "Invalid email!";
  if (message.length < 10) return "Message too short!";
  return "Success"; // return value
}

// Example of GLOBAL scope variable
let isDarkMode = false;

// Function to toggle theme (demonstrates local scope)
function toggleTheme() {
  const body = document.body;
  isDarkMode = !isDarkMode; // update global variable
  body.classList.toggle("dark");
}

// ===== EVENT LISTENERS =====

// Theme toggle button
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  // Get input values (LOCAL scope variables)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Call validation function
  const result = validateForm(name, email, message);

  // Trigger animation + show result
  if (result === "Success") {
    alert("Message sent successfully!");
  } else {
    alert(result);
  }

  // Animate box when button clicked
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animateBox");
  box.classList.add("bounce");

  // remove animation class after it ends (so it can be reused)
setTimeout(() => box.classList.remove("bounce"), 600);
});

// Start/Stop Loader
document.getElementById("startLoader").addEventListener("click", () => {
  document.getElementById("loader").classList.add("spin");
});

document.getElementById("stopLoader").addEventListener("click", () => {
  document.getElementById("loader").classList.remove("spin");
});


});
