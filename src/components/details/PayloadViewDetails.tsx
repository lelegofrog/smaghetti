import React from 'react';
import clsx from 'clsx';

import { DetailsViewProps } from './index';

function PayloadViewDetails({ settings }: DetailsViewProps) {
	if (!settings.payload) {
		return null;
	}

	return (
		<div
			className={clsx(
				`${settings.payload}-bg`,
				'bg-cover absolute bottom-0 right-0 w-2 h-2 bg-black rounded-sm'
			)}
		/>
	);
}

export { PayloadViewDetails };