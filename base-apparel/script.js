const btn = document.querySelector('button');
const input = document.querySelector('input');
const errorIcon = document.getElementById('error-icon')
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message')

btn.addEventListener('click', () => {
	const valid = validateEmail(input.value);
	
	if (input.value === '' || input.value === undefined || !validateEmail(input.value)) {
		input.classList.add('error');
		errorIcon.classList.remove('hidden');
		errorMessage.classList.remove('hidden');
		successMessage.classList.add('hidden');
	} else {
		input.classList.remove('error');
		input.classList.add('success');
		errorIcon.classList.add('hidden');
		errorMessage.classList.add('hidden');
		successMessage.classList.remove('hidden');

		input.value = '';
	}
});

// https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
function validateEmail(e) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(e).search (filter) != -1;
}