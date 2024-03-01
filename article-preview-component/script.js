const cardBtn = document.querySelector('.btn-card');
const linksBox = document.querySelector('.links');

cardBtn.addEventListener('click', () => {
	cardBtn.classList.toggle('clicked');
	linksBox.classList.toggle('hide');
})