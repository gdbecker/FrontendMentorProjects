const btn = document.querySelector('button');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const firstNameError = document.getElementById('error-first-name');
const lastNameError = document.getElementById('error-last-name');
const emailEmptyError = document.getElementById('error-email-empty');
const emailInvalidError = document.getElementById('error-email-invalid');
const passwordError = document.getElementById('error-password');

const firstNameErrorIcon = document.getElementById('first-name-error-icon');
const lastNameErrorIcon = document.getElementById('last-name-error-icon');
const emailErrorIcon = document.getElementById('email-error-icon');
const passwordErrorIcon = document.getElementById('password-error-icon');

const error = document.getElementById('error-message');
const success = document.getElementById('success-message')

btn.addEventListener('click', () => {
	const validEmail = validateEmail(email.value);

	if (firstName.value === '' || firstName.value === undefined) {
		firstName.classList.add('error');
		firstNameError.classList.remove('hidden');
		firstNameErrorIcon.classList.remove('hidden');
	} else {
		firstName.classList.remove('error');
		firstNameError.classList.add('hidden');
		firstNameErrorIcon.classList.add('hidden');
	}

	if (lastName.value === '' || lastName.value === undefined) {
		lastName.classList.add('error');
		lastNameError.classList.remove('hidden');
		lastNameErrorIcon.classList.remove('hidden');
	} else {
		lastName.classList.remove('error');
		lastNameError.classList.add('hidden');
		lastNameErrorIcon.classList.add('hidden');
	}

	if (email.value === '' || email.value === undefined) {
		email.classList.add('error');
		emailEmptyError.classList.remove('hidden');
		emailInvalidError.classList.add('hidden');
		emailErrorIcon.classList.remove('hidden');
	} else if (!validEmail) {
		email.classList.add('error');
		emailEmptyError.classList.add('hidden');
		emailInvalidError.classList.remove('hidden');
		emailErrorIcon.classList.remove('hidden');
	} else {
		email.classList.remove('error');
		emailEmptyError.classList.add('hidden');
		emailInvalidError.classList.add('hidden');
		emailErrorIcon.classList.add('hidden');
	}

	if (password.value === '' || password.value === undefined) {
		password.classList.add('error');
		passwordError.classList.remove('hidden');
		passwordErrorIcon.classList.remove('hidden');
	} else {
		password.classList.remove('error');
		passwordError.classList.add('hidden');
		passwordErrorIcon.classList.add('hidden');
	}

	if (firstName.value && lastName.value && email.value && validEmail && password.value) {
		firstName.value = '';
		lastName.value = '';
		email.value = '';
		password.value = '';
	}
});

// https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
function validateEmail(e) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(e).search (filter) != -1;
}