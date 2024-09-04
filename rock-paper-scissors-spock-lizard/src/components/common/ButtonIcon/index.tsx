import React from 'react'
import { twMerge } from 'tailwind-merge'

import { SIGN } from 'types'
import { borderColorsClasses, icons } from './contants'
import { blankButtonStyles, buttonIconStyles, ContentStyles } from './styles'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	sign: SIGN | null
}

export const ButtonIcon: React.FunctionComponent<ButtonProps> = ({
	sign,
	children,
	className,
	...rest
}) => {
	return (
		<button
			className={twMerge(
				sign ? buttonIconStyles : blankButtonStyles,
				sign && borderColorsClasses[sign],
				className
			)}
			data-sign={sign}
			{...rest}
		>
			{sign && (
				<div className={ContentStyles}>
					<img src={icons[sign]} alt={sign} />
				</div>
			)}
		</button>
	)
}
