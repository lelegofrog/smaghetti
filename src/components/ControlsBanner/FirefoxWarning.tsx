import React from 'react';
import clsx from 'clsx';
import { FaFirefox } from 'react-icons/fa';

import styles from './FirefoxWarning.module.css';

type FirefoxWarningProps = {
	className?: string;
};

function FirefoxWarning({ className }: FirefoxWarningProps) {
	return (
		<div
			className={clsx(
				className,
				styles.root,
				'flex flex-row py-1 px-3 items-center space-x-2'
			)}
		>
			<FaFirefox />
			<span>the game may run slowly in Firefox</span>
		</div>
	);
}

export { FirefoxWarning };
