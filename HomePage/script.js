// Finds the estimate form in index.html.
const estimateForm = document.querySelector("#estimateForm");

// Finds the empty paragraph where we show a confirmation message.
const formNote = document.querySelector("#formNote");

// Runs when someone clicks the form's submit button.
estimateForm.addEventListener("submit", (event) => {
  // Stops the browser from refreshing the page.
  event.preventDefault();

  // Shows a temporary message. A real website would connect this form to email,
  // a booking tool, or a backend service before publishing.
  formNote.textContent = "Thank you! Your estimate request has been prepared. Connect this form to email or a booking tool before publishing.";

  // Clears the form fields after the message appears.
  estimateForm.reset();
});