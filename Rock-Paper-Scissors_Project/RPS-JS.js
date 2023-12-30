//--------------------------------------------------------------------------
const score = {
	wins: 0,
	loses: 0,
	ties: 0
};
updateScoreEle();
function updateScoreEle(){
	document.querySelector('.updateScore').innerHTML =
			`Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;

}
//--------------------------------------------------------------------------
function playGame(playerMove) {
	const computerMove = pickComputerMove();


	let result = '';

	if (playerMove === 'Scissors') {
		if (computerMove === 'Rock') {
			result = 'You lose.';

		} else if (computerMove === 'Paper') {
			result = 'You win.';

		} else if (computerMove === 'Scissors') {
			result = 'Tie.';

		}
	}else if(playerMove === 'Rock'){
		if (computerMove === 'Rock'){
			result = 'Tie.';

		}else if (computerMove === 'Paper'){
			result = 'You lose.';

		}else if (computerMove === 'Scissors'){
			result = 'You win.'

		}
	}else if (playerMove === 'Paper'){
		if (computerMove === 'Rock'){
			result = 'You win.';

		}else if (computerMove === 'Paper'){
			result = 'Tie.';

		}else if (computerMove === 'Scissors'){
			result = 'You lose.';

		}
	}

	if (result === 'You win.'){
		score.wins += 1;
	}else if (result === 'You lose.'){
		score.loses += 1;
	}else if (result === 'Tie.'){
		score.ties += 1;
	}
	updateScoreEle();
	document.querySelector('.js-result').innerHTML = result;
	document.querySelector('.js-moves').innerHTML = `You <img class="icon" src="Images/${playerMove}-emoji.png" alt="">
	<img class="icon" src="Images/${computerMove}-emoji.png" alt=""> Computer`;
}



function pickComputerMove(){
	let computerMove = '';

	const randomNumber = Math.random();

	if (randomNumber>=0 && randomNumber <= 1/3){
		computerMove= 'Rock';
	}else if (randomNumber > 1/3 && randomNumber <= 2/3){
		computerMove = 'Paper';
	}else if(randomNumber > 2/3 && randomNumber < 1){
		computerMove = 'Scissors';

	}
	return computerMove;
}