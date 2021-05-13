import type { Entity } from './types';
import { TILE_SIZE } from '../tiles/constants';
import React from 'react';
import { ANY_SPRITE_GRAPHIC_SET } from './constants';
import { encodeObjectSets } from './util';

const InvisibleBlock: Entity = {
	paletteCategory: 'terrain',
	paletteInfo: {
		title: 'Invisible Block',
		description: 'A block you can stand on, but is invisible.',
	},

	// TODO: this is classic1-2's values. Need to figure out
	// a way to get all of the object sets
	objectSets: encodeObjectSets([[0xe, 0x3]]),
	spriteGraphicSets: ANY_SPRITE_GRAPHIC_SET,
	editorType: 'cell',
	dimensions: 'none',
	objectId: 0x9,
	emptyBank: 0,

	toObjectBinary(x, y) {
		return [0, y, x, this.objectId!];
	},

	simpleRender(width, height) {
		return <div style={{ width, height, border: '2px dotted white' }} />;
	},

	render() {
		return (
			<div
				style={{
					width: TILE_SIZE,
					height: TILE_SIZE,
					border: '1px dotted white',
				}}
			/>
		);
	},
};

export { InvisibleBlock };
