import { SIGN } from 'types'

export const rules = {
	[SIGN.PAPER]: new Set([SIGN.ROCK, SIGN.SPOCK]),
	[SIGN.ROCK]: new Set([SIGN.SCISSORS, SIGN.LIZARD]),
	[SIGN.SCISSORS]: new Set([SIGN.PAPER, SIGN.LIZARD]),
	[SIGN.LIZARD]: new Set([SIGN.SPOCK, SIGN.PAPER]),
	[SIGN.SPOCK]: new Set([SIGN.ROCK, SIGN.SCISSORS]),
}
