const game = () => {
	let pScore = 0;
	let cScore = 0;

	const startGame = () => {
		const playBtn = document.querySelector('.intro button')
		const intro = document.querySelector('.intro')
		const match = document.querySelector('.match')

		playBtn.addEventListener('click', () => {
			intro.classList.add('fadeOut')
			match.classList.add('fadeIn')
		})
	}
	const playMatch = () => {
		const pMove = document.querySelectorAll('.options button')

		const pHand = document.querySelector('.player-hand')
		const cHand = document.querySelector('.computer-hand')
		const hands = document.querySelectorAll('.hands img')
		hands.forEach(hand => {
			hand.addEventListener('animationend', function () {
				this.style.animation = ''
			})
		})
		const cOptions = ['rock', 'paper', 'scissors']

		pMove.forEach((option) => {
			option.addEventListener('click', function () {
				const cNumber = Math.floor(Math.random() * 3)
				const cChoice = cOptions[cNumber];
				
				setTimeout(() => {
					checkScore(this.textContent, cChoice)
					pHand.src = `./assets/${this.textContent}.png`
					cHand.src = `./assets/${cChoice}.png`
				},2000)

				pHand.style.animation = "shakePlayer 2s ease"
				cHand.style.animation = "shakeComputer 2s ease"
			})
		})
	}

	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p')
		const computerScore = document.querySelector('.computer-score p')
		playerScore.textContent = pScore
		computerScore.textContent = cScore
	}

	const checkScore = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner')
		if (playerChoice === computerChoice) {
			winner.textContent = 'It is a tie'
			return;
		}
		if (playerChoice === 'rock') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Player Wins'
				pScore++
				updateScore()
				return
			} else {
				winner.textContent = 'Computer Wins'
				cScore++
				updateScore()
				return
			}
		}
		if (playerChoice === 'paper') {
			if (computerChoice === 'scissors') {
				winner.textContent = 'Computer Wins'
				cScore++
				updateScore()
				return
			} else {
				winner.textContent = 'Player Wins'
				pScore++
				updateScore()
				return
			}
		}
		if (playerChoice === 'scissors') {
			if (computerChoice === 'paper') {
				winner.textContent = 'Player Wins'
				pScore++
				updateScore()
				return
			} else {
				winner.textContent = 'Computer Wins'
				cScore++
				updateScore()
				return
			}
		}
	}

	startGame();
	playMatch();
}

game();