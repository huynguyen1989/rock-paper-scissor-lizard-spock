export enum SIGN {
	ROCK = 'rock',
	PAPER = 'paper',
	SCISSORS = 'scissors',
	LIZARD = 'lizard',
	SPOCK = 'spock',
}

export enum MODAL_STATUS {
	OPENED,
	CLOSED,
	FIRST_TIME_LOADED,
}

export enum STAGE {
	START = 'START',
	RESULT = 'RESULT',
}

export enum RESULT {
	DRAW = 'DRAW',
	PLAYER_WIN = 'YOU WIN',
	COMPUTER_WIN = 'YOU LOSE',
	PLAYER_HAS_NOT_CHOSEN_YET = 'PLAYER_HAS_NOT_CHOSEN_YET',
}
