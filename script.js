const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity('');
  emailInput.checkValidity();
});

emailInput.addEventListener('invalid', () => {
  if (emailInput.value === '') {
    emailInput.setCustomValidity('Enter an email address.');
  } else {
    emailInput.setCustomValidity('Enter a valid email address.');
  }
});

const countryInput = document.getElementById('country');

countryInput.addEventListener('input', () => {
  countryInput.setCustomValidity('');
  countryInput.checkValidity();
});

countryInput.addEventListener('invalid', () => {
  countryInput.setCustomValidity('Enter a country.');
});

const zipInput = document.getElementById('zipcode');

zipInput.addEventListener('input', () => {
  zipInput.setCustomValidity('');
  zipInput.checkValidity();
});

zipInput.addEventListener('invalid', () => {
  if (zipInput.value === '') {
    zipInput.setCustomValidity('Enter a zip code.');
  } else {
    zipInput.setCustomValidity('Zip code must be between 5 and 10 digits.');
  }
});

const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', () => {
  passwordInput.setCustomValidity('');
  passwordInput.checkValidity();
});

passwordInput.addEventListener('invalid', () => {
  if (passwordInput.value === '') {
    passwordInput.setCustomValidity('Enter a password.');
  } else {
    passwordInput.setCustomValidity('Password must be at least 8 characters long.');
  }
});

const confirmPassword = document.getElementById('confirmpassword');

confirmPassword.addEventListener('input', () => {
  confirmPassword.setCustomValidity('');
  confirmPassword.checkValidity();
});

function matchPassword() {
  if ((confirmPassword.value !== '')
  && (passwordInput.value !== '')
  && (confirmPassword.value !== passwordInput.value)) {
    confirmPassword.setCustomValidity('Passwords do not match.');
  } else if ((passwordInput !== '')
  && (confirmPassword.value === '')) {
    confirmPassword.setCustomValidity('You must confirm your password.');
  } else if ((emailInput.checkValidity())
  && (countryInput.checkValidity())
  && (zipInput.checkValidity())
  && (passwordInput.checkValidity())
  && (confirmPassword.checkValidity())
  && (confirmPassword.value === passwordInput.value)) {
    alert('Form Submitted!');
  }
}

const submitButton = document.getElementById('submitbutton');

submitButton.addEventListener('click', matchPassword);
