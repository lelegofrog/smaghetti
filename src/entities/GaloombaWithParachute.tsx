import React from 'react';
import type { Entity } from './types';
import { TILE_SIZE } from '../tiles/constants';
import { ANY_OBJECT_SET } from './constants';
import { TileSpace } from './TileSpace';

const GaloombaWithParachute: Entity = {
	paletteCategory: 'enemy',
	paletteInfo: {
		subCategory: 'enemy-common',
		title: 'Galoomba - Parachute',
	},

	objectSets: ANY_OBJECT_SET,
	spriteGraphicSets: [-1, -1, -1, -1, -1, 6],
	layer: 'actor',
	editorType: 'entity',
	dimensions: 'none',
	objectId: 0x15,

	resource: {
		romOffset: 0x18c914,
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
		tiles: [
			[64, 65],
			[96, 97],
			[68, { tileIndex: 68, flip: 'h' }],
			[100, { tileIndex: 100, flip: 'h' }],
		],
	},

	toSpriteBinary(x, y) {
		return [0, this.objectId, x, y];
	},

	simpleRender(size) {
		return (
			<div
				className="GaloombaWithParachute-bg bg-center bg-no-repeat"
				style={{
					width: size,
					height: size,
					backgroundSize: '50% 100%',
				}}
			/>
		);
	},

	render() {
		const style = {
			width: TILE_SIZE,
			height: TILE_SIZE * 2,
			marginTop: -TILE_SIZE,
		};

		const spaceStyle = {
			width: TILE_SIZE,
			height: TILE_SIZE,
			top: TILE_SIZE,
		};

		return (
			<div style={style} className="relative GaloombaWithParachute-bg bg-cover">
				<TileSpace style={spaceStyle} className="absolute" />
			</div>
		);
	},
};

export { GaloombaWithParachute };