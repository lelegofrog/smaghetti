import type { Entity } from './types';
import { getBankParam1 } from './util';
import { TILE_SIZE } from '../tiles/constants';
import React from 'react';

const TerracottaBrick: Entity = {
	paletteCategory: 'terrain',
	paletteInfo: {
		title: 'Terracotta Brick',
	},

	editorType: 'cell',
	dimensions: 'xy',
	objectId: 0x5f,
	param1: 'width',
	param2: 'height',
	emptyBank: 1,

	resource: {
		palette: [
			0x7ffb,
			0x7fff,
			0x0,
			0x575d,
			0x169a,
			0x1237,
			0xdd3,
			0x36b8,
			0x2633,
			0x15b0,
			0x12c,
			0x12c,
			0x3ebf,
			0x2e3d,
			0x19d9,
			0x155,
		],
		romOffset: 0x1cf558,
		tiles: [
			[5, 6],
			[21, 22],
		],
	},

	toObjectBinary(x, y, w, h): number[] {
		return [getBankParam1(1, w), y, x, this.objectId!, h];
	},

	simpleRender(mw, mh) {
		return (
			<div
				className="TerracottaBrick-bg bg-cover"
				style={{ width: mw, height: mh }}
			/>
		);
	},

	render() {
		return this.simpleRender!(TILE_SIZE, TILE_SIZE);
	},
};

export { TerracottaBrick };
