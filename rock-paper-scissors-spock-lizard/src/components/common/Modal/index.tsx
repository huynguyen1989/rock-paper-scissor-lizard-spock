import React from 'react'
import { createPortal } from 'react-dom'
import { twMerge } from 'tailwind-merge'

import crossIcon from 'assets/svg/icon-close.svg'
import rulesIcon from 'assets/svg/image-rules-bonus.svg'
import { Heading } from 'components/common'
import { MODAL_STATUS } from 'types'
import {
	overlayStyles,
	openedOverlayStyles,
	closedOverlayStyles,
	modalStyles,
	closeButtonStyles,
	headingStyles,
	rulesStyles,
} from './styles'

interface ModalProps {
	isOpen: MODAL_STATUS
	close: () => void
}

export const Modal: React.FunctionComponent<ModalProps> = ({
	isOpen,
	close,
}) => {
	const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
		let { target } = event
		let { currentTarget } = event
		if (target === currentTarget) close()
	}

	const handleClose = () => {
		close()
	}
	return (
		<>
			{createPortal(
				<div
					className={twMerge(
						overlayStyles,
						isOpen === MODAL_STATUS.OPENED && openedOverlayStyles,
						isOpen === MODAL_STATUS.CLOSED && closedOverlayStyles,
						isOpen === MODAL_STATUS.FIRST_TIME_LOADED && ''
					)}
					onClick={handleClickOutside}
				>
					<div className={modalStyles}>
						<Heading className={headingStyles} level={4}>
							RULES
						</Heading>
						<img className={rulesStyles} src={rulesIcon} alt="rules" />
						<button className={closeButtonStyles} onClick={handleClose}>
							<img src={crossIcon} alt="close modal" />
						</button>
					</div>
				</div>,
				document.body
			)}
		</>
	)
}
