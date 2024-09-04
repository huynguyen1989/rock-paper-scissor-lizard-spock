import { twMerge } from 'tailwind-merge'

import { Header } from 'components/layout'
import { Button, Modal } from 'components/common'
import Start from 'pages/Start'
import Result from 'pages/Result'
import { useGame, useRuleModal, useStage } from './hooks'
import { STAGE } from 'types'
import { appStyles, buttonStyles, mainStyles } from './styles'

const App = () => {
	const { isRulesOpen, openRules, closeRules } = useRuleModal()
	const { stage, setStage } = useStage()
	const { playerPick, computerPick, score, result, setPlayerPick, replayGame } =
		useGame()

	const moveToResultStage = () => {
		setStage(STAGE.RESULT)
	}

	const moveToStartStage = () => {
		setStage(STAGE.START)
	}

	return (
		<div className={twMerge(appStyles)}>
			<Header score={score} />
			<main className={mainStyles}>
				{stage === STAGE.START && (
					<Start
						setPlayerPick={setPlayerPick}
						moveToNextStage={moveToResultStage}
					/>
				)}
				{stage === STAGE.RESULT && (
					<Result
						playerPick={playerPick}
						computerPick={computerPick}
						result={result}
						replayGame={replayGame}
						moveToStartStage={moveToStartStage}
					/>
				)}
			</main>
			<Button isOutlined onClick={openRules} className={buttonStyles}>
				RULES
			</Button>
			<Modal isOpen={isRulesOpen} close={closeRules} />
		</div>
	)
}

export default App
