import data from './data.js';

const bars = document.querySelectorAll('.bar');
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
let max = 0;

const today = new Date().getDay() - 1;
if (today < 0) {
	today = 6;
}

data.forEach((day, index) => {
	const bar = bars[index];
	bar.previousElementSibling.innerHTML = `$${day.amount}`;

	if (day.amount > max) {
		max = day.amount;
	}
});

bars.forEach(bar => {
	// Mouse enter/leave to show dollar amounts
	bar.addEventListener('mouseenter', () => {
		bar.previousElementSibling.classList.remove('hidden');
	});

	bar.addEventListener('mouseleave', () => {
		bar.previousElementSibling.classList.add('hidden');
	});

	// Adjust bar height depending on dollar amount / max for the week
	const graphHeight = bar.parentElement.parentElement.clientHeight;
	const amt = +bar.previousElementSibling.innerHTML.slice(1);
	const height = (graphHeight * amt)/max;
	bar.style.height = `${height}px`;

	// Assign blue color for today's weekday
	if (bar.parentElement.id === weekdays[today]) {
		bar.classList.add('today');
	}
});