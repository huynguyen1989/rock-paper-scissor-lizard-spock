import React from 'react'
import { twMerge } from 'tailwind-merge'

import { Span } from 'components/common'
import {
	buttonStyles,
	outlinedStyles,
	filledStyles,
	outlinedTextStyles,
	filledTextStyles,
} from './styles'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
	isOutlined?: boolean
}

export const Button: React.FunctionComponent<ButtonProps> = ({
	isOutlined = false,
	children,
	className,
	...rest
}) => {
	return (
		<button
			className={twMerge(
				buttonStyles,
				isOutlined ? outlinedStyles : filledStyles,
				className
			)}
			{...rest}
		>
			<Span className={isOutlined ? outlinedTextStyles : filledTextStyles}>
				{children}
			</Span>
		</button>
	)
}
