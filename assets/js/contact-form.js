document.getElementById("contact-form").addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  let emailDomains = ["@gmail.com", "@outlook.com", "@icloud.com", "@live.com", "@proton.me", "@yahoo.co.in", "@yahoo.in", "@yahoo.com", "@rediffmail.com"];
  let nameField = document.getElementById("name-field").value.trim();
  let emailField = document.getElementById("email-field").value.trim();
  let messageField = document.getElementById("message-field").value.trim();
  let subjectField = document.getElementById("subject-field").value.trim();

  let loadingMessage = document.querySelector('.loading');
  let successMessage = document.querySelector('.sent-message');
  let errorMessage = document.querySelector('.error-message');

  // Reset all messages
  successMessage.classList.add('d-none');
  errorMessage.classList.add('d-none');
  loadingMessage.classList.add('d-none');

  // Basic field validation
  let errors = [];

  if (nameField === "") {
    errors.push("Please enter your name.");
  }

  if (emailField === "") {
    errors.push("Please enter your email.");
  } else if (!emailField.includes("@")) {
    errors.push("Please enter a valid email with '@'.");
  } else if (!emailDomains.some(domain => emailField.includes(domain))) {
    errors.push("Invalid email domain. Please use a valid domain.");
  }

  if (messageField === "") {
    errors.push("Please enter your message.");
  }

  // Check if there are any errors
  if (errors.length > 0) {
    // Display all errors in the error message element
    errorMessage.classList.remove('d-none');
    errorMessage.innerText = errors.join('\n');
    return;
  }

  // Show loading state
  loadingMessage.classList.remove('d-none');

  // Simulate email sending (Replace with actual email sending logic)
  setTimeout(function () {
    // Hide loading state
    loadingMessage.classList.add('d-none');

    // Simulate success or failure response
    let emailSendingSuccess = true; // Assume success for now
    if (emailSendingSuccess) {
      successMessage.classList.remove('d-none');
      successMessage.innerText = "Thank you for contacting me. I'll get to you soon!";
      console.log("Email sent successfully.");
    } else {
      errorMessage.classList.remove('d-none');
      errorMessage.innerText = "There was a problem sending your message. Please try again later.";
      console.log("Error in sending email.");
    }
  }, 2000); // Simulate network delay
});
