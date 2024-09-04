import React from 'react'

import baseLogo from 'assets/svg/logo-bonus.svg'

import { Heading, Paragraph } from 'components/common'

import {
	headerStyles,
	logoStyles,
	scoreNumberStyles,
	scoreStyles,
	scoreTextStyles,
} from './styles'

interface HeaderProps {
	score: number
}

export const Header: React.FunctionComponent<HeaderProps> = ({
	score = 0,
	...rest
}) => {
	return (
		<header className={headerStyles}>
			<img className={logoStyles} src={baseLogo} alt="base logo" />
			<div className={scoreStyles}>
				<Heading className={scoreTextStyles} level={6}>
					SCORE
				</Heading>
				<Paragraph className={scoreNumberStyles}>{score}</Paragraph>
			</div>
		</header>
	)
}
