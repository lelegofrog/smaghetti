import React from 'react';
import type { Entity } from '../types';
import { encodeObjectSets, getBankParam1 } from '../util';
import { TILE_SIZE } from '../../tiles/constants';
import { ANY_SPRITE_GRAPHIC_SET } from '../constants';
import { objectSets } from './objectSets';
import { IconWater } from '../../icons';

const WATER_COLOR = 'rgb(24, 104, 200)';

const UnderwaterWater: Entity = {
	paletteCategory: 'terrain',
	paletteInfo: {
		subCategory: 'terrain-water',
		title: 'Underwater Water',
		description:
			"One option for an underwater level, but also check out regular ol' Water too",
		helpId: 'underwater-water',
	},

	objectSets: encodeObjectSets(objectSets),
	spriteGraphicSets: ANY_SPRITE_GRAPHIC_SET,
	layer: 'stage',
	editorType: 'cell',
	dimensions: 'xy',
	objectId: 0x25,
	param1: 'height',
	param2: 'width',
	emptyBank: 1,

	toObjectBinary({ x, y, w, h }): number[] {
		return [getBankParam1(1, h), y, x, this.objectId, w];
	},

	simpleRender(size) {
		return (
			<div
				className="relative"
				style={{ width: size, height: size, backgroundColor: WATER_COLOR }}
			>
				<IconWater
					style={{ borderRadius: '10%' }}
					className="absolute bottom-1 right-1 w-4 h-4 text-blue-200"
				/>
			</div>
		);
	},

	render() {
		return (
			<div
				className="opacity-25"
				style={{
					width: TILE_SIZE,
					height: TILE_SIZE,
					backgroundColor: WATER_COLOR,
				}}
			>
				<IconWater
					style={{ borderRadius: '10%' }}
					className="absolute bottom-0 right-0 w-1 h-1 text-blue-200"
				/>
			</div>
		);
	},
};

export { UnderwaterWater };
