import type { Entity } from './types';
import { getBankParam1 } from './util';
import { ROOM_TYPE_SETTINGS } from '../levelData/constants';
import { TILE_SIZE } from '../tiles/constants';
import React from 'react';

const ConveyorBelt: Entity = {
	paletteCategory: 'terrain',
	paletteInfo: {
		title: 'Conveyor Belt',
		description: 'Only goes in one direction so far...',
	},

	objectSets: [ROOM_TYPE_SETTINGS.fortress.objectSet],
	graphicSets: [ROOM_TYPE_SETTINGS.fortress.objectGraphicSet],
	editorType: 'cell',
	dimensions: 'x',
	param1: 'width',
	objectId: 0x32,
	emptyBank: 1,

	resource: {
		palette: [
			0x7f96,
			0x7fff,
			0x0,
			0x15d2,
			0x2257,
			0x2afc,
			0x37be,
			0x20ba,
			0x21be,
			0x32df,
			0x3192,
			0x1636,
			0x2a9c,
			0x42ff,
			0x0,
			0x0,
		],
		romOffset: 0x131fe0,
		tiles: [
			[304, 304],
			[304, 304],
		],
	},

	toObjectBinary(x, y, w) {
		return [getBankParam1(1, w), y, x, this.objectId!];
	},

	simpleRender(mw, mh) {
		return (
			<div
				className="ConveyorBelt-bg bg-cover"
				style={{ width: mw, height: mh }}
			/>
		);
	},

	render() {
		return this.simpleRender!(TILE_SIZE, TILE_SIZE);
	},
};

export { ConveyorBelt };
