import React, { ReactElement } from 'react';
import clsx from 'clsx';

import { LevelTreeObject } from '../../types';
import { ByteInputField } from './ByteInputField';
import { LevelObject as RenderLevelObject } from '../RenderLevel/LevelObject';

type ObjectProps = {
	className?: string;
	levelObject: LevelTreeObject;
	onPatch: (arg: { offset: number; bytes: number[] }) => void;
};

const levelObjectSlices = {
	'bank/param1': [0, 1],
	y: [1, 1],
	x: [2, 1],
	id: [3, 1],
	param2: [4, 1],
};

function LevelObject({ className, levelObject, onPatch }: ObjectProps) {
	const data = levelObject.rawBytes;

	const keys = Object.keys(levelObjectSlices).reduce<ReactElement[]>(
		(building, k, i) => {
			if (i === 4 && data.length === 4) {
				return building;
			}

			return building.concat(
				<div key={k} className="text-xs text-gray-400">
					{k}
				</div>
			);
		},
		[]
	);

	const values = Object.keys(levelObjectSlices).reduce<ReactElement[]>(
		(building, k, i) => {
			if (i === 4 && data.length === 4) {
				return building;
			}

			const slice = levelObjectSlices[k as keyof typeof levelObjectSlices];
			const fieldData = data.slice(slice[0], slice[0] + slice[1]);

			return building.concat(
				<ByteInputField
					key={i}
					value={fieldData}
					onChange={(newBytes) => {
						onPatch({ offset: slice[0], bytes: newBytes });
					}}
				/>
			);
		},
		[]
	);

	return (
		<div
			className={clsx(
				className,
				'ml-8 bg-gray-600 p-2 m-2 flex flex-row items-center space-x-2'
			)}
		>
			<RenderLevelObject object={levelObject} scale={1} />
			<div
				className={clsx(
					'bg-gray-200 text-gray-900 grid grid-rows-2 gap-x-2 p-1',
					{
						'grid-cols-4': data.length === 4,
						'grid-cols-5': data.length === 5,
					}
				)}
			>
				{keys}
				{values}
			</div>
		</div>
	);
}

export { LevelObject };
