What you will learn from this paragraph:

*Form validation with JavaScript:*
- The `validateForm` function is defined to handle form validation.
- The function takes an `event` parameter to prevent the default form submission behavior.
- The `event.preventDefault()` method is called to stop the form from being submitted.

*Accessing form elements:*
- The function retrieves the input elements and error spans using `document.getElementById`.
The email input element is obtained using `getElementById('email-input')`, and the corresponding error span is obtained using `getElementById('email-error')`.
Similarly, the password input element and error span are obtained using their respective IDs.

*Regular expressions for validation:*
- Regular expression patterns are defined for email and password validation.
- The `emailPattern` checks for a valid email format using a regular expression.
- The `passwordPattern` enforces specific criteria for a valid password (at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character).

*HTML form integration:*
- Regular expression patterns are defined for email and password validation.
- The `emailPattern` checks for a valid email format using a regular expression.
- The `passwordPattern` enforces specific criteria for a valid password (at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character).
