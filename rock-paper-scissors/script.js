// Show rules images
const rulesBtn = document.getElementById('rules-btn');
const rulesCloseBtn = document.getElementById('rules-close-btn');
const rulesModal = document.getElementById('rules-modal');
const rulesModalBg = document.getElementById('rules-modal-bg');

// Controlling game mode
const toggle = document.getElementById('toggle');
const toggleCover = document.getElementById('cover-toggle-container');
const mainRulesImg = document.getElementById('rules-img');
const bonusRulesImg = document.getElementById('bonus-rules-img');
const mainLogo = document.getElementById('main-logo');
const bonusLogo = document.getElementById('bonus-logo');
const mainGame = document.getElementById('main');
const bonusGame = document.getElementById('bonus');
let mode = 'Main';

// Result section
const resultSection = document.getElementById('result');
const placeholder = document.getElementById('placeholder');
const userCol = document.getElementById('you');
const compCol = document.getElementById('house');
const playAgain = document.getElementById('play-again');
const playAgainBtn = document.getElementById('play-again-btn');

// Key variables
const mainOptions = ['rock', 'paper', 'scissors'];
const bonusOptions = ['paper', 'rock', 'lizard', 'spock', 'scissors'];
const resultOptions = ['draw', 'win', 'lose'];
let mainScore = +JSON.parse(localStorage.getItem('main'));
let bonusScore = +JSON.parse(localStorage.getItem('bonus'));
const score = document.getElementById('score');
const gameButtons = document.querySelectorAll('.btn');

// Controlling game mode and showing/closing rules
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

toggle.addEventListener('change', (e) => {
	// Change game mode
	if (toggle.checked) {
		mainRulesImg.classList.add('hidden');
		bonusRulesImg.classList.remove('hidden');
		mainLogo.classList.add('hidden');
		bonusLogo.classList.remove('hidden');
		mainGame.classList.add('hidden');
		bonusGame.classList.remove('hidden');
		mode = 'Bonus';
	} else {
		mainRulesImg.classList.remove('hidden');
		bonusRulesImg.classList.add('hidden');
		mainLogo.classList.remove('hidden');
		bonusLogo.classList.add('hidden');
		mainGame.classList.remove('hidden');
		bonusGame.classList.add('hidden');
		mode = 'Main';
	}

	getScores();
});

// Trigger game when user clicks a game button
gameButtons.forEach(btn => {
	btn.addEventListener('click', (btn) => playGame(btn));
});

// Play game
function playGame(btn) {
	// Get players' moves
	const user = btn.srcElement.id;
	let comp = '';
	let winner = '';
	
	if (mode === 'Main') {
		comp = mainOptions[Math.floor(Math.random() * mainOptions.length)];

		// Decide winner
		winner = getWinnerMain(user, comp);

		// Hide main game
		mainGame.classList.add('hidden');
	} else {
		comp = bonusOptions[Math.floor(Math.random() * bonusOptions.length)];

		// Decide winner
		winner = getWinnerBonus(user, comp);

		// Hide main game
		bonusGame.classList.add('hidden');
	}

	// Show results page
	resultSection.classList.remove('hidden');
	toggleCover.classList.remove('hidden');

	setTimeout(() => {
		buildResultBtn(user, userCol);

		setTimeout(() => {
			placeholder.classList.add('hidden');

			setTimeout(() => {
				buildResultBtn(comp, compCol);

				setTimeout(() => {
					if (winner === 'user') {
						const button = userCol.querySelector('.btn');
						button.classList.add('winner');
					} else if (winner === 'comp') {
						const button = compCol.querySelector('.btn');
						button.classList.add('winner');
					}

					playAgain.classList.remove('hidden');
					const h1 = document.createElement('h1');
					h1.classList.add('play-again-title');
					
					if (winner === 'user') {
						h1.innerText = 'YOU WON';

						if (mode === 'Main') {
							mainScore++;
							localStorage.setItem('main', JSON.stringify(mainScore));
						} else {
							bonusScore++;
							localStorage.setItem('bonus', JSON.stringify(bonusScore));
						}
						
					} else if (winner === 'comp') {
						h1.innerText = 'YOU LOSE';
					} else {
						h1.innerText = 'DRAW';
					}

					playAgain.insertBefore(h1, playAgain.firstChild);
					getScores();
 					
				}, 1000);
			}, 100);
		}, 1500);
	}, 100);

}

// Get game winner (main mode)
function getWinnerMain(user, comp) {
	if (user === comp) {
		return 'draw';
	}

	if ((user === 'rock' && comp === 'paper') || (user === 'paper' && comp === 'scissors') || (user === 'scissors' && comp === 'rock')) {
		return 'comp';
	} else {
		return 'user';
	}
}

// Get game winner (bonus mode)
// https://stackoverflow.com/questions/22623331/rock-paper-scissors-lizard-spock-in-javascript
function getWinnerBonus(user, comp) {
	if (user === comp) {
		return 'draw';
	}

	const userIdx = bonusOptions.indexOf(user);
	const compIdx = bonusOptions.indexOf(comp);
	let diff = compIdx - userIdx;

	if (diff < 0) {
		diff += bonusOptions.length;
	}

	while (diff > 2) {
		diff -= 2;
	}

	if (resultOptions[diff] === 'win') {
		return 'user';
	} else {
		return 'comp';
	}
}

function buildResultBtn(player, col) {
	const div = document.createElement('div');
	div.classList.add('btn');
	div.classList.add('btn-result');
	div.id = player;
	div.innerHTML = `
		<div class="btn-img">
		<img src="./public/icon-${player}.svg" alt="${player}">
	</div>
	`;
	col.appendChild(div);
}

// Get localStorage game scores
function getScores() {
	if (mode === 'Main') {
		score.innerText = mainScore;
	} else {
		score.innerText = bonusScore;
	}
}

// Reset
playAgainBtn.addEventListener('click', () => {
	resultSection.classList.add('hidden');
	userCol.querySelector('.btn').remove();
	compCol.querySelector('.btn').remove();
	playAgain.classList.add('hidden');
	playAgain.querySelector('h1').remove();
	placeholder.classList.remove('hidden');
	toggleCover.classList.add('hidden');

	if (mode === 'Main') {
		mainGame.classList.remove('hidden');
	} else {
		bonusGame.classList.remove('hidden');
	}
	
});

// Initialize
getScores();