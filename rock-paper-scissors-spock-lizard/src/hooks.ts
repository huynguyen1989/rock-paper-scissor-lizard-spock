import { useEffect, useState } from 'react'

import { MODAL_STATUS, RESULT, SIGN, STAGE } from 'types'
import { findOutResult } from 'utils'

export const useRuleModal = () => {
	const [isRulesOpen, setOpen] = useState<MODAL_STATUS>(
		MODAL_STATUS.FIRST_TIME_LOADED
	)

	const openRules = () => {
		setOpen(MODAL_STATUS.OPENED)
	}

	const closeRules = () => {
		setOpen(MODAL_STATUS.CLOSED)
	}

	return { isRulesOpen, openRules, closeRules }
}

export const useStage = () => {
	const [stage, setStage] = useState<STAGE>(STAGE.START)
	return { stage, setStage }
}

export const useGame = () => {
	const [playerPick, setPlayerPick] = useState<SIGN | null>(null)
	const [computerPick, setComputerPick] = useState<SIGN | null>(null)
	const memoriedScore = Number(localStorage.getItem('score')) | 0
	const [score, setScore] = useState<number>(memoriedScore)
	const [result, setResult] = useState<RESULT>(RESULT.PLAYER_HAS_NOT_CHOSEN_YET)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (playerPick) {
				const chooseRadomSign = (): SIGN => {
					const signs = Object.values(SIGN)
					const randomKey = Math.floor(Math.random() * signs.length)
					return signs[randomKey]
				}
				const randomSign = chooseRadomSign()
				setComputerPick(randomSign)
			}
		}, 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [playerPick])

	useEffect(() => {
		if (playerPick && computerPick) {
			const result = findOutResult(playerPick, computerPick)
			setResult(result)
			if (result === RESULT.PLAYER_WIN) setScore((prevScore) => prevScore + 1)
			if (result === RESULT.COMPUTER_WIN && score === 0) setScore(0)
			if (result === RESULT.COMPUTER_WIN && score > 0)
				setScore((prevScore) => prevScore - 1)
		}
		// eslint-disable-next-line
	}, [computerPick])

	useEffect(() => {
		localStorage.setItem('score', String(score))
	}, [score])

	const replayGame = () => {
		setPlayerPick(null)
		setComputerPick(null)
		setResult(RESULT.PLAYER_HAS_NOT_CHOSEN_YET)
	}

	const resetGame = () => {
		setPlayerPick(null)
		setComputerPick(null)
		setResult(RESULT.PLAYER_HAS_NOT_CHOSEN_YET)
		setScore(0)
	}

	return {
		playerPick,
		computerPick,
		score,
		result,
		setPlayerPick,
		setScore,
		replayGame,
		resetGame,
	}
}
