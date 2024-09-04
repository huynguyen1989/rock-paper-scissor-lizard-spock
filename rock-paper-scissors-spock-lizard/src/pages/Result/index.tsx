import React from 'react'

import { ButtonIcon, Paragraph, Heading, Button } from 'components/common'
import { RESULT, SIGN } from 'types'
import {
	containerStyles,
	replayStyles,
	resultStyles,
	titleStyles,
	playerPickResult,
	computerPickResult,
	calculatedResult
} from './styles'

interface ResultProps {
	playerPick: SIGN | null
	computerPick: SIGN | null
	result: RESULT
	replayGame: () => void
	moveToStartStage: () => void
}

const Result: React.FunctionComponent<ResultProps> = ({
	playerPick,
	computerPick,
	result,
	replayGame,
	moveToStartStage,
}) => {
	const playAgain = () => {
		replayGame()
		moveToStartStage()
	}

	return (
		<div className={containerStyles}>

			<div className={playerPickResult}>
				<ButtonIcon sign={playerPick} className="hover:opacity-100 m-auto" />
				<Paragraph className={titleStyles}>YOU PICKED</Paragraph>
			</div>
			

			<div className={calculatedResult}>
				{result !== RESULT.PLAYER_HAS_NOT_CHOSEN_YET && (
					<>
						<Heading level={2} className={resultStyles}>
							{result}
						</Heading>
						<Button className={replayStyles} onClick={playAgain}>
							PLAY AGAIN
						</Button>
					</>
				)}	
			</div>
			

			<div className={computerPickResult}>
				<ButtonIcon sign={computerPick} className="hover:opacity-100 m-auto" />
				<Paragraph className={titleStyles}>THE HOUSE PICKED</Paragraph>	
			</div>
		</div>
	)
}

export default Result
