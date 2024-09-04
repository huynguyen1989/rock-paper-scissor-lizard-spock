import React, { Dispatch } from 'react'

import { SIGN } from 'types'
import { ButtonIcon } from 'components/common'
import { buttonsStyles, containerStyles, imageStyles } from './styles'

interface StartProps {
	setPlayerPick: Dispatch<SIGN | null>
	moveToNextStage: () => void
}

const Start: React.FunctionComponent<StartProps> = ({
	setPlayerPick,
	moveToNextStage,
}) => {
	const chooseSign = (event: React.MouseEvent<HTMLButtonElement>) => {
		let target = event.currentTarget
		let sign = target.getAttribute('data-sign') as SIGN
		setPlayerPick(sign)
		moveToNextStage()
	}

	function calculateRotation(index: number){
		// Force to not using memorized index value
		let weakIndex = index += 1
		
		const rotation = 72 *  weakIndex

		return rotation
	}

	const signValues = Object.values(SIGN)

	return (
		<div className={containerStyles}>
			<div className='pentagon-container'>
				<div className="select-container items-circular--position">
				{ 
					signValues && signValues.map((val, index) => (
						<ButtonIcon key={index}
							className={`${"deg" + calculateRotation(index)}`}
							sign={signValues[index]}						
							onClick={chooseSign}
						/>))
				}
				</div>
			</div>
		</div>
	)
}

export default Start
