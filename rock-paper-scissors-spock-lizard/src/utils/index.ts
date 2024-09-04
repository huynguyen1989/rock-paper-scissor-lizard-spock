import { rules } from 'contants'
import { RESULT, SIGN } from 'types'


export const findOutResult = (playerPick: SIGN, computerPick: SIGN): RESULT => {
	console.log(rules[SIGN.PAPER])
	if (!playerPick) return RESULT.PLAYER_HAS_NOT_CHOSEN_YET
	if (playerPick === computerPick) return RESULT.DRAW
	else if (rules[playerPick].has(computerPick)) {
		return RESULT.PLAYER_WIN
	} else {
		return RESULT.COMPUTER_WIN
	}
}
