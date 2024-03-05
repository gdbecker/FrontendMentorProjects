const btn = document.querySelector('button');
const input = document.querySelector('input');
const error = document.getElementById('error-message');
const success = document.getElementById('success-message')

btn.addEventListener('click', () => {
	const valid = validateEmail(input.value);
	
	if (input.value === '' || input.value === undefined || !validateEmail(input.value)) {
		input.classList.add('error');
		error.classList.remove('hidden');
		success.classList.add('hidden');
	} else {
		input.classList.remove('error');
		input.classList.add('success');
		error.classList.add('hidden');
		success.classList.remove('hidden');

		input.value = '';
	}
});

// https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
function validateEmail(e) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(e).search (filter) != -1;
}