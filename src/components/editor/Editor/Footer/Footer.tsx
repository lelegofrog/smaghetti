import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import { createLevelData } from '../../../../levelData/createLevelData';
import { compress } from '../../../../levelData/compress';
import { LevelSizeMeter } from './LevelSizeMeter';
import memoize from 'lodash/memoize';
import { Problems } from './Problems';

type PublicFooterProps = {
	className?: string;
	style?: CSSProperties;
	onProblemClick: () => void;
};

type InternalFooterProps = {
	level: LevelToLoadInGBA;
};

const memoCompress = memoize(compress);

function Footer({
	className,
	style,
	level,
	onProblemClick,
}: PublicFooterProps & InternalFooterProps) {
	const levelData = createLevelData(level);
	const compressedA = memoCompress(levelData, 0);
	const compressedB = memoCompress(levelData, 0x80);
	const byteSize = Math.min(compressedA.byteLength, compressedB.byteLength);

	return (
		<div
			className={clsx(
				className,
				'bg-gray-700 px-4 py-1 flex flex-row justify-end items-center'
			)}
			style={style}
		>
			<Problems rooms={level.data.rooms} onProblemClick={onProblemClick} />
			<div className="flex-1" />
			<LevelSizeMeter
				className="w-1/3"
				byteSize={byteSize}
				ranges={[2024, 2070, 2110]}
			/>
		</div>
	);
}

export { Footer };
export type { PublicFooterProps };