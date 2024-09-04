import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
	className?: string
}

const paragraphStyles =
	'font-barlow text-base mx-0 my-0 text-white tracking-widest'

export const Paragraph: React.FunctionComponent<ParagraphProps> = ({
	className = '',
	children,
	...rest
}) => {
	return (
		<p className={twMerge(paragraphStyles, className)} {...rest}>
			{children}
		</p>
	)
}
