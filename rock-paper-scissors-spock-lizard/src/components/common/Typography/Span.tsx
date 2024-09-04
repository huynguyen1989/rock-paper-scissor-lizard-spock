import React from 'react'
import { twMerge } from 'tailwind-merge'

interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
	className?: string
}

const spanStyles =
	'font-barlow text-base leading-4 mx-0 my-0 text-white font-semibold h-fit tracking-widest'

export const Span: React.FunctionComponent<SpanProps> = ({
	className = '',
	children,
	...rest
}) => {
	return (
		<span className={twMerge(spanStyles, className)} {...rest}>
			{children}
		</span>
	)
}
