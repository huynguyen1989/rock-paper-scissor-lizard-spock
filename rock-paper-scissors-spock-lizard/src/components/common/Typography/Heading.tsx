import React from 'react'
import { twMerge } from 'tailwind-merge'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level?: number
	className?: string
}

const headingStyles =
	'mx-0 my-0 block font-barlow text-white tracking-wide font-bold'
const NUMBER_OF_HEADINGS = 6

export const Heading: React.FunctionComponent<HeadingProps> = ({
	level = 1,
	className = '',
	children,
	...rest
}) => {
	const headings = [
		<h1 className={twMerge('text-2xl', headingStyles, className)} {...rest}>
			{children}
		</h1>,
		<h1 className={twMerge('text-2xl', headingStyles, className)} {...rest}>
			{children}
		</h1>,
		<h2 className={twMerge('text-xl', headingStyles, className)} {...rest}>
			{children}
		</h2>,
		<h3 className={twMerge('text-lg', headingStyles, className)} {...rest}>
			{children}
		</h3>,
		<h4 className={twMerge('text-base', headingStyles, className)} {...rest}>
			{children}
		</h4>,
		<h5 className={twMerge('text-sm', headingStyles, className)} {...rest}>
			{children}
		</h5>,
		<h6 className={twMerge('text-sm', headingStyles, className)} {...rest}>
			{children}
		</h6>,
	]

	return <>{level <= NUMBER_OF_HEADINGS && headings[level]}</>
}
