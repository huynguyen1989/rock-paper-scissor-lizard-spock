import { SIGN } from 'types'
import paperIcon from 'assets/svg/icon-paper.svg'
import rockIcon from 'assets/svg/icon-rock.svg'
import scissorsIcon from 'assets/svg/icon-scissors.svg'
import spockIcon from 'assets/svg/icon-spock.svg'
import lizardIcon from 'assets/svg/icon-lizard.svg'

export const borderColorsClasses = {
	[SIGN.PAPER]: 'bg-paper-gradient',
	[SIGN.SCISSORS]: 'bg-scissors-gradient',
	[SIGN.ROCK]: 'bg-rock-gradient',
	[SIGN.SPOCK]: 'bg-cyan-gradient',
	[SIGN.LIZARD]: 'bg-lizard-gradient',
}

export const icons = {
	[SIGN.PAPER]: paperIcon,
	[SIGN.ROCK]: rockIcon,
	[SIGN.SCISSORS]: scissorsIcon,
	[SIGN.SPOCK]: spockIcon,
	[SIGN.LIZARD]: lizardIcon,
}
