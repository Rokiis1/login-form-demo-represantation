function validateForm(event) {
  event.preventDefault(); // Prevent default form submission
  // Get the input elements and the error spans
  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');
  const passwordInput = document.getElementById('password-input');
  const passwordError = document.getElementById('password-error');

  // Get the values of email and password fields
  const email = emailInput.value;
  const password = passwordInput.value;

  // Define the regular expression patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if the email matches the pattern
  if (!emailPattern.test(email)) {
    // Set custom validity to override default validation message
    emailInput.setCustomValidity('Please enter a valid email address.');
    emailInput.reportValidity();
    emailError.textContent = 'Please enter a valid email address.';
    emailError.style.color = 'red';
    return false; // Prevent form submission
  }

  // Clear the error message for the email field
  emailInput.setCustomValidity('');
  emailError.textContent = '';
  emailError.style.color = '';

  // Check if the password matches the pattern
  if (!passwordPattern.test(password)) {
    // Set custom validity to override default validation message
    passwordInput.setCustomValidity('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.');
    passwordInput.reportValidity();
    passwordError.textContent = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.';
    passwordError.style.color = 'red';
    return false; // Prevent form submission
  }

  // Clear the error message for the password field
  passwordInput.setCustomValidity('');
  passwordError.textContent = '';
  passwordError.style.color = '';

  return true; // Allow form submission
}

  
  
  
  
  
  