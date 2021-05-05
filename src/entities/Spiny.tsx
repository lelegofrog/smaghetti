import type { Entity } from './types';
import { simpleSpriteBinary } from './util';
import { TILE_SIZE } from '../tiles/constants';
import React from 'react';

const graphicSets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Spiny: Entity = {
	paletteCategory: 'enemy',
	paletteInfo: {
		title: 'Spiny',
	},

	spriteGraphicSets: [
		graphicSets,
		graphicSets,
		0,
		graphicSets,
		graphicSets,
		graphicSets,
	],
	objectId: 0x71,
	editorType: 'entity',
	dimensions: 'none',

	resource: {
		palette: [
			0x7f96,
			0x7fff,
			0x18c6,
			0x11dc,
			0x169e,
			0x1b5f,
			0x25fd,
			0x369e,
			0x475f,
			0x111d,
			0x1a1f,
			0x329f,
			0x4b7f,
			0x7bda,
			0x6b55,
			0x56b1,
		],
		romOffset: 0x2282e4,
		tiles: [
			[394, 395],
			[426, 427],
		],
	},

	toSpriteBinary(x, y) {
		return simpleSpriteBinary(x, y, this.objectId!);
	},

	simpleRender(mw, mh) {
		return (
			<div className="Spiny-bg bg-cover" style={{ width: mw, height: mh }} />
		);
	},

	render() {
		return this.simpleRender!(TILE_SIZE, TILE_SIZE);
	},
};

export { Spiny };
