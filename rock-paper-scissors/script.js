const rulesBtn = document.getElementById('rules-btn');
const rulesCloseBtn = document.getElementById('rules-close-btn');
const rulesModal = document.getElementById('rules-modal');
const rulesModalBg = document.getElementById('rules-modal-bg');

rulesBtn.addEventListener('click', () => {
	// Show the rules modal
	rulesModal.classList.remove('hidden');
	rulesModalBg.classList.remove('hidden');
});

rulesCloseBtn.addEventListener('click', () => {
	// Hide the rules modal
	rulesModal.classList.add('hidden');
	rulesModalBg.classList.add('hidden');
});