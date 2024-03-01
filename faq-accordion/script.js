const buttons = document.querySelectorAll('img');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let btns = Array.from(button.parentElement.children);
		btns = btns.filter(b => b.localName === 'img');
		btns.forEach(b => b.classList.toggle('hidden'));

		button.parentElement.classList.toggle('clicked');

		const answer = button.parentElement.nextElementSibling.classList.toggle('hidden');
	});
});