import type { Entity } from './types';
import { simpleSpriteBinary } from './util';
import { TILE_SIZE } from '../tiles/constants';
import React from 'react';
import { TileSpace } from './TileSpace';

/**
 * not compatible with any existing room types :(
 */
const GiantGreenKoopa: Entity = {
	paletteInfo: {
		title: 'Giant Green Koopa',
	},

	editorType: 'entity',
	dimensions: 'none',
	objectId: 0x7a,

	resource: {
		palette: [
			0x7f96,
			0x7fff,
			0x18c6,
			0x26b,
			0x1b10,
			0x13b4,
			0x25fd,
			0x369e,
			0x475f,
			0x1abf,
			0x1c,
			0x253f,
			0x463f,
			0x7ad1,
			0x6e2c,
			0x59a6,
		],
		romOffset: 0x16ea40,
		tiles: [
			[839, 840, 840],
			[855, 856, 857],
			[871, 872, 873],
			[884, 885, 886],
		],
	},

	toSpriteBinary(x, y) {
		return simpleSpriteBinary(x, y, this.objectId!);
	},

	simpleRender(mw, mh) {
		const style = {
			width: mw,
			height: mh,
			backgroundSize: '75% 100%',
		};

		return (
			<div
				className="GiantGreenKoopa-bg bg-center bg-no-repeat"
				style={style}
			/>
		);
	},

	render() {
		const style = {
			width: TILE_SIZE * 1.5,
			height: TILE_SIZE * 2,
			backgroundSize: '100%',
			paddingBottom: TILE_SIZE,
			paddingRight: TILE_SIZE / 2,
		};

		return (
			<div className="GiantGreenKoopa-bg bg-center bg-no-repeat" style={style}>
				<TileSpace />
			</div>
		);
	},
};

export { GiantGreenKoopa };
